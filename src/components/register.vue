<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCurrentUser, useFirebaseAuth } from 'vuefire';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = useFirebaseAuth();
const router = useRouter();

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const emailError = ref('');
const passError = ref('');
const confirmPassError = ref('');

function emailRegister() {
    emailError.value = '';
    passError.value = '';
    confirmPassError.value = '';

    if (!email.value) {
        emailError.value = 'Email is required';
        return;
    }

    if (!password.value) {
        passError.value = 'Password is required';
        return;
    }

    if (password.value !== confirmPassword.value) {
        confirmPassError.value = 'Passwords do not match';
        return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
            signInWithEmailAndPassword(auth, email.value, password.value)
            router.push('/reminder'); 
        })
        .catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    emailError.value = 'The email does not have a valid format';
                    break;

                case 'auth/email-already-in-use':
                    emailError.value = 'The email is already registered';
                    break;

                case 'auth/weak-password':
                    passError.value = 'The password is too weak. It must be at least 6 characters long';
                    break;

                default:
                    console.error('Error en el registro:', error);
                    break;
            }
        });
}
</script>

<template>
  <form @submit.prevent="emailRegister">
    <label for="email">Email</label>
    <input id="email" type="email" v-model="email" placeholder="Email..." />
    <p class="error">{{ emailError }}</p>

    <label for="password">Password</label>
    <input id="password" type="password" v-model="password" placeholder="Password..." @keyup.enter="emailRegister"/>
    <p class="error">{{ passError }}</p>

    <label for="confirm-password">Confirm Password</label>
    <input id="confirm-password" type="password" v-model="confirmPassword" placeholder="Confirm Password..." @keyup.enter="emailRegister"/>
    <p class="error">{{ confirmPassError }}</p>

    <button class="reg" type="submit" @click="emailRegister">Sign up</button>
  </form>
  <RouterLink to="/login" class="back"><i class="fa-solid fa-angle-left"></i> Back</RouterLink>

</template>

<style>
</style>

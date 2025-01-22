<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { useCurrentUser, useFirebaseAuth } from 'vuefire';
    import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from 'firebase/auth';


    const auth = useFirebaseAuth();
    const router = useRouter();
    const user = useCurrentUser();
    const googleAuthProvider = new GoogleAuthProvider();
    const githubAuthProvider = new GithubAuthProvider();

    const email = ref('');
    const password = ref('');

    var emailError = ref('');
    var passError = ref('');
    

    function emailRegister() {
        router.push('/register');
    }


    function emailLogin() {
        emailError.value = "";
        passError.value = "";
        signInWithEmailAndPassword(auth, email.value, password.value).then(() => {
            router.push('/reminder'); 
        }).catch ((error) => {
        switch (error.code) {
            case 'auth/invalid-credential':
                passError.value = ('Incorrect password');
                break;
            default:
                console.error('Error en el registro:', error);
                break;
            }
        })
    }

    function googleLogIn(){
        signInWithPopup(auth, googleAuthProvider)
        .then(
            () => {
                router.push("/reminder");
                console.log("Validación correcta")
            }
        ).catch(() => {
            console.error('Failed sign')
        })
    }

    function githubLogin() {
            signInWithPopup(auth, githubAuthProvider).then(() => 
            router.push('/reminder')
        ).catch((error) => {
            console.error('Error en el inicio de sesión con GitHub:', error);
            errorMessage.value = 'No se pudo iniciar sesión con GitHub.';
        })
    }

    function logOut(){
        signOut(auth).then(
            () => {
                router.push("/")
            }
        ).catch((
            console.log("Error")
        ));
    }
</script>

<template>
    <div class="container">
      <button v-if="user" @click="logOut" class="logout">Log out</button>
      <div v-else>
        <form @submit.prevent="login">
            <label for="email">Email</label>
            <input id="email" type="email" v-model="email" placeholder="Email..." @keyup.enter="emailLogin"/>
            <p class="error"> {{ emailError }} </p>
            <label for="password">Password</label>
            <input id="password" type="password" v-model="password" placeholder="Password..." @keyup.enter="emailLogin"/>
            <p class="error"> {{ passError }} </p>
            <button class="log" type="submit" @click="emailLogin">Login</button>
            <p class="regP">If you haven't registered yet, don't hesitate to join us</p>
            <button class="reg" type="button" @click="emailRegister">Sign up</button>
        </form>
        <RouterLink to="/" class="back"><i class="fa-solid fa-angle-left"></i> Back</RouterLink>
        <RouterView />
        <div @click="googleLogIn" class="social"><i class="fa-brands fa-google"></i> Login With Google</div>
        <div @click="githubLogin" class="social"><i class="fa-brands fa-github"></i> Login With Github</div>
      </div>
    </div>
  </template>
  
  <style>
  body {
    font-family: 'Varela', sans-serif;
    margin: 0;
    padding: 0;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 20px;
  }
  
  /* Form Styles */
  form {
    background-color: #222;
    padding: 30px 40px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  input {
    width: 93%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #444;
    background-color: #1e1e1e;
    color: #ffffff;
    font-size: 16px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  input:focus {
    outline: none;
    border-color: #fcdf4f;
    box-shadow: 0 0 8px #fcdf4f;
  }
  
  /* Error Message */
  .error {
    margin: 0;
    font-size: 13px;
    color: #ff7675;
  }
  
  /* Buttons */
  button {
    padding: 12px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .log {
    background: linear-gradient(90deg, #fcdf4f, #f6e58d);
    color: #ffffff;
  }
  
  .log:hover {
    background: linear-gradient(90deg, #f6e58d, #fcdf4f);
    box-shadow: 0 4px 10px rgba(235, 232, 39, 0.6);
  }
  
.regp{
  margin: 0;
  font-size: 13px;
}

  .reg {
    background: linear-gradient(90deg, #f6e58d, #fcdf4f);
    color: #ffffff;
  }
  
  .reg:hover {
    background: linear-gradient(90deg, #fcdf4f, #f6e58d);
    box-shadow: 0 4px 10px rgba(235, 232, 39, 0.6);
  }
  
  /* Social Buttons */
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    border-radius: 5px;
    background-color: #333;
    color: #ffffff;
    font-size: 15px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 20px;
    margin-left: 60px;
  }
  
  .social:hover {
    background-color: #444;
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(235, 232, 39, 0.6);
  }
  
  .social i {
    font-size: 20px;
  }
  
  /* Back Link */
  .back {
    margin-top: 20px;
    color: #f6e58d;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }
  
  .back:hover {
    color: #ffd700;
    text-shadow: 0 0 5px #ffd700;
  }

  .logout {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    background: linear-gradient(90deg, #fcdf4f, #f6e58d);
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 10px #ffd9008d;
}

.logout:hover {
    background: linear-gradient(90deg, #f6e58d, #fcdf4f);
    box-shadow: 0 4px 10px #ffd900bc;
    transform: scale(1.05);
}



  </style>
  
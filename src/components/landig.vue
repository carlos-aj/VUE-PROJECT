<script setup>
import { useCurrentUser } from 'vuefire';
const user = useCurrentUser();

</script>

<template>
    <div class="body">
        <div class="bg-1">
            <h1 class="glitch" data-text="DON'T FORGET ANYTHING">DON'T FORGET ANYTHING</h1>
        </div>
        <button class="login">
                    <RouterLink to="/reminder" class="login-link" v-if="user">DISCOVER</RouterLink>
                    <RouterLink to="/login" class="login-link" v-else>DISCOVER</RouterLink>
        </button>
        <RouterView />
        <div class="info">
            <div>
                <h2>Task Management</h2>
                <p>With this website, you can write down all your tasks, assign them a priority, and monitor their progress or delays.</p>
            </div>
            <div>
                <h2>Learning Vue</h2>
                <p>This project was built using the Vue framework as a learning exercise to understand its functionalities.</p>
            </div>
            <div>
                <h2>Powered by Firebase</h2>
                <p>Google Firebase was used for the database and hosting, ensuring a robust and scalable solution.</p>
            </div>
        </div>
    </div>
  </template>

<style>
.body {
  margin: 0;
  height: 100vh; /* Ocupa el 100% de la altura de la ventana */
  display: flex;
  flex-direction: column; /* Apilar elementos verticalmente */
  justify-content: center; /* Centrar verticalmente */
  align-items: center; /* Centrar horizontalmente */
  text-align: center; /* Centrar el texto */
  overflow: hidden; /* Elimina el scroll de la página */
}

.bg-1 {
    margin-bottom: 40px
}

.glitch {
    display: inline-block; 
    width: 100%; 
    overflow: hidden; 
    white-space: nowrap;
    color: white;
    font-size: 100px;
    position: relative;
    margin: 0 auto;
    font-family: 'Varela', sans-serif;
    
 }

.glitch:after {
    content: attr(data-text);
    position: absolute;
    left: 16px;
    text-shadow: -1px 0 #fcdf4f;
    top: 0;
    color: white;
    background: rgb(24, 24, 24);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim 2s infinite linear alternate-reverse;
}

.glitch:before {
    content: attr(data-text);
    position: absolute;
    left: 8px;
    text-shadow: 1px 0 #fcdf4f;
    top: 0;
    color: white;
    background: rgb(24, 24, 24);
    overflow: hidden;
    clip: rect(0, 900px, 0, 0);
    animation: noise-anim-2 3s infinite linear alternate-reverse;
}

 @keyframes noise-anim {
    0% {
      clip: rect(51px, 9999px, 28px, 0);
    }
    5% {
      clip: rect(70px, 9999px, 19px, 0);
    }
    10% {
      clip: rect(92px, 9999px, 13px, 0);
    }
    15% {
      clip: rect(85px, 9999px, 49px, 0);
    }
    20% {
      clip: rect(45px, 9999px, 56px, 0);
    }
    25% {
      clip: rect(26px, 9999px, 31px, 0);
    }
    30% {
      clip: rect(62px, 9999px, 73px, 0);
    }
    35% {
      clip: rect(34px, 9999px, 11px, 0);
    }
    40% {
      clip: rect(26px, 9999px, 61px, 0);
    }
    45% {
      clip: rect(34px, 9999px, 71px, 0);
    }
    50% {
      clip: rect(35px, 9999px, 69px, 0);
    }
    55% {
      clip: rect(92px, 9999px, 81px, 0);
    }
    60% {
      clip: rect(26px, 9999px, 85px, 0);
    }
    65% {
      clip: rect(2px, 9999px, 68px, 0);
    }
    70% {
      clip: rect(54px, 9999px, 79px, 0);
    }
    75% {
      clip: rect(35px, 9999px, 85px, 0);
    }
    80% {
      clip: rect(70px, 9999px, 60px, 0);
    }
    85% {
      clip: rect(32px, 9999px, 26px, 0);
    }
    90% {
      clip: rect(94px, 9999px, 53px, 0);
    }
    95% {
      clip: rect(99px, 9999px, 92px, 0);
    }
    100% {
      clip: rect(42px, 9999px, 27px, 0);
    }
  }

  @keyframes noise-anim-2 {
    0% {
      clip: rect(21px, 9999px, 49px, 0);
    }
    5% {
      clip: rect(27px, 9999px, 52px, 0);
    }
    10% {
      clip: rect(21px, 9999px, 70px, 0);
    }
    15% {
      clip: rect(65px, 9999px, 25px, 0);
    }
    20% {
      clip: rect(24px, 9999px, 10px, 0);
    }
    25% {
      clip: rect(61px, 9999px, 64px, 0);
    }
    30% {
      clip: rect(34px, 9999px, 47px, 0);
    }
    35% {
      clip: rect(46px, 9999px, 93px, 0);
    }
    40% {
      clip: rect(46px, 9999px, 9px, 0);
    }
    45% {
      clip: rect(67px, 9999px, 36px, 0);
    }
    50% {
      clip: rect(72px, 9999px, 20px, 0);
    }
    55% {
      clip: rect(79px, 9999px, 26px, 0);
    }
    60% {
      clip: rect(13px, 9999px, 87px, 0);
    }
    65% {
      clip: rect(10px, 9999px, 25px, 0);
    }
    70% {
      clip: rect(85px, 9999px, 11px, 0);
    }
    75% {
      clip: rect(94px, 9999px, 35px, 0);
    }
    80% {
      clip: rect(50px, 9999px, 86px, 0);
    }
    85% {
      clip: rect(74px, 9999px, 67px, 0);
    }
    90% {
      clip: rect(1px, 9999px, 40px, 0);
    }
    95% {
      clip: rect(3px, 9999px, 48px, 0);
    }
    100% {
      clip: rect(90px, 9999px, 23px, 0);
    }
  }

.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 60px;
  background: linear-gradient(45deg, #f6e58d, #fcdf4f);
  border: none;
  color: white;
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.login:hover {
  transform: scale(1.1);
  background: linear-gradient(45deg, #fcdf4f, #f6e58d);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.login-link {
  text-decoration: none;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: 20px auto;
}

.info > div {
  padding: 20px;
  font-size: 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-align: left;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.info > div:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.info h2 {
  font-size: 22px;
  color: #f6e58d;
  margin-bottom: 10px;
}

.info p {
  font-size: 16px;
  line-height: 1.5;
  color: #e0e0e0;
}



</style>
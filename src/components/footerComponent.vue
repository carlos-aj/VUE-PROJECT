<script setup>

</script>

<template>
     <footer>
     <div class="footer">
          <p>Developed by Carlos Arana Jiménez</p>
          <p>Code available on <a href="https://github.com/carlos-aj/VUE-PROJECT"><i class="fa-brands fa-github"></i> github</a></p>
     </div>
     </footer>
</template>

<style scoped>
footer {
     text-align: center; /* Centrar el texto */
     display: flex;
     height: 50px; /* Define la altura fija del footer */
     color: #fff; /* Texto blanco */
     justify-content: center;
     align-items: center;
     font-size: 14px;
}

footer a {
     color: #f6e58d; /* Color amarillo claro para los enlaces */
     text-decoration: none;
     font-weight: bold;
}

footer a:hover {
     text-decoration: underline; /* Subrayado al pasar el cursor */
}


</style>
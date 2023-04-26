<template>
    <button  :class="textColor +' '+ bgColor" >{{textColor}} auf {{ bgColor }}</button>
    <br>
    
      <ul>
        <li @click="bgColor = 'bg-white'">Hintergrund weiss</li>
        <li @click="bgColor = 'bg-black'">Hintergrund schwarz</li>
        <li @click="bgColor = 'bg-red'">Hintergrund rot</li>
        <li @click="bgColor = 'bg-green'">Hintergrund grün</li>
      </ul>
   
      <ul>
        <li @click="textColor = 'text-white'">Text weiss</li>
        <li @click="textColor = 'text-black'">Text schwarz</li>
        <li @click="textColor = 'text-red'">Text rot</li>
        <li @click="textColor = 'text-green'">Text grün</li>
      </ul>
</template>


<script setup>
import { ref } from "vue";

const textColor = ref('')
const bgColor = ref('')

</script>

<style>
  .text-red{ color: red;}
  .text-white{ color: white;}
  .text-black{ color: black;}
  .text-green{ color: green;}
  
  .bg-red{ background-color: red;}
  .bg-white{ background-color: white;}
  .bg-black{ background-color: black;}
  .bg-green{ background-color: green;}

</style>


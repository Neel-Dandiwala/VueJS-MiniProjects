<template>
  <div>
    <img class="runner first" src="../assets/runner.png" alt="runner" />
    <img class="runner second" src="../assets/runner.png" alt="runner" />
    <img class="runner third" src="../assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  mounted() {
    // timeline will go here
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 0 })
    tl.to('.first', { x: 700, duration: 2, ease: 'expo.out'}, 0.25)
    tl.to('.second', { x: 200, duration: 1, ease: 'expo.out'}, '-=0.75')
    tl.to('.third', { x: 500, duration: 3, ease: 'expo.out'}, '<')
  }
}
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  width: 5em;
  margin-top: 1.5em;
}
</style>

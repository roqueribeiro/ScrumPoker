<template>
  <div id="startPage" class="scrumPokerTheme">
    <section>
      <img src="../assets/logo.png" alt="ScrumPoker"/>
      <router-link class="startButton" :to="{ name: 'ScrumPoker', params: {} }"></router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'startPage'
}
</script>

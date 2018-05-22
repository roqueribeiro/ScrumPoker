<template>
  <v-app id="app" dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              ScrumPoker
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-tile @click.stop="about = true; drawer = false">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About Scrum Poker</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Scrum Poker</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!fullscreen" v-on:click="goInFullscreen()" icon>
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-btn v-if="fullscreen" v-on:click="goOutFullscreen()" icon>
        <v-icon>fullscreen_exit</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-dialog v-model="about" max-width="500px">
      <v-card>
        <v-card-title class="headline">
          <span>About Scrum Poker</span>
        </v-card-title>
        <v-card-text>
          <p>Developed by Roque Ribeiro</p>
          <p><a href="https://github.com/roqueribeiro/ScrumPoker" target="_blank">GitHub</a><p>
          <p><a href="https://codepen.io/roqueribeiro/" target="_blank">CodePen</a></p>
          <p><a href="https://www.linkedin.com/in/roqueribeirosilva/" target="_blank">LinkedIn</a></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.stop="about = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      fullscreen: false,
      about: false
    }
  },
  props: {
    source: String
  },
  methods: {
    goInFullscreen () {
      this.fullscreen = true
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen()
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen()
      }
    },
    goOutFullscreen () {
      this.fullscreen = false
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }
}
</script>

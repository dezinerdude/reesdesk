<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
export default {
  name: 'DefaultLayout',
  components: { MainHeader },
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.menu {
  background-color: black;
}
.navbar {
  min-height: 2.1rem;
  &.toolbar {
    height: 40px;
    background-color: black;
    .social-icons {
      .navbar-item {
        &:hover {
          background-color: lighten(#000000, 20%);
        }
      }
    }
    .navbar-item {
      a {
        color: white;
        &:hover {
          text-decoration: underline;
        }
      }
      .is-active {
        color: $primary;
      }
      &:hover {
        background: none;
      }
      &.book-appointment {
        background-color: $primary;
        font-weight: 500;
        &:hover {
          background-color: lighten($primary, 7%);
        }
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
  background-color: #252525;
}
</style>

<template lang="">
  <section class="menu">
    <div class="container">
      <nav class="navbar toolbar" aria-label="main navigation">
        <div class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <b-icon
                icon="mail"
                size="is-small"
                type="is-primary"
                style="padding-right: 15px"
              />
              <a href="mailto:marie@reesdesk.com">marie@reesdesk.com</a>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item social-icons">
              <a class="navbar-item" href="https://www.facebook.com/marie.macera" title="Ree's Desk on Facebook" target="_blank">
                <img
                  class="image"
                  src="@/assets/facebook.png"
                  alt="Rees Desk on Facebook"
                >
              </a>
              <a class="navbar-item" href="https://twitter.com/macera_marie" target="_blank" title="Ree's Desk on Twitter">
                <img
                  class="image"
                  src="@/assets/twitter.png"
                  alt="Rees Desk on Twitter"
                >
              </a>
              <a class="navbar-item" href="">
                <img
                  class="image"
                  src="@/assets/linkedin.png"
                  alt="Rees Desk on LinkedIn"
                >
              </a>
            </div>
            <div class="navbar-item book-appointment">
              <a class="is-uppercase" @click="$emit('contact')">Book an appointment</a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <b-navbar class="is-dark is-fixed-top" :centered="true">
      <template #start>
        <NuxtLink
          :to="{ path: '/', hash: '#welcome' }"
          class="navbar-item is-uppercase"
          exact-active-class="is-active"
        >
          Home
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/', hash: '#about-us' }"
          class="navbar-item is-uppercase"
          exact-active-class="is-active"
        >
          About Us
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/', hash: '#services' }"
          class="navbar-item is-uppercase"
          exact-active-class="is-active"
        >
          Our Services
        </NuxtLink>
        <NuxtLink
          :to="{ path: '/', hash: '#partners' }"
          class="navbar-item is-uppercase"
          exact-active-class="is-active"
        >
          Trusted Partners
        </NuxtLink>
        <a
          class="navbar-item is-uppercase"
          @click="$emit('contact')"
        >
          Contact
        </a>
      </template>
    </b-navbar>
  </section>
</template>
<script>
export default {}
</script>
<style lang=""></style>

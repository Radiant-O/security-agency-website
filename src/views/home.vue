<template>
  <Navbar/>
  <Hero/>
  
</template>

<script>
import Navbar from "../components/navbar.vue"
import Hero from "../components/hero.vue"
import Contacts from "../components/contacts.vue"
import Service from "../components/service.vue"
import Footer from "../components/footer.vue"
import Homepart from "../components/homepart.vue"
export default {
    components: {
        Navbar, Hero, Contacts, Service, Homepart, Footer
    }
}
</script>

<style>

</style>
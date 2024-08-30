<template>
  <div class="layout">
    <v-layout>
      <CartDrawer />
      <v-main>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          eius in quasi sed cumque quia dolor? Ipsa earum saepe aliquid, quia
          velit delectus harum veritatis enim illum, consequatur debitis
          eveniet!
        </p>
      </v-main>
      <AppNav />
      <AppFooter />
    </v-layout>
  </div>
</template>

<script>
import AppNav from "./AppNav.vue";
import AppFooter from "./AppFooter.vue";
import CartDrawer from "./CartDrawer.vue";
export default {
  data: () => ({
    drawer: true,
  }),
  components: {
    AppNav,
    AppFooter,
    CartDrawer,
  },
};
</script>
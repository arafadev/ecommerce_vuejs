<template>
  <div class="drawer">
    <v-navigation-drawer location="right" v-model="drawer">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempore
        exercitationem dicta, aliquam unde molestiae. Eveniet provident harum
        dolor omnis odit veniam, eaque est sapiente ea! Quidem consequatur id
        officia.
      </p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  inject: ["Emitter"],
  data: () => ({
    drawer: false,
  }),
  mounted() {
    this.Emitter.on("openCart", () => {
      this.drawer = true;
    });
  },
};
</script>

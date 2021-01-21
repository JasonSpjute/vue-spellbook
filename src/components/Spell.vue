<template>
  <div class="col-6 text-center">
    <router-link :to="{ name: 'CurrentSpell', params: { id: spellProp.index }}">
      <h3>{{ spellProp.name }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Spell',
  props: {
    spellProp: { type: Object, required: true }
  },
  setup(props) {

  }
}
</script>

<style lang="scss" scoped>

</style>

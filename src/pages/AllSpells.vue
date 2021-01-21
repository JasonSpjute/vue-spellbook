<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>All Spells</h1>
      </div>
    </div>
    <div class="row">
      <Spell v-for="hamberger in state.spells" :key="hamberger.index" :spell-prop="hamberger" />
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { logger } from '../utils/Logger'
import { spellService } from '../services/SpellService'
import { AppState } from '../AppState'
export default {
  name: 'AllSpells',
  setup() {
    const state = reactive({
      spells: computed(() => AppState.allSpells)
    })
    onMounted(async() => {
      try {
        await spellService.getSpells()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>

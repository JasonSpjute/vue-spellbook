<template>
  <h1>{{ spell.name }}</h1>
  <p>{{ spell.desc }}</p>
</template>
<script>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { spellService } from '../services/SpellService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'CurrentSpell',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await spellService.getOne(route.params.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      spell: computed(() => AppState.active)
    }
  }
}
</script>

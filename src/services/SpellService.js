import { AppState } from '../AppState'
import { dndApi } from './AxiosService'

class SpellService {
  async getSpells() {
    const res = await dndApi.get()
    AppState.allSpells = res.data.results
  }

  async getOne(id) {
    const res = await dndApi.get(id)
    AppState.active = res.data
  }
}

export const spellService = new SpellService()

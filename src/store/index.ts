import {defineStore} from 'pinia'
import {ref} from "vue";

export const testStore = defineStore('test', () => {
  const count2 = ref(0)
  const increment = () => {
    count2.value++
  }

  return { count2, increment }
})

<template>
  <app-loader v-if="loading"/>
  <app-page v-else title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>

    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"/>
      </app-modal>
    </teleport>
  </app-page>

</template>

<script>
import AppPage from '@/components/ui/AppPage.vue'
import RequestTable from '@/components/request/RequestTable.vue'
import AppModal from '@/components/ui/AppModal.vue'
import RequestModal from '@/components/request/RequestModal.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import AppLoader from '@/components/ui/AppLoader.vue'

export default {
  name: 'Home',
  components: { AppLoader, AppPage, RequestTable, AppModal, RequestModal},
  setup() {
    const modal = ref(false)
    const store = useStore()
    const requests = computed(() => store.getters['request/requests'])
    const loading = ref(false)
    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    return {
      modal,
      requests,
      loading
    }
  }
}
</script>

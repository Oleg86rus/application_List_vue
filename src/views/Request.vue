<template>
  <app-loader v-if="loading"></app-loader>
  <app-page v-else-if="request" title="Заявка" back>
    <p><strong>Имя владельца</strong>: {{request.fio}}</p>
    <p><strong>Телефон</strong>: {{request.phone}}</p>
    <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
    <p><strong>Статус</strong>: <app-status :type="request.status"/></p>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Удалить</button>
    <button class="btn" v-if="hasChanges" @click="update">Обновить</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    Заявки с ID = {{ route.params.id }} нет
  </h3>
</template>


<script>
import AppPage from '@/components/ui/AppPage.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import AppStatus from '@/components/ui/AppStatus.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref, computed, markRaw } from 'vue'
import { useStore } from 'vuex'
import { currency } from '@/utils/currency'
import { useRouter } from 'vue-router/dist/vue-router'

export default {
  name: 'Request',
  components: {AppPage, AppLoader, AppStatus},
  setup() {
    const route = useRoute()
    const store = useStore()
    const router = useRouter()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadById', route.params.id)
      status.value = request.value?.status
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }

    const update = async () => {
      const data = {...request.value, id: route.params.id, status: status.value}
      await store.dispatch('request/update', data)
      request.value.status = status.value
    }

    return {request, loading, route, currency, remove, update, status, hasChanges}
  }
}
</script>

<style scoped>

</style>
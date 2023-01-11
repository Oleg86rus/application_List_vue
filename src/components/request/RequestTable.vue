<template>
  <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-if="requests.length !== 0">
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'RequestTable',
  props: ['requests']
}
</script>

<style scoped>

</style>
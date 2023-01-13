<template>
  <app-page back title="Помощь">
    <question-item
        v-for="q in questions"
        :key="q.title"
        :question="q"
    >
    </question-item>
  </app-page>

</template>

<script>

import AppPage from '@/components/ui/AppPage.vue'
import QuestionItem from '@/components/question/QuestionItem.vue'

export default {
  components: {AppPage, QuestionItem},
  setup() {
    const questions = [
      {
        title: 'Вопрос 1',
        text: 'ответ 1'
      },
      {
        title: 'Вопрос 2',
        text: 'ответ 2'
      }
    ]
    return {questions}
  }
}
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="row items-center justify-evenly">
      <WhiteBreadCrumb />
      <example-component title="Example component" active :todos="todos" :meta="meta"></example-component>
      <WhiteButton />
      <WhiteTable />
      <WhiteCard />
      <WhiteForm />
    </q-page>
  </q-layout>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';
import WhiteButton from '../../components/Button/WhiteButton.vue';
import WhiteCard from '../../components/Card/WhiteCard.vue';
import WhiteTable from '../../components/Table/WhiteTable.vue';
import WhiteForm from '../../components/Form/WhiteForm.vue';
import WhiteBreadCrumb from '../../components/BreadCrumb/WhiteBreadCrumb.vue';
export default defineComponent({
  name: 'IndexPage',
  components: {
    ExampleComponent,
    WhiteButton,
    WhiteCard,
    WhiteTable,
    WhiteForm,
    WhiteBreadCrumb,
  },
  setup(context) {
    console.log(context, 'admin');
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>

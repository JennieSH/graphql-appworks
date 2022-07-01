<script setup lang="ts">
import { watch } from "vue";
import BookList from "./components/BookList.vue";
import Form from "./components/Form.vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  {
    books {
      name
      id
    }
  }
`);

watch(() => {
  console.log(result.value);
});
</script>

<template>
  <BookList />
  <Form class="absolute bottom-0" />
</template>

<style></style>

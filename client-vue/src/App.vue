<script setup lang="ts">
import { watch } from "vue";
import BookList from "./components/BookList.vue";
import Form from "./components/Form.vue";
import { useBooksQuery } from "./generated/graphql";

const { result, loading } = useBooksQuery();

watch(() => {
  console.log(result.value);
});
</script>

<template>
  <BookList />
  <Form class="absolute bottom-0" />
</template>

<style></style>

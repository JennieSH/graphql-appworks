<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "BookList",
});
</script>

<script setup lang="ts">
import BookDetail from "./BookDetail.vue";

const data = {
  books: [
    {
      id: "1",
      name: "GraphQL",
    },
    {
      id: "2",
      name: "React",
    },
  ],
};
</script>

<template>
  <section class="grid grid-cols-3 min-h-screen">
    <div class="col-span-2 p-10">
      <h1 class="font-bold text-center text-3xl font-mono mb-12">
        Reading List
      </h1>

      <div class="flex flex-wrap gap-3">
        <button
          v-for="book in data.books"
          :key="book.id"
          class="p-2 border-2 border-neutral-300 rounded-lg bg-neutral-200 hover:outline outline-offset-2"
        >
          {{ book.name }}
        </button>
      </div>
    </div>

    <BookDetail />
  </section>
</template>

<style></style>

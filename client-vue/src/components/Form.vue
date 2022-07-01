<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Form",
});
</script>

<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const genre = ref("");
const authorId = ref("");

const submitForm = (e) => {
  e.preventDefault();
  alert(name.value);
};
</script>

<template>
  <form
    class="w-[600px] p-10 flex flex-col items-end gap-4 bg-gray-50"
    @submit="submitForm"
  >
    <div class="field">
      <label>Book name：</label>
      <input
        class="w-60 p-2 rounded-sm focus:outline-stone-400"
        type="text"
        v-model="name"
      />
    </div>
    <div class="field">
      <label>Genre：</label>
      <input
        class="w-60 p-2 rounded-sm focus:outline-stone-400"
        type="text"
        v-model="genre"
      />
    </div>
    <div>
      <label>Author：</label>
      <select
        class="w-60 p-2 rounded-sm focus:outline-stone-400"
        v-model="authorId"
      >
        <option>Select author</option>
        <option disabled>loading Authors...</option>
      </select>
    </div>
    <button
      class="w-10 h-10 text-white bg-stone-600 rounded-full text-2xl hover:bg-stone-800"
    >
      ＋
    </button>
  </form>
</template>

<style></style>

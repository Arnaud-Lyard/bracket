<template>
  Nous avons un nombre de pages total: {{ totalPages }}<br />
  Nombre d'éléments skippés :
  {{ offset }}<br />
  <!-- Nous sommes actuellement sur la page
  {{ currentPage }}
  <br />
  La page précédente est : {{ currentPage - 1 }}
  <br />
  La page suivante est : {{ currentPage + 1 }}<br />
  {{ offset }} -->

  <button class="button" @click="onPreviousPage()">-</button>
  <button class="button" @click="onNextPage()">+</button>
</template>

<script lang="ts" setup>
import { computed, onMounted, Ref } from "vue";
import { useGetAllArticlesLazyQuery } from "../api/graphql/graphql";
import { ref } from "vue";
import { GetAllArticlesQuery } from "../api/graphql/graphql";
import { ComputedRef } from "vue";
const props = defineProps<{
  articlesPagination: GetAllArticlesQuery;
  currentPage: number;
}>();
const emit = defineEmits<{
  (
    event: "changePage",
    payload: {
      offset: ComputedRef<number>;
      articlesPerPage: number;
      currentPage: Ref<number>;
    }
  ): void;
}>();
function onPreviousPage() {
  currentPage.value = currentPage.value - 1;
  emit("changePage", { offset, articlesPerPage, currentPage });
}
function onNextPage() {
  currentPage.value = currentPage.value + 1;
  emit("changePage", { offset, articlesPerPage, currentPage });
}

const articlesPerPage =
  props.articlesPagination.articlesPagination.nodes.length; // 5
let currentPage = ref(props.currentPage);

const offset = computed(() => {
  return currentPage.value * articlesPerPage;
});
let totalArticles = props.articlesPagination.articlesPagination.totalCount;
const totalPages = Math.ceil(totalArticles / articlesPerPage);
</script>

<style scoped>
.button {
  background-color: rgb(192, 192, 192);
}
</style>

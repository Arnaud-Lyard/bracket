<template>
  <h1>TO DO LIST</h1>
  <ArticlesForm @create="handleCreate" />
  <div v-if="result && result.articlesPagination.nodes.length > 0">
    <Pagination
      :articlesPagination="result"
      :currentPage="currentPage"
      @changePage="changePage"
    />
  </div>
  <div class="container">
    <div class="main-content">
      <div
        v-if="result && result.articlesPagination.nodes.length > 0"
        v-for="article in result.articlesPagination.nodes"
        :key="article.id"
      >
        <div
          class="article-content"
          :style="{
            boxShadow: `var(${getCssVarName('light')})`,
          }"
        >
          <el-icon class="icon" @click="showModal(article)"
            ><Setting
          /></el-icon>

          <h4>{{ article.title }}</h4>
          <p>{{ article.description }}</p>
        </div>
      </div>
    </div>
    <Modal
      v-if="articleToUpdate"
      :selectedArticle="articleToUpdate"
      @close="closeModal"
      @delete="handleDelete"
      @update="handleUpdate"
    />
  </div>
</template>
<script lang="ts" setup>
import ArticlesForm from "../components/ArticlesForm.vue";
import type { Ref } from "vue";
import { ref, onMounted, computed, watch } from "vue";
import Modal from "../components/Modal.vue";
import { ArticleCreationPayload } from "../types/article.types";
import { Article, GetAllArticlesQuery } from "../api/graphql/graphql";
import { GET_ARTICLES } from "../api/articles";
import {
  useGetAllArticlesLazyQuery,
  useCreateArticleMutation,
  useDeleteArticleMutation,
  useUpdateArticleMutation,
} from "../api/graphql/graphql";
import { provideApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "../../ApolloClient";
import Pagination from "../components/Pagination.vue";
provideApolloClient(apolloClient);
const skip = ref(0);
const currentPage = ref(0);

const { result, variables, load, refetch } = useGetAllArticlesLazyQuery({
  skip: skip.value,
});
const articleToUpdate = ref<Article | null>(null);

onMounted(() => {
  load();
});

const handleCreate = (formPayload: ArticleCreationPayload): void => {
  const { mutate } = useCreateArticleMutation({
    variables: {
      title: formPayload.title,
      description: formPayload.description,
    },
  });
  mutate().then(() => {
    refetch();
  });
};
const handleDelete = (modalId: Article["id"]): void => {
  const { mutate } = useDeleteArticleMutation({
    variables: {
      id: modalId,
    },
  });
  mutate().then(() => {
    refetch();
  });
};
const handleUpdate = (modalUpdated: Article): void => {
  const { mutate } = useUpdateArticleMutation({
    variables: {
      id: modalUpdated.id,
      title: modalUpdated.title,
      description: modalUpdated.description,
    },
  });
  mutate().then(() => {
    refetch();
  });
};
const changePage = (paginationPayload: any) => {
  currentPage.value = paginationPayload.currentPage.value;
  variables.value = { skip: paginationPayload.offset.value };
};

const showModal = (articleItem: Article): void => {
  articleToUpdate.value = articleItem;
};

const closeModal = (): void => {
  articleToUpdate.value = null;
};

const getCssVarName = (type: string) => {
  return `--el-box-shadow${type ? "-" : ""}${type}`;
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
.main-content {
  justify-content: center;
  width: 100%;
}
h1 {
  text-align: center;
  color: rgb(0, 189, 223);
}
.article-content {
  position: relative;
  background: #fff;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  min-height: 175px;
}
.article-content h4 {
  color: rgb(0, 189, 223);
  font-size: 1.2em;
}
.icon {
  position: absolute;
  font-size: 18px;
  top: 20px;
  right: 20px;
  color: #000;
}
.icon:hover {
  color: rgb(0, 189, 223);
  transition: 0.3s;
}
</style>

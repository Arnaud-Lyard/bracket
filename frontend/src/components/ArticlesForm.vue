<template>
  <el-form @submit.prevent :inline="true">
    <el-form-item label="Article title">
      <el-input v-model="formPayload.title" />
    </el-form-item>
    <el-form-item label="Article content">
      <el-input v-model="formPayload.description" />
    </el-form-item>
    <el-button type="primary" @click="onCreate()">Save</el-button>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { defineEmits } from "vue";
import { ArticleCreationPayload } from "../types/article.types";

const formPayload: ArticleCreationPayload = reactive({
  title: "",
  description: "",
});

const emit = defineEmits<{
  (event: "change"): void;
  (event: "create", articlePayload: ArticleCreationPayload): void;
}>();

function onCreate() {
  emit("create", formPayload);
}
</script>

<style scoped>
.form {
  width: 400px;
  padding: 20px;
}
label,
input {
  display: block;
  font-size: 1.2em;
}
input {
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}
textarea {
  width: 392px;
  height: 200px;
  margin-bottom: 20px;
}
</style>

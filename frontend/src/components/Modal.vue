<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h1>MODIFIER MA TO DO</h1>
          </slot>
          <button
            type="button"
            class="btn-close"
            @click="onClose"
            aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <div>
              <div class="form">
                <el-form @submit.prevent :model="modal">
                  <el-form-item label="Article title">
                    <el-input v-model="modal.title" />
                  </el-form-item>
                  <el-form-item label="Article content">
                    <el-input v-model="modal.description" />
                  </el-form-item>
                  <el-button @click="onUpdate()" type="success"
                    >Update</el-button
                  >
                  <el-button @click="onDelete()" type="danger"
                    >Delete</el-button
                  >
                  <el-button @click="onClose" type="info">Close</el-button>
                </el-form>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, Ref } from "vue";
import { defineProps } from "vue";
import { ref } from "vue";
import { Article } from "../api/graphql/graphql";
const props = defineProps<{
  selectedArticle: Article;
}>();

const modal: Ref<Article> = ref<Article>({
  id: "",
  title: "",
  description: "",
  createdAt: "",
  updatedAt: "",
});
onMounted(() => {
  modal.value.id = props.selectedArticle.id;
  modal.value.title = props.selectedArticle.title;
  modal.value.description = props.selectedArticle.description;
});

const emit = defineEmits<{
  (event: "close"): void;
  (event: "update", modalPayload: Article): void;
  (event: "delete", modalPayload: Article["id"]): void;
}>();
function onClose() {
  emit("close");
}
function onDelete() {
  emit("delete", modal.value.id);
  emit("close");
}
function onUpdate() {
  emit("update", modal.value);
  emit("close");
}
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  z-index: 100;
  margin: auto;
}

.modal-backdrop::before {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(255, 255, 255, 0.474);
  backdrop-filter: blur(6px);
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: rgb(0, 217, 255);
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: rgb(0, 217, 255);
  background: transparent;
}

.btn-green {
  color: white;
  background: rgb(0, 217, 255);
  border: 1px solid rgb(0, 217, 255);
  border-radius: 2px;
}

.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

h1 {
  color: rgb(0, 189, 223);
  text-align: center;
}
/* Form */
.form {
  max-width: 1000px;
  margin: 0 auto;
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
.button-submit {
  border: 0;
  background-color: rgb(0, 189, 223);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
}
.button-submit:hover {
  background-color: rgb(0, 217, 255);
  transition: 0.3s;
}
.button-delete {
  border: 0;
  background-color: rgb(172, 0, 0);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: 10px;
}
.button-delete:hover {
  background-color: rgb(238, 2, 2);
  transition: 0.3s;
}
.button-cancel {
  border: 0;
  background-color: rgb(152, 152, 152);
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2em;
  margin-left: 10px;
}
.button-cancel:hover {
  background-color: rgb(197, 197, 197);
  transition: 0.3s;
}

textarea {
  width: 992px;
  height: 200px;
  margin-bottom: 20px;
}
@media (max-width: 1040px) {
  textarea {
    width: 100%;
  }
}
</style>

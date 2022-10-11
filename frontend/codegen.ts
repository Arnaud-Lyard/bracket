import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4200/graphql",
  documents: "./src/api/articles.ts",
  overwrite: true,
  watch: true,
  generates: {
    "src/api/graphql/graphql.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-vue-apollo"],
      config: { withCompositionFunctions: true },
    },
  },
};

export default config;

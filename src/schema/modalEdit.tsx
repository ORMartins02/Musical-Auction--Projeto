import * as yup from "yup";

export const schemaModal = yup.object({
  title: yup.string(),
  description: yup.string().required("Mude sua descrição"),
  img: yup.string().url("precisa ser uma URL válida"),
  category: yup.string().required("Categoria obrigatória"),
});

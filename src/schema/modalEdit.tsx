import * as yup from "yup";

export const schemaModal = yup.object({
  title: yup.string(),
  description: yup.string().required("A senha é obrigatoria!"),
  img: yup.string().url("precisa ser uma URL válida"),
  minPrice: yup.string().required("Insira um valor mínimo para o lance"),
  category: yup.string().required("Categoria obrigatória"),
});

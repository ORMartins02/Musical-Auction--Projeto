import * as yup from "yup";

export const schemaModalAddProduct = yup.object({
  title: yup.string().required("Insira o nome do instrumento"),
  description: yup
    .string()
    .required("Insira uma descrição para o seu instrumento"),
  img: yup
    .string()
    .url("precisa ser uma URL válida")
    .required("Insira um link de uma imagem"),
  minPrice: yup
    .number()
    .required("Insira um valor mínimo para seu instrumento"),
  minBid: yup.number().required("Insira um valor mínimo para cada lance"),
  category: yup.string().required("Categoria obrigatória"),
});

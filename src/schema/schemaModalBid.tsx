import * as yup from "yup";

export const schemaModalBid = yup.object({
  currentBid: yup
    .number()
    .required("O lance mínimo é o valor atual mais o valor mínimo."),
});

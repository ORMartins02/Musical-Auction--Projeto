import * as yup from "yup";

export const editUserSchema = yup.object().shape({
  userImg: yup.string().url().required("Link obrigatório!"),
  name: yup.string().required("Nome obrigatório!"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um símbolo"
    )
    .required("Senha obrigatória!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
});

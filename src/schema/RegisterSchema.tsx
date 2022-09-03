import * as yup from "yup";

// const regexPass = new RegExp(
//   "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
// );

// const regexContact = new RegExp(
//   "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$"
// );

// const regexAddress = new RegExp("^[0-9]{5}-[0-9]{3}$");

export const registerSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório!").email("Email inválido"),
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
  name: yup.string().required("Nome obrigatório!"),
  ageOfBirth: yup.number().required("Ano de nascimento obrigatório!"),
  contact: yup
    .string()
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
      "O formato de número é (00)00000-0000"
    )
    .required("Telefone obrigatório!"),
  address: yup
    .string()
    .matches(
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
      "O formato do CEP é 00000-00"
    )
    .required("Endereço obrigatório!"),
  userImg: yup.string().url().required("Link obrigatório!"),
});

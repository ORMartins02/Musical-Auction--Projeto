import * as yup from "yup";

const regexPass = new RegExp(
  "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"
);

const regexContact = new RegExp(
  "^([1-9]{2}) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$"
);

const regexAddress = new RegExp("^[0-9]{5}-[0-9]{3}$");

export const RegisterSchema = yup.object().shape({
  /*name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("Email obrigatório!").email("Email inválido"),
  password: yup
    .string()
    .matches(
      regexPass,
      "A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, um número e um símbolo"
    )
    .required("Senha obrigatória!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem")
    .required("Corfimação de senha obrigatória!"),
  ageOfBirth: yup.number().required("Ano de nascimento obrigatório!"),
  contact: yup
    .string()
    .matches(regexContact, "O formato de número é (00)00000-0000")
    .required("Telefone obrigatório!"),
  address: yup
    .string()
    .matches(regexAddress, "O formato do CEP é 00000-00")
    .required("Endereço obrigatório!"),*/
});

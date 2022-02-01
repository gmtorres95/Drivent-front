import { cpf } from "cpf-cnpj-validator";
import dayjs from "dayjs";

const validations = {
  name: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite um nome válido",
    },
  },

  cpf: {
    custom: {
      isValid: (value) => cpf.isValid(value),
      message: "Digite um CPF válido",
    },
  },

  phone: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) >= 13,
      message: "Digite um telefone válido",
    },
  },

  cep: {
    custom: {
      isValid: (value) => parseInt(value?.length, 10) === 9,
      message: "Digite um CEP válido",
    },
  },

  city: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite uma cidade",
    },
  },

  neighborhood: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite um bairro",
    },
  },

  street: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Digite uma rua",
    },
  },

  state: {
    custom: {
      isValid: (value) => isValidString(value),
      message: "Selecione um estado",
    },
  },

  birthday: {
    custom: {
      isValid: (value) => {
        if(!value) return false;
        if(dayjs(value).isAfter(dayjs(dayjs().subtract(18, "year")))) return false;

        return true;
      },
      message: "Data inválida! O usuário deve ter 18 anos ou mais",
    },
  },

  number: {
    custom: {
      isValid: (value) => Number(value),
      message: "Digite um número válido",
    },
  },
};

export default validations;

function isValidString(value) {
  return value || value?.trim();
}

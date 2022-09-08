import toast from "react-hot-toast";

export const toastSuccesLogin = () =>
  toast.success(" Login efetuado com sucesso! ", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesRegister = () =>
  toast.success("Usuário registrado com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesInstrumentRegister = () =>
  toast.success("Instrumento adicionado com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesInstrumentRmv = () =>
  toast.success("Tecnologia removida com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

  export const toastSuccesFinishOff = () =>
  toast.success("Leilão encerrado com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastSuccesBid = () =>
  toast.success("Seu lance foi feito com sucesso!", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#6fe600",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFail = () =>
  toast.error("Ops! Algo deu errado", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFailLogin = () =>
  toast.error("Ops! Login ou senha errada", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFailBidUserID = () =>
  toast.error("Ops! Você não pode dar lance no seu leilão.", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

export const toastFailBidRegister = () =>
  toast.error("Seu lance é muito baixo.", {
    duration: 4000,
    position: "top-center",

    // Styling
    style: {},
    className: "",

    // Change colors of success/error/loading icon
    iconTheme: {
      primary: "#ff2922",
      secondary: "#fff",
    },

    // Aria
    ariaProps: {
      role: "status",
      "aria-live": "polite",
    },
  });

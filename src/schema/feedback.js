import * as yup from "yup";

let feedbackSchema = yup.object().shape({
  // subject: yup.string().required("Пожалуйста, выберите тему сообщения"),
  name: yup
    .string()
    .min(3, "Це не схоже на ім'я")
    .typeError()
    .required("Це не схоже на ім'я"),
  email: yup
    .string()
    .min(3, "Це не схоже на email")
    .typeError()
    .required("Це не схоже на email"),
  number: yup
    .string()
    .min(3, "Це не схоже на номер")
    .typeError()
    .required("Це не схоже на номер"),
  comment: yup
    .string()
    .min(1, "Це поле не може бути порожнім")
    .typeError()
    .required("Це поле не може бути порожнім"),
});

export default feedbackSchema;

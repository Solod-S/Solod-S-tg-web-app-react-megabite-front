import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FormikWrapper,
  ThemeIcon,
  NameIcon,
  PhoneIcon,
  MailIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  TextAreaField,
  TextAreaLabel,
  TextArea,
  Button,
  ErrorWrapper,
  Error,
} from "./WebForm.styled";

import feedbackSchema from "../../schema/feedback";
import { addForm } from "../../services/API/FormApi";

const initialValues = {
  name: "",
  number: "",
  subject: "Запитання",
  comment: "",
  email: "",
};

function WebForm() {
  const handleSubmit = async (values, actions) => {
    await addForm(values);
    notify();
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const notify = () =>
    toast("Дякуємо, менеджер вже працює над вашим зверненням");

  return (
    <Formik
      validationSchema={feedbackSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikWrapper>
          <Title>Зворотній зв'язок</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="subject">Тема</InputLabel>
                <Error name="subject" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input component="select" name="subject" id="subject">
                  <option value="Запитання">Запитання</option>
                  <option value="Відгук">Відгук</option>
                  <option value="Повернення">Повернення</option>
                  <option value="Інше">Інше</option>
                </Input>
                <ThemeIcon size={19} aria-label="Theme Icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="name">Ім'я</InputLabel>
                <Error name="name" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                />
                <NameIcon size={19} aria-label="Name Icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="number">Номер телефону</InputLabel>
                <Error name="number" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input type="tel" name="number" id="number" placeholder=" " />
                <PhoneIcon size={16} aria-label="Phone icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="email">Пошта</InputLabel>
                <Error name="email" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                />
                <MailIcon size={19} aria-label="Mail icon" />
              </Wrapper>
            </FormField>
            <TextAreaField>
              <ErrorWrapper>
                <TextAreaLabel htmlFor="comment">Коментар</TextAreaLabel>
                <Error name="comment" component="div" />
              </ErrorWrapper>
              <TextArea
                name="comment"
                rows="5"
                id="comment"
                component="textarea"
                placeholder="Введите текст"
              />
            </TextAreaField>
            <Button
              isSubmitting={isSubmitting}
              type="submit"
              disabled={isSubmitting}
            >
              Відправити
            </Button>
            <ToastContainer
              toastStyle={{ backgroundColor: "#2196F3", color: "white" }}
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              // pauseOnHover
              theme="colored"
            />
          </ForM>
        </FormikWrapper>
      )}
    </Formik>
  );
}

export default WebForm;

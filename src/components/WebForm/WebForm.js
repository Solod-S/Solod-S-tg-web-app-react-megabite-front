import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import { axiosClodinaryInstance } from "../../services/API/axios";
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
  Select,
} from "./WebForm.styled";

import feedbackSchema from "../../schema/feedback";
import { addForm } from "../../services/API/FormApi";
import { useRef } from "react";

const initialValues = {
  name: "",
  number: "",
  subject: "Запитання",
  comment: "",
  email: "",
  file: "",
};

function WebForm() {
  const fileInputRef = useRef(null);
  const handleSubmit = async (
    { name, number, subject, comment, email, file },
    actions
  ) => {
    if (file !== "") {
      try {
        // cloudinaryResponse start
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "rgnqld0i");
        const cloudinaryResponse = await axiosClodinaryInstance.post(
          "",
          formData
        );
        // cloudinaryResponse finish

        await addForm({
          name,
          number,
          subject,
          comment,
          email,
          file: cloudinaryResponse.data.secure_url,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      await addForm({
        name,
        number,
        subject,
        comment,
        email,
        file,
      });
    }
    actions.resetForm();
    fileInputRef.current.value = "";
    actions.setSubmitting(false);
    notify();
  };

  const notify = () =>
    toast.success("Дякуємо, менеджер вже працює над вашим зверненням");

  return (
    <Formik
      validationSchema={feedbackSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, setFieldValue }) => (
        <FormikWrapper>
          <Title>Зворотній зв'язок</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="subject">Тема</InputLabel>
                <Error name="subject" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Select component="select" name="subject" id="subject">
                  <option value="Запитання">Запитання</option>
                  <option value="Відгук">Відгук</option>
                  <option value="Повернення">Повернення</option>
                  <option value="Інше">Інше</option>
                </Select>
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
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="file">Файл</InputLabel>
                <Error name="file" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <input
                  style={{ width: "100%" }}
                  component="file"
                  type="file"
                  name="file"
                  id="file"
                  ref={fileInputRef} // Добавляем реф
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(event) => {
                    const selectedFile = event.target.files[0];
                    if (selectedFile) {
                      if (selectedFile.size <= 3 * 1024 * 1024) {
                        // Файл удовлетворяет ограничению размера
                        setFieldValue("file", selectedFile);
                      } else {
                        // Файл слишком большой, даем обратную связь
                        toast.error("Розмір файлу повинен бути менше 3MB");
                        event.target.value = ""; // Очищаем поле выбора файла
                        setFieldValue("file", ""); // Очищаем значение в Formik
                      }
                    } else {
                      setFieldValue("file", "");
                    }
                  }}
                />
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

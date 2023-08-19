import { Formik } from "formik";
import {
  NameIcon,
  PhoneIcon,
  MailIcon,
  CloseBtn,
  CloseIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  TextAreaField,
  TextAreaLabel,
  TextArea,
  CheckboxField,
  CheckboxLabel,
  ChekboxInput,
  ChekboxSquare,
  ChekboxLink,
  Button,
  ErrorWrapper,
  Error,
} from "./OrderForm.style";

import orderSchema from "../../schema/order";

const initialValues = {
  name: "",
  pnone: "",
  mail: "",
  comment: "",
  policy: false,
};

function OrderForm({ onClose }) {
  const handleSubmit = async (values, actions) => {
    actions.setSubmitting(false);
    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      validationSchema={orderSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <CloseBtn aria-label="закрыть-окно" onClick={onClose}>
            <CloseIcon size={19} color="black" />
          </CloseBtn>
          <Title>Leave your details, we will call you back</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="name">Name</InputLabel>
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
                <InputLabel htmlFor="pnone">Phone number</InputLabel>
                <Error name="pnone" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input type="tel" name="pnone" id="pnone" placeholder=" " />
                <PhoneIcon size={16} aria-label="Phone icon" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="mail">Mail</InputLabel>
                <Error name="mail" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="email"
                  name="mail"
                  id="mail"
                  placeholder=" "
                />
                <MailIcon size={19} aria-label="Mail icon" />
              </Wrapper>
            </FormField>
            <TextAreaField>
              <ErrorWrapper>
                <TextAreaLabel htmlFor="comment">Comment</TextAreaLabel>
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
            <CheckboxField>
              <CheckboxLabel htmlFor="policy">
                <ChekboxInput type="checkbox" name="policy" id="policy" />
                <ChekboxSquare />
                <span>
                  I agree with the newsletter and accept
                  <ChekboxLink
                    href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {" "}
                    Agreement conditions
                  </ChekboxLink>
                </span>
              </CheckboxLabel>
              <Error
                name="policy"
                component="div"
                style={{ textAlign: "end" }}
              />
            </CheckboxField>
            <Button type="submit" disabled={isSubmitting}>
              Send
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  );
}

export default OrderForm;

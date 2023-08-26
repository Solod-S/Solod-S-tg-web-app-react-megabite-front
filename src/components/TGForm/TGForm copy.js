import React, { useCallback, useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import {
  FormikWrapper,
  NameIcon,
  PhoneIcon,
  ThemeIcon,
  MailIcon,
  Title,
  Text,
  Wrapper,
  Input,
  Select,
  TextAreaField,
  TextArea,
} from "./TGForm.styled";

function TGForm() {
  const { tg } = useTelegram();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("Запитання");
  const [comment, setComment] = useState("");
  const [email, setEmail] = useState("");

  const onSendData = useCallback(() => {
    const data = {
      name,
      number,
      subject,
      comment,
      email,
    };
    tg.sendData(JSON.stringify(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, number, subject, comment, email]);
  useEffect(() => {
    tg.onEvent("mainButtonClicked", onSendData);

    return () => {
      tg.offEvent("mainButtonClicked", onSendData);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSendData]);

  useEffect(() => {
    tg.MainButton.setParams({ text: "Надіслати дані" });
    // меняем параметры нижней книпки
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!number || !email || !name || !subject || !comment) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, number, subject, comment, email]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const onChangeMail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <FormikWrapper className={"form"}>
      <Title>Зворотній зв'язок</Title>
      <Wrapper>
        <ThemeIcon size={19} aria-label="Phone icon" />
        <Select value={subject} onChange={onChangeSubject} className={"select"}>
          <option value={"Запитання"}>Запитання</option>
          <option value={"Відгук"}>Відгук</option>
          <option value={"Повернення"}>Повернення</option>
          <option value={"Інше"}>Інше</option>
        </Select>
      </Wrapper>
      <Wrapper>
        <NameIcon size={19} aria-label="Name Icon" />
        <Input
          className={"input"}
          type="text"
          placeholder={"Iм'я"}
          value={name}
          onChange={onChangeName}
        />
      </Wrapper>
      <Wrapper>
        <PhoneIcon size={19} aria-label="Phone icon" />
        <Input
          className={"input"}
          type="text"
          placeholder={"Номер телефону"}
          value={number}
          onChange={onChangeNumber}
        />
      </Wrapper>
      <Wrapper>
        <MailIcon size={19} aria-label="Phone icon" />
        <Input
          className={"input"}
          type="text"
          placeholder={"Пошта"}
          value={email}
          onChange={onChangeMail}
        />
      </Wrapper>
      <TextAreaField>
        <TextArea
          name="comment"
          rows="5"
          id="comment"
          component="textarea"
          value={comment}
          onChange={onChangeComment}
          placeholder="Введіть текст"
        />
      </TextAreaField>
      <Text>*будь ласка, заповніть усі поля.</Text>
    </FormikWrapper>
  );
}

export default TGForm;

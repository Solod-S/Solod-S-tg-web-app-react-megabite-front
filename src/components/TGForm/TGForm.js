// import React, { useCallback, useEffect, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import { Loader } from "../../components";
// import { axiosClodinaryInstance } from "../../services/API/axios";
// import { useTelegram } from "../../hooks/useTelegram";

// import {
//   FormikWrapper,
//   NameIcon,
//   PhoneIcon,
//   ThemeIcon,
//   MailIcon,
//   Title,
//   Text,
//   Wrapper,
//   Input,
//   // FileInput,
//   Select,
//   TextAreaField,
//   TextArea,
// } from "./TGForm.styled";
// import "react-toastify/dist/ReactToastify.css";

// function TGForm() {
//   const { tg } = useTelegram();

//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");
//   const [subject, setSubject] = useState("Запитання");
//   const [comment, setComment] = useState("");
//   const [email, setEmail] = useState("");
//   // const [file, setFile] = useState(null);

//   const onSendData = useCallback(async () => {
//     await tg.MainButton.hide();
//     setLoading(true);
//     if (file !== null) {
//       try {
//         // cloudinaryResponse start
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "rgnqld0i");
//         const cloudinaryResponse = await axiosClodinaryInstance.post(
//           "",
//           formData
//         );
//         // cloudinaryResponse finish

//         const data = {
//           name,
//           number,
//           subject,
//           comment,
//           email,
//           file: cloudinaryResponse.data.secure_url,
//         };

//         tg.sendData(JSON.stringify(data));
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     } else {
//       const data = {
//         name,
//         number,
//         subject,
//         comment,
//         email,
//         file,
//       };

//  if (file !== null) {
//       try {
//         // cloudinaryResponse start
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", "rgnqld0i");
//         const cloudinaryResponse = await axiosClodinaryInstance.post(
//           "",
//           formData
//         );
//         // cloudinaryResponse finish

//         const data = {
//           name,
//           number,
//           subject,
//           comment,
//           email,
//           file: cloudinaryResponse.data.secure_url,
//         };

//         tg.sendData(JSON.stringify(data));
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//     } else {

//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [name, number, subject, comment, email, file]);

//   useEffect(() => {
//     tg.onEvent("mainButtonClicked", onSendData);

//     return () => {
//       tg.offEvent("mainButtonClicked", onSendData);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [onSendData]);

//   useEffect(() => {
//     tg.MainButton.setParams({ text: "Надіслати дані" });
//     // меняем параметры нижней книпки
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (!number || !email || !name || !subject || !comment || loading) {
//       tg.MainButton.hide();
//     } else {
//       tg.MainButton.show();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [name, number, subject, comment, email, loading]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const onChangeNumber = (e) => {
//     setNumber(e.target.value);
//   };

//   const onChangeSubject = (e) => {
//     setSubject(e.target.value);
//   };

//   const onChangeComment = (e) => {
//     setComment(e.target.value);
//   };

//   const onChangeMail = (e) => {
//     setEmail(e.target.value);
//   };
//   // const onChangeFile = (e) => {
//   //   // console.log(e.target.files[0]);
//   //   // setFile(e.target.files[0]);

//   //   const selectedFile = e.target.files[0];
//   //   if (selectedFile) {
//   //     if (selectedFile.size <= 3 * 1024 * 1024) {
//   //       // Файл удовлетворяет ограничению размера
//   //       setFile(e.target.files[0]);
//   //     } else {
//   //       // Файл слишком большой, даем обратную связь
//   //       toast.error("Розмір файлу повинен бути менше 3MB");
//   //       e.target.value = ""; // Очищаем поле выбора файла
//   //       setFile(null);
//   //     }
//   //   } else {
//   //     setFile(null);
//   //   }
//   // };

//   return (
//     <FormikWrapper className={"form"}>
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           {" "}
//           <Title>Зворотній зв'язок</Title>
//           <Wrapper>
//             <ThemeIcon size={19} aria-label="Phone icon" />
//             <Select
//               value={subject}
//               onChange={onChangeSubject}
//               className={"select"}
//             >
//               <option value={"Запитання"}>Запитання</option>
//               <option value={"Відгук"}>Відгук</option>
//               <option value={"Повернення"}>Повернення</option>
//               <option value={"Інше"}>Інше</option>
//             </Select>
//           </Wrapper>
//           <Wrapper>
//             <NameIcon size={19} aria-label="Name Icon" />
//             <Input
//               className={"input"}
//               type="text"
//               placeholder={"Iм'я"}
//               value={name}
//               onChange={onChangeName}
//             />
//           </Wrapper>
//           <Wrapper>
//             <PhoneIcon size={19} aria-label="Phone icon" />
//             <Input
//               className={"input"}
//               type="text"
//               placeholder={"Номер телефону"}
//               value={number}
//               onChange={onChangeNumber}
//             />
//           </Wrapper>
//           <Wrapper>
//             <MailIcon size={19} aria-label="Phone icon" />
//             <Input
//               className={"input"}
//               type="text"
//               placeholder={"Пошта"}
//               value={email}
//               onChange={onChangeMail}
//             />
//           </Wrapper>
//           {/* <Wrapper>
//             <FileInput
//               className={"input"}
//               type="file"
//               // value={file}
//               accept="image/png, image/gif, image/jpeg"
//               onChange={onChangeFile}
//             />
//           </Wrapper> */}
//           <TextAreaField>
//             <TextArea
//               name="comment"
//               rows="5"
//               id="comment"
//               component="textarea"
//               value={comment}
//               onChange={onChangeComment}
//               placeholder="Введіть текст"
//             />
//           </TextAreaField>
//           <Text>*будь ласка, заповніть усі поля.</Text>
//           <ToastContainer
//             position="top-center"
//             autoClose={2000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             // pauseOnHover
//             theme="colored"
//           />
//         </>
//       )}
//     </FormikWrapper>
//   );
// }

// export default TGForm;

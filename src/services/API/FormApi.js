import { axiosFormInstance } from "./axios";
const shortid = require("shortid");
const { format } = require("date-fns");

export const fetchForms = () => {
  return axiosFormInstance.get().then(({ data }) => {
    return data;
  });
};

export const addForm = ({ subject, name, email, comment, file }) => {
  const id = shortid.generate();
  const currentDate = new Date();
  const date = format(currentDate, "dd.MM.yyyy");
  const time = format(currentDate, "HH:mm");

  const preparedData = {
    id,
    subject,
    name,
    email,
    comment,
    file,
    date,
    time,
    TelegramId: "",
    TelegramUsername: "",
  };
  return axiosFormInstance.post("", preparedData).then(({ data }) => {
    return data;
  });
};

export const deleteForm = (id) => {
  return [];
};

// https://www.youtube.com/watch?v=xfSeE-E9i-E

// https://sheetdb.io/

// const updateGoogleSheet = () => {
//   fetch("https://sheetdb.io/api/v1/uaugppgpmtycv/id/1", {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       data: {
//         id: "101",
//       },
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

// const deleteGoogleSheet = () => {
//   fetch("https://sheetdb.io/api/v1/uaugppgpmtycv/id/5", {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

// const createGoogleSheet = () => {
//   fetch("https://sheetdb.io/api/v1/uaugppgpmtycv", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       data: [
//         {
//           id: "10",
//           phone: 4364733,
//         },
//       ],
//     }),
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };

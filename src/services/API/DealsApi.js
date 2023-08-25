import { axiosDealsInstance, axiosPromoInstance } from "./axios";

export const fetchDeals = async () => {
  const deals = await axiosDealsInstance.get().then(({ data }) => {
    const formatedData = data.map((obj) => ({
      id: obj.id,
      url: obj.dealsLink,
      img: obj.posterLink,
      description: obj.name,
    }));
    return formatedData;
  });
  const promo = await axiosPromoInstance.get().then(({ data }) => {
    const formatedData = data.map((obj) => ({
      id: obj.id,
      url: obj.promoCodeLink,
      img: obj.posterLink,
      description: obj.name + ` Промокод: ${obj.promocode}`,
    }));
    return formatedData;
  });

  return [...deals, ...promo];
};

export const deleteDeal = (id) => {
  return [];
};

export const addDeal = (id) => {
  return [];
};

// https://www.youtube.com/watch?v=xfSeE-E9i-E

// https://sheetdb.io/

// fetch("https://sheetdb.io/api/v1/uaugppgpmtycv")
//   .then((response) => response.json())
//   .then((data) => console.log(data));
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

import Papa from "papaparse";
const { format, parse, isAfter, isEqual } = require("date-fns");

const checkDate = (rowDate) => {
  const currentDate = new Date();
  const formattedCurrentDate = format(currentDate, "dd.MM.yy");
  const formattedRowDate = format(
    parse(rowDate, "dd.MM.yy", new Date()),
    "dd.MM.yy"
  );

  if (
    isAfter(
      parse(formattedRowDate, "dd.MM.yy", new Date()),
      parse(formattedCurrentDate, "dd.MM.yy", new Date())
    ) ||
    isEqual(
      parse(formattedRowDate, "dd.MM.yy", new Date()),
      parse(formattedCurrentDate, "dd.MM.yy", new Date())
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const fetchProroAndDeals = () => {
  return new Promise((resolve, reject) => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUqa_qgmrsM2UZMT3G17wD-x4XotvmrjQNALMVHh4bNaIvQcUtuI7vbhXKhwr6_muunYiaGWFvkIt7/pub?gid=635544027&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          resolve(
            results.data
              .filter((obj) => checkDate(obj.date))
              .map((obj) => ({
                id: obj.id,
                url: obj.dealsLink,
                img: obj.posterLink,
                date: obj.date,
                description: obj.name,
              }))
          );
        },
        error: (error) => {
          reject(error);
        },
      }
    );
  });
};

// export const fetchProroAndDeals = () => {
//   return new Promise((resolve, reject) => {
//     Papa.parse(
//       "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUqa_qgmrsM2UZMT3G17wD-x4XotvmrjQNALMVHh4bNaIvQcUtuI7vbhXKhwr6_muunYiaGWFvkIt7/pub?gid=635544027&single=true&output=csv",
//       {
//         download: true,
//         header: true,
//         complete: (results) => {
//           resolve(
//             results.data.map((obj) => ({
//               id: obj.id,
//               url: obj.dealsLink,
//               img: obj.posterLink,
//               date: obj.date,
//               description: obj.name,
//             }))
//           );
//         },
//         error: (error) => {
//           reject(error);
//         },
//       }
//     );
//   });
// };

// export const fetchProroAndDeals = async () => {
//   let data = [];

//   Papa.parse(
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUqa_qgmrsM2UZMT3G17wD-x4XotvmrjQNALMVHh4bNaIvQcUtuI7vbhXKhwr6_muunYiaGWFvkIt7/pub?gid=635544027&single=true&output=csv",
//     {
//       download: true,
//       header: true,
//       complete: (results) => {
//         data = results.data;
//       },
//     }
//   );
//   return data;
// };

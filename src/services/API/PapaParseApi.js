import Papa from "papaparse";

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

export const fetchProroAndDeals = () => {
  return new Promise((resolve, reject) => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUqa_qgmrsM2UZMT3G17wD-x4XotvmrjQNALMVHh4bNaIvQcUtuI7vbhXKhwr6_muunYiaGWFvkIt7/pub?gid=635544027&single=true&output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          resolve(
            results.data.map((obj) => ({
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

// const SheetDataComponent = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Papa.parse(
//       "https://docs.google.com/spreadsheets/d/e/2PACX-1vTUqa_qgmrsM2UZMT3G17wD-x4XotvmrjQNALMVHh4bNaIvQcUtuI7vbhXKhwr6_muunYiaGWFvkIt7/pub?gid=635544027&single=true&output=csv",
//       {
//         download: true,
//         header: true,
//         complete: (results) => {
//           console.log(Array.from(results.data));
//           setData(results.data);
//         },
//       }
//     );
//     // const promos = Array.from(data);
//   }, []);

//   return (
//     <div>
//       <h1>Данные из Google Sheets</h1>
//       <ul>
//         {Array.from(data).map((data, index) => (
//           <li key={index}>
//             {data.id} ({data.name}) - Rating {data.promocode}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SheetDataComponent;

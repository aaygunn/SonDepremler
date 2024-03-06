import React, { useRef, useState } from "react";
import Yukleniyor from "./Yukleniyor";

const Search = ({ data }) => {
  //   const [value, setValue] = useState();
  //   const [aranan, setAranan] = useState();
  //   const inputText = useRef();
  //   const focusInput = () => {
  //     const text = inputText.current.value.toUpperCase();
  //     const filtred = data.filter((sehir) => sehir.title.includes(text));
  //     setAranan(filtred);
};

//   return (
//     <div>
//       {aranan == null ? (
//         <Yukleniyor />
//       ) : (
//         aranan.map((d) => (
//           <div id={d._id} className="card mb-3">
//             <h5 className="card-header">{d.date}</h5>

//             <div className="card-body">
//               <h5 className="card-title mb-3">Merkez Üssü : {d.title} </h5>
//               <h5 className="card-title mb-3">Büyüklük : {d.mag}</h5>
//               <h5 className="card-title mb-3">Derinlik : {d.depth} km </h5>
//             </div>
//           </div>
//         ))
//       )}
//       <input
//         ref={inputText}
//         className="input"
//         type="text"
//         placeholder="Bölge Giriniz..."
//       />
//       <button onClick={focusInput}>Bul</button>
//     </div>
//   );
// };

export default Search;

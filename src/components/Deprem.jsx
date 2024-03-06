import "bootstrap/dist/css/bootstrap.min.css";
import Yukleniyor from "./Yukleniyor";
import { useState, useRef } from "react";

const Deprem = ({ data }) => {
  //filtred
  const [value, setValue] = useState();
  const [aranan, setAranan] = useState();
  const inputText = useRef();
  const focusInput = () => {
    let text = inputText.current.value.toUpperCase();
    const filtred = data.filter((sehir) => sehir.title.includes(text));
    setAranan(filtred);
    inputText.current.value = "";
  };
  //-----

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between p-4">
        <div>
          <h1 className="mt-3 ">Kandilli Rasathanesi Son Depremler</h1>
          {aranan && (
            <h5 className="">{aranan.length} adet deprem bulunmuştur.</h5>
          )}
        </div>

        <div className="d-flex w-25">
          <input
            ref={inputText}
            className="form-control w-100"
            type="text"
            placeholder="Bölge Giriniz..."
          />
          <button className="btn btn-info" onClick={focusInput}>
            Bul
          </button>
        </div>
      </div>

      {aranan == null ? (
        <Yukleniyor />
      ) : (
        aranan.map((d) => (
          <div id={d._id} className="card mb-3">
            <h5 className="card-header">{d.date}</h5>

            <div className="card-body">
              <h5 className="card-title mb-3">Merkez Üssü : {d.title} </h5>
              <h5 className="card-title mb-3">Büyüklük : {d.mag}</h5>
              <h5 className="card-title mb-3">Derinlik : {d.depth} km </h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Deprem;

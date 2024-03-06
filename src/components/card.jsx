import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Deprem from "./Deprem";
import Yukleniyor from "./Yukleniyor";

const Card = () => {
  const [deprem, setDeprem] = useState(null);

  useEffect(() => {
    const depremVeri = fetch(
      "https://api.orhanaydogdu.com.tr/deprem/kandilli/live"
    )
      .then((res) => res.json())
      .then((data) => setDeprem(data.result));
  }, []);

  return (
    <div>{deprem == null ? <Yukleniyor /> : <Deprem data={deprem} />}</div>
  );
};

export default Card;

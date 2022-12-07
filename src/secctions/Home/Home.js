import Carraousel from "../../components/Carrousel/Carrousel";
import "./Style.scss";
import React from "react";

const Home = () => {
  const contenido = [
    {
      id: 1,
      title: "Sed ut perspiciatis unde omnis iste natus ",
      subTitle:
        " Sed ut perspicatis unde onmis iste natus error sit valupten accusatium dolorumecum 1",
      isButton: true,
    },
    {
      id: 2,
      title: "Sed ut perspiciatis unde omnis iste natus ",
      subTitle:
        " Sed ut perspicatis unde onmis iste natus error sit valupten accusatium dolorumecum 2",
      isButton: true,
    },
    {
      id: 3,
      title: "Sed ut perspiciatis unde omnis iste natus ",
      subTitle:
        " Sed ut perspicatis unde onmis iste natus error sit valupten accusatium dolorumecum 3",
      isButton: true,
    },
  ];

  return (
    <div className="section1" id="home">
      <div className="content-s1">
        <div className="container-s1">
          <Carraousel>{contenido}</Carraousel>
        </div>
      </div>
    </div>
  );
};

export default Home;

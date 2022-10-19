import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import madMax from "../../Assets/madMax.jpg";
import moviePoster from "../../Assets/moviePoster.jpg";
import AddNewProduction from "../AddNewProduction/AddNewProduction";
import Button from "@material-ui/core/Button";


import "./Display.css";

const contentsData = [
  {
    id: uuidv4(),
    productionType: "futureFlim",
    image: madMax,
    productionName: "Pulpfiction",
  },
  {
    id: uuidv4(),
    productionType: "futureFlim",
    image: moviePoster,
    productionName: "Movie Poster",
  },
];

const Display = () => {
  const [dataList, setDataList] = useState(contentsData);
  const [newproductionActive, setNewProduction] = useState(false);

  useEffect(()=>{
    localStorage.setItem("DATA",dataList)
  },[dataList])

  

  const onClickChangeAddProduction = () => {
    
    setNewProduction(true);
  };

  const updateproductionData = (value) => {
    const newData = [...dataList, value];
    setDataList(newData);
    setNewProduction(false);
    
  };
  return newproductionActive ? (
    <AddNewProduction newProductionData={updateproductionData} />
  ) : (
    <div className="displaySection">
      <h1>Productions</h1>
      <h4>Exsiting Productions</h4>
      <div className="productionContentContainer">
        {dataList.map((item) => {
          return (
            <div key={item.id} className="eachProduction">
              <img src={item.image} alt={item.productionName} />
              <h3>{item.productionName}</h3>
            </div>
          );
        })}
      </div>
      <Button variant="contained" color="primary" onClick={onClickChangeAddProduction} className="AddNew">
        Add New Production
      </Button>
    </div>
  );
};

export default Display;

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddNewProduction.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const AddNewProduction = (props) => {
  const [imageSelected, setImageSlected] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [imageError, setImageError] = useState(false);
  const classes = useStyles();

  const [productionName, setProductionName] = useState("");
  const [nameErr, setnameErr] = useState(false);

  const [productionType, setproductionType] = useState("");
  const [typeErr, setTypeerror] = useState(false);

  //Convert the uplaod file to image url
  const imageFileConverter = (event) => {
    setImageUrl(URL.createObjectURL(event.target.files[0]));

    setImageSlected(true);
  };

  //ProductionName setting
  const onChangeProductionName = (event) => {
    setProductionName(event.target.value.trim());
  };

  //onChangeproductionType setting
  const onChangeproductionType = (event) => {
    setproductionType(event.target.value);
  };

  //finalChecking OnSubmit HAndler
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if ((productionName !== "") & (productionType !== "") & (imageUrl !== "")) {
      const NewProductionData = {
        id: uuidv4(),
        productionType: productionType,
        image: imageUrl,
        productionName: productionName,
      };
      props.newProductionData(NewProductionData);
    } else {
      if (productionName === "") {
        setnameErr(true);
      } else {
        setnameErr(false);
      }
      if (productionType === "") {
        setTypeerror(true);
      } else {
        setTypeerror(false);
      }
      if (imageUrl === "") {
        setImageError(true);
      } else {
        setImageError(false);
      }
    }
  };

  return (
    <div className="AddProductionSection">
      <h3>Add Production</h3>
      <form className="fromSection" onSubmit={onSubmitHandler}>
        <div className="productionSection">
          {imageSelected ? (
            <img className="imageSection" src={imageUrl} alt="imageLogo" />
          ) : (
            <div className={classes.root}>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={imageFileConverter}
              />
              <label htmlFor="contained-button-file">
                <Button
                  className="filesSection"
                  variant="contained"
                  color="primary"
                  component="span"
                >
                  Image
                </Button>
              </label>
              <input
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file"
              />
              <label htmlFor="icon-button-file"></label>
              {imageError ? <p className="errorMessage">*ImageReuired</p> : ""}
            </div>
          )}

          <div>
            <div className="inputsSection">
              <label>Production Name</label>
              <div className="inputback">
                <input type="text" onChange={onChangeProductionName} />
              </div>
              {nameErr ? <p className="errorMessage">*NameReuired</p> : ""}
            </div>
            <div className="inputsSection">
              <label>Type of Production</label>
              <div className="inputback">
                <select
                  onChange={onChangeproductionType}
                  name="listProduction"
                  id="list"
                >
                  <option value="none" defaultValue hidden></option>
                  <option value="futureFlim">futureFlim</option>
                  <option value="Short Flim">Short Flim</option>
                  <option value="TvAdds">TvAdds</option>
                  <option value="Documentary">Documentary</option>
                  <option value="Coraporate Flim">Coraporate Flim</option>
                  <option value="Web Series">Web Series</option>
                  <option value="News Cast">News Cast</option>
                  <option value="Stage Production">Stage Production</option>
                  <option value="Mini Series">Mini Series</option>
                  <option value="Clip">Clip</option>
                </select>
              </div>
              {typeErr ? <p className="errorMessage">*NameReuired</p> : ""}
            </div>
          </div>
        </div>
        <button className="buttonSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewProduction;

import React from "react";
import Spineer from "../components/Spineer";
const DefaultPictureItems = ({ picture, isLoading, isPicAvailable }) => {
  const localStorageSave = () => {
    let myLocalStorage = [];
    localStorage.setItem("pic_of_the_day", `${picture.hdurl}`);
    myLocalStorage.push({ picture: localStorage.pic_of_the_day });
    myLocalStorage.push({ id: 1 });
    console.log("myLocalStorage", myLocalStorage.length);
  };
  return isLoading ? (
    <Spineer />
  ) : (
    <div class="card mb-3 border-0">
      <div class="card-body ">
        <a class="text-justify" href="www.google.com">
          NASA API CONSUMER
        </a>
        <button href="#" class="btn btn-primary" style={{ float: "right" }}>
          MY FAVORITES
        </button>
        <button href="#" class="btn btn-primary" style={{ float: "right" }}>
          {picture.date}
        </button>
      </div>
      <img src={picture.hdurl} class="card-img-top" alt="..." />
      <div class="card-body ">
        <h5 class="card-title ">{picture.title}</h5>
        <p class="card-text ">{picture.explanation}</p>
        <p class="card-text">
          <small class="text-muted ">{picture.copyright}</small>
        </p>
        <button href="#" class="btn btn-primary">
          MAKE FAVORITE
        </button>
        <button onClick={localStorageSave}>SAVE TO LOCAL STORAGE</button>
        <button href="#" class="btn btn-primary" style={{ float: "right" }}>
          {picture.date}
        </button>
      </div>
    </div>
  );
};

export default DefaultPictureItems;

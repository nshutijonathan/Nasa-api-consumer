import React from "react";
import Header from "../components/Header";
import Spineer from "../components/Spineer";
const DefaultPictureItems = ({ picture, isLoading, isPicAvailable }) => {
  const localStorageSave = () => {
    let myLocalStorage = [];
    localStorage.setItem("pic_of_the_day", `${picture.hdurl}`);
    let storedPhoto = localStorage.getItem("pic_of_the_day");
    myLocalStorage.push({ picture: localStorage.pic_of_the_day });
    myLocalStorage.push({ id: 1 });
    console.log("myLocalStorage", myLocalStorage.length);
    // console.log("values", typeof localStorage);
    // console.log("storedPhoto", typeof storedPhoto);
  };
  // isPicAvailable.length ? "" : "";
  return isLoading ? (
    <Spineer />
  ) : (
    <div class="card mb-3 border-0">
      <div class="card-body ">
        <a class="text-justify">NASA API CONSUMER</a>
        <button href="#" class="btn btn-primary" style={{ float: "right" }}>
          MY FAVORITES
        </button>
        <button href="#" class="btn btn-primary" style={{ float: "right" }}>
          {picture.date}
        </button>
      </div>
      <img
        // src={localStorage.getItem("pic_of_the_day")}
        src={picture.hdurl}
        class="card-img-top"
        alt="..."
      />
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

    // <div class="card flex-row flex-wrap">
    //   <div class="card-header border-0">
    //     <img src={picture.hdurl} alt="" />
    //   </div>

    //   <div class="card-block px-2">
    //     <h4 class="card-title">Title</h4>
    //     <p class="card-text">Description</p>
    //     <a href="#" class="btn btn-primary">
    //       BUTTON
    //     </a>
    //   </div>
    //   <div class="w-100"></div>
    //   <div class="card-footer w-100 text-muted">FOOTER</div>
    // </div>
  );
};

export default DefaultPictureItems;

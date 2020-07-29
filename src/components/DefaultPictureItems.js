import React from "react";

const DefaultPictureItems = ({ picture, isLoading }) => {
  return isLoading ? (
    <h1>Loading.....</h1>
  ) : (
    <div class="card mb-3">
      <img src={picture.hdurl} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{picture.title}</h5>
        <p class="card-text">{picture.explanation}</p>
        <p class="card-text">
          <small class="text-muted">{picture.copyright}</small>
        </p>
        <a href="#" class="btn btn-primary">
          MAKE FAVORITE
        </a>
        <a href="#" class="btn btn-primary" style={{ float: "right" }}>
          {picture.date}
        </a>
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

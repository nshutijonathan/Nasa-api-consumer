import React, { useState, useEffect } from "react";
import DefaultPictureItems from "../components/DefaultPictureItems";
import axios from "axios";
const DefaultPicture = () => {
  const [picture, setPicture] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchPicture = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=ulRtd83CPfEuG8UWSRdewGNgdfEJ9SEXnpd4d8V6`
      );
      console.log("result", result.data);
      setPicture(result.data);
      setIsloading(false);
    };
    fetchPicture();
  }, []);
  return (
    <div>
      <h1>Hello</h1>
      <DefaultPictureItems isLoading={isLoading} picture={picture} />
    </div>
  );
};

export default DefaultPicture;

import React, { useState, useEffect } from "react";
import DefaultPictureItems from "../components/DefaultPictureItems";
import axios from "axios";
const DefaultPicture = () => {
  const [picture, setPicture] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isPicAvailable, setIsPicAvailable] = useState(false);
  useEffect(() => {
    const fetchPicture = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=ulRtd83CPfEuG8UWSRdewGNgdfEJ9SEXnpd4d8V6`
      );
      setPicture(result.data);
      setIsloading(false);
      if (result.data) {
        setIsPicAvailable(true);
      }
    };
    fetchPicture();
  }, []);
  return (
    <div>
      <DefaultPictureItems
        isLoading={isLoading}
        picture={picture}
        isPicAvailable={isPicAvailable}
      />
    </div>
  );
};

export default DefaultPicture;

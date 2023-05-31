import React from "react";
import { useSelector, useDispatch } from "react-redux";
import starIcon from "../Assets/Icons/heart.svg";
import starFillIcon from "../Assets/Icons/heart-fill.svg";
export const Favrouites = ({ toggleFunction, isWhishlisted }) => {
  const userData1 = useSelector((state) => state?.userData?.userData);
  return (
    <div>
      <img
        src={
          isWhishlisted == null
            ? starIcon
            : isWhishlisted === false
            ? starIcon
            : starFillIcon
        }
        onClick={() => toggleFunction()}
      />
    </div>
  );
};

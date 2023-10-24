import React from "react";
import { useDispatch } from "react-redux";
import { bandRemoved } from "./bandsSlice";
const Band = ({ band }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(bandRemoved(band.id));
  };

  return (
    <div>
      <p>{band.name}</p>
      <button onClick={handleDelete}>Delete Band</button>
    </div>
  );
};

export default Band;
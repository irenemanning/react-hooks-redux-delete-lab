import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const bandsSlice = createSlice({
  name: "bands",
  initialState: {
    entities: [],
  },
  reducers: {
    bandAdded(state, action) {
      state.entities.push({
        id: uuid(),
        name: action.payload
      });
    },
    bandRemoved(state, action) {
      state.entities = state.entities.filter((band) => band.id !== action.payload);
    }
  },
});

export const { bandAdded, bandRemoved } = bandsSlice.actions;

export default bandsSlice.reducer;
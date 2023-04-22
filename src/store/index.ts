import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
	reducer: {},
	devTools: true,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

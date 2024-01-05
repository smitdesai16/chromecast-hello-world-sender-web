import { configureStore } from "@reduxjs/toolkit";
import ApplicationDetailReducer from "./applicationDetailReducer";

export const BaseStore = configureStore({
	reducer: {
		applicationDetail: ApplicationDetailReducer,
	},
});

export type RootState = ReturnType<typeof BaseStore.getState>;
export type AppDispatch = typeof BaseStore.dispatch;
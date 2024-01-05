import { configureStore } from "@reduxjs/toolkit";
import ApplicationDetailReducer from "./applicationDetailReducer";
import healthCheckReducer from "./healthCheckReducer";

export const BaseStore = configureStore({
	reducer: {
		applicationDetail: ApplicationDetailReducer,
		healthCheck: healthCheckReducer
	},
});

export type RootState = ReturnType<typeof BaseStore.getState>;
export type AppDispatch = typeof BaseStore.dispatch;
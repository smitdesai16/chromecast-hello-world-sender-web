import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ApplicationDetailState {
	castState: string;
	sessionState: string;
	applicationStatus: string;
	sessionId: string;
	applicationId: string;
	applicationName: string;
	receiverVolumeLevel: number;
	receiverVolumeIsMuted: boolean;
}

const initialState: ApplicationDetailState = {
	castState: "",
	sessionState: "",
	applicationStatus: "",
	sessionId: "",
	applicationId: "",
	applicationName: "",
	receiverVolumeLevel: 0,
	receiverVolumeIsMuted: false
};

export const messageSlice = createSlice({
	name: "applicationDetail",
	initialState,
	reducers: {
		updateCastStateAction: (state, action: PayloadAction<string>) => {
			state.castState = action.payload;
		},
		updateSessionStateAction: (state, action: PayloadAction<string>) => {
			state.sessionState = action.payload;
		},
		updateApplicationStatusAction: (state, action) => {
			state.applicationStatus = action.payload;
		},
		updateSessionIdAction: (state, action) => {
			state.sessionId = action.payload;
		},
		updateApplicationIdAction: (state, action) => {
			state.applicationId = action.payload;
		},
		updateApplicationNameAction: (state, action) => {
			state.applicationName = action.payload;
		},
		updateReceiverVolumeLevel: (state, action) => {
			state.receiverVolumeLevel = action.payload;
		},
		updateReceiverVolumeIsMuted: (state, action) => {
			state.receiverVolumeIsMuted = action.payload;
		},
	},
});

export const {
	updateCastStateAction,
	updateSessionStateAction,
	updateApplicationStatusAction,
	updateSessionIdAction,
	updateApplicationIdAction,
	updateApplicationNameAction,
	updateReceiverVolumeLevel,
	updateReceiverVolumeIsMuted
} = messageSlice.actions;

export default messageSlice.reducer;
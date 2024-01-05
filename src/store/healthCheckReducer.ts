import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ApplicationDetailState {
	lastReceived: string;
}

const initialState: ApplicationDetailState = {
	lastReceived: "",
};

export const messageSlice = createSlice({
	name: "applicationDetail",
	initialState,
	reducers: {
		updateLastReceivedAction: (state, action: PayloadAction<ApplicationDetailState["lastReceived"]>) => {
			state.lastReceived = action.payload;
		},
	},
});

export const {
	updateLastReceivedAction
} = messageSlice.actions;

export default messageSlice.reducer;
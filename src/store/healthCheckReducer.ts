import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HealthCheckState {
	lastReceived: string;
}

const initialState: HealthCheckState = {
	lastReceived: "",
};

export const messageSlice = createSlice({
	name: "applicationDetail",
	initialState,
	reducers: {
		updateLastReceivedAction: (state, action: PayloadAction<HealthCheckState["lastReceived"]>) => {
			state.lastReceived = action.payload;
		},
	},
});

export const {
	updateLastReceivedAction
} = messageSlice.actions;

export default messageSlice.reducer;
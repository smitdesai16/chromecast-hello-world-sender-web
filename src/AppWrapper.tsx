import { FluentProvider } from "@fluentui/react-components";
import React, { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { updateApplicationNameAction, updateApplicationIdAction, updateApplicationStatusAction, updateCastStateAction, updateReceiverVolumeIsMuted, updateReceiverVolumeLevel, updateSessionIdAction, updateSessionStateAction } from "./store/applicationDetailReducer";
import { useDispatch } from "react-redux";

interface IProps {
	children: React.ReactNode;
}

/**
 * App Wrapper is responsible for theme setup, language setup, update store from response and update store from cache
 * @returns JSX.Element
 */
export default function AppWrapper({ children }: IProps): JSX.Element {
	const dispatch = useDispatch();
	const theme = useTheme();

	useEffect(() => {
		document.body.style.backgroundColor = theme.colorNeutralBackground1;
	});

	useEffect(() => {
		setInterval(function () {
			const castContext = window["cast"].framework.CastContext.getInstance();
			dispatch(updateCastStateAction(castContext.getCastState()));
			dispatch(updateSessionStateAction(castContext.getSessionState()));

			const currentSession = castContext.getCurrentSession();
			if (currentSession) {
				dispatch(updateApplicationStatusAction(currentSession.getApplicationStatus()));
				dispatch(updateSessionIdAction(currentSession.getSessionId()));
				dispatch(updateApplicationIdAction(currentSession.getSessionObj().appId));
				dispatch(updateApplicationNameAction(currentSession.getSessionObj().displayName));

				dispatch(updateReceiverVolumeLevel(currentSession.getVolume()));
				dispatch(updateReceiverVolumeIsMuted(currentSession.isMute()));
			} else {
				dispatch(updateApplicationStatusAction(""));
				dispatch(updateSessionIdAction(""));
				dispatch(updateApplicationIdAction(""));
				dispatch(updateApplicationNameAction(""));

				dispatch(updateReceiverVolumeLevel(0));
				dispatch(updateReceiverVolumeIsMuted(false));
			}
		}, 100);
	})

	return (
		<FluentProvider theme={theme}>
			{children}
		</FluentProvider>
	);
}
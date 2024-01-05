import { FluentProvider } from "@fluentui/react-components";
import React, { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { updateApplicationNameAction, updateApplicationIdAction, updateApplicationStatusAction, updateCastStateAction, updateReceiverVolumeIsMuted, updateReceiverVolumeLevel, updateSessionIdAction, updateSessionStateAction } from "./store/applicationDetailReducer";
import { useDispatch, useSelector } from "react-redux";
import { updateLastReceivedAction } from "./store/healthCheckReducer";
import { RootState } from "./store/baseStore";

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
	const sessionId = useSelector((state: RootState) => state.applicationDetail.sessionId);

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

				currentSession.sendMessage('urn:x-cast:io.smitdesai16.github.health-check', {
					message: (Math.random() + 1).toString(36).substring(7)
				});
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

	useEffect(() => {
		if (sessionId) {
			const castContext = window["cast"].framework.CastContext.getInstance();
			const currentSession = castContext.getCurrentSession();
			currentSession.addMessageListener("urn:x-cast:io.smitdesai16.github.health-check", function () {
				dispatch(updateLastReceivedAction(new Date().toISOString()));
			});
		}
	});

	return (
		<FluentProvider theme={theme}>
			{children}
		</FluentProvider>
	);
}
import { Title1 } from "@fluentui/react-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { useTheme } from "../hooks/useTheme";

const ApplicationDetail = () => {
    const theme = useTheme();

    const castState = useSelector((state: RootState) => state.applicationDetail.castState);
    const sessionState = useSelector((state: RootState) => state.applicationDetail.sessionState);
    const applicationStatus = useSelector((state: RootState) => state.applicationDetail.applicationStatus);
    const sessionId = useSelector((state: RootState) => state.applicationDetail.sessionId);
    const applicationId = useSelector((state: RootState) => state.applicationDetail.applicationId);
    const applicationName = useSelector((state: RootState) => state.applicationDetail.applicationName);
    const receiverVolumeLevel = useSelector((state: RootState) => state.applicationDetail.receiverVolumeLevel);
    const receiverVolumeIsMuted = useSelector((state: RootState) => state.applicationDetail.receiverVolumeIsMuted);

    return (
        <div style={{ width: "50%", background: theme.colorPaletteRedBackground1 }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Application Details</Title1>
            </div>
            <ul>
                <li>Cast State: {castState}</li>
                <li>Session State: {sessionState}</li>
                <li>Application Status: {applicationStatus}</li>
                <li>Session Id: {sessionId}</li>
                <li>Application Id: {applicationId}</li>
                <li>Application Name: {applicationName}</li>
                <li>Receiver Volume Level: {receiverVolumeLevel}</li>
                <li>Receiver Volume Is Muted: {JSON.stringify(receiverVolumeIsMuted)}</li>
            </ul>
        </div>
    );
};

export default ApplicationDetail;
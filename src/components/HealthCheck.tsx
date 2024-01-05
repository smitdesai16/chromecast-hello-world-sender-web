import { useTheme } from "../hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../store/baseStore";
import { Title1 } from "@fluentui/react-components";

const HealthCheck = () => {
    const theme = useTheme();
    const lastReceived = useSelector((state: RootState) => state.healthCheck.lastReceived);

    return (
        <div style={{ width: "50%", background: theme.colorPaletteYellowBackground1, padding: "12px" }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Health Check</Title1>
            </div>
            <p>Last communication from Sender: {lastReceived}</p>
        </div>
    );
};

export default HealthCheck;
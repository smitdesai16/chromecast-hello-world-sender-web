import { Button, Title1 } from "@fluentui/react-components";
import { useTheme } from "../hooks/useTheme";

const Actions = () => {
    const theme = useTheme();

    return (
        <div style={{ width: "50%", background: theme.colorPaletteDarkGreenBackground2, padding: "12px" }}>
            <div style={{ textAlign: "center" }}>
                <Title1>Actions</Title1>
            </div>
            <div>
                <Button onClick={() => {
                    const castContext = window["cast"].framework.CastContext.getInstance();
                    castContext.requestSession();
                } }>Start/Stop</Button>
                <Button>Leave</Button>
                <Button>Resume</Button>
                <Button onClick={() => {
                    const currentSession = window["cast"].framework.CastContext.getInstance().getCurrentSession();
                    if (currentSession) {
                        currentSession.sendMessage('urn:x-cast:io.smitdesai16.github.message', {
                            message: (Math.random() + 1).toString(36).substring(7)
                        });
                    }
                }}>Send</Button>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Actions;
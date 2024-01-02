import { Button, Input, useId } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { castSession } from "../chromecastSessionProvider";

const HelloWorld = () => {
    const { t } = useTranslation();
    const inputTextId = useId("inputTextId");

    const onSendClick = () => {
        if (castSession) {
            castSession.sendMessage('urn:x-cast:com.example.castdata', {
                type: "message",
                text: "Smit"
            });
        }
    };

    return (
        <>
            <div style={{ display: "flex" }}>
                <Input appearance="underline" id={inputTextId} style={{ flexGrow: 1 }} />
                <Button appearance="primary" onClick={onSendClick}>{t("HelloWorld.Send")}</Button>
            </div>
        </>
    );
};

export default HelloWorld;
import { Button, Input, useId } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { castSession } from "../chromecastSessionProvider";
import { useState } from "react";

const HelloWorld = () => {
    const [text, setText] = useState("");
    const { t } = useTranslation();
    const inputTextId = useId("inputTextId");

    const onSendClick = () => {
        if (castSession) {
            castSession.sendMessage('urn:x-cast:com.example.castdata', {
                type: "message",
                text: text
            });
            setText("");
        }
    };

    const onTextChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value;
        setText(value);
    }

    return (
        <>
            <div style={{ display: "flex" }}>
                <Input appearance="underline" id={inputTextId} style={{ flexGrow: 1 }} value={text} onChange={onTextChange} />
                <Button appearance="primary" onClick={onSendClick}>{t("HelloWorld.Send")}</Button>
            </div>
        </>
    );
};

export default HelloWorld;
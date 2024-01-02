import { Button, Input, useId } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const HelloWorld = () => {
    const [text, setText] = useState("");
    const { t } = useTranslation();
    const inputTextId = useId("inputTextId");

    const onSendClick = () => {
        const castSession = globalThis.cast.framework.CastContext.getInstance().getCurrentSession();
        if (castSession) {
            castSession.sendMessage('urn:x-cast:io.smitdesai16.github.message', {
                message: text
            });
            setText("");
        } else {
            console.error("CastSession is null");
        }
    };

    const onTextChange = (event: { target: { value: string; }; }) => {
        const value = event.target.value;
        setText(value);
    }

    const googleCastLauncherTag = "<google-cast-launcher id=\"castbutton\"></google-cast-launcher>";
    const getGoogleCastLauncher = () => {
        return (
            <div style={{ width: "32px" }} className="content" dangerouslySetInnerHTML={{ __html: googleCastLauncherTag }}></div>
        )
    }

    return (
        <>
            <div style={{ display: "flex", gap: "8px" }}>
                <Input appearance="underline" id={inputTextId} style={{ flexGrow: 1 }} value={text} onChange={onTextChange} />
                <Button appearance="primary" onClick={onSendClick}>{t("HelloWorld.Send")}</Button>
                {getGoogleCastLauncher()}
            </div>
        </>
    );
};

export default HelloWorld;
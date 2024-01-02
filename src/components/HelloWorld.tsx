import { Button, Input, Title1, useId } from "@fluentui/react-components";
import { useTranslation } from "react-i18next";

const HelloWorld = () => {
    const { t } = useTranslation();
    const inputTextId = useId("inputTextId");

    return (
        <>
            <div style={{ display: "flex" }}>
                <Input appearance="underline" id={inputTextId} style={{ flexGrow: 1 }} />
                <Button appearance="primary">{t("HelloWorld.Send")}</Button>
            </div>
        </>
    );
};

export default HelloWorld;
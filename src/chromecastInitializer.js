    window['__onGCastApiAvailable'] = function (isAvailable) {
        if (isAvailable) {
            setTimeout(() => {
                window.cast.framework.CastContext.getInstance().setOptions({
                    receiverApplicationId: "3458D718",
                    autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                });

                var context = window.cast.framework.CastContext.getInstance();
                context.addEventListener(window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED, function (event) {
                    console.log(event.sessionState);
                });
            }, 1000);
    }
};
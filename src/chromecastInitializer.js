window['__onGCastApiAvailable'] = function (isAvailable) {
    if (isAvailable) {
        window.cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: "655CDBBC",
            autoJoinPolicy: window.chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
        });

        var context = window.cast.framework.CastContext.getInstance();
        context.addEventListener(window.cast.framework.CastContextEventType.SESSION_STATE_CHANGED, function (event) {
            switch (event.sessionState) {
                case window.cast.framework.SessionState.SESSION_STARTED:
                    console.log('CastSession started');
                    break;

                case window.cast.framework.SessionState.SESSION_RESUMED:
                    console.log('CastSession resumed');
                    break;

                case window.cast.framework.SessionState.SESSION_ENDED:
                    console.log('CastSession disconnected');
                    break;

                default:
                    console.log(event.sessionState);
                    break;
            }
        });
    }
};



//$(function () {
//    $("#sendMessage").click(function () {
//        sendMessage($("#message").val());
//    })
//});

//function sendMessage(msg) {
//    var castSession = window.cast.framework.CastContext.getInstance().getCurrentSession();
//    if (castSession) {
//        castSession.sendMessage('urn:x-cast:com.example.castdata', {
//            type: "message",
//            text: msg
//        });
//    }
//}
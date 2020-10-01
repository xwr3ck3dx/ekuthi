var apiObj = null;

function StartMeeting(x){
    const domain = 'jitsimeet.ekuthi.com:9996';

    var roomName = x;
    console.log(x);
    const options = {
        roomName: roomName,
        // width: '100%',
        // height: '100%',
        parentNode: document.querySelector('#jitsi-meet-conf-container'),
        userInfo: {
            displayName: 'Samundra'
        },
        configOverwrite:{},
        interfaceConfigOverwrite: {},
        // onload: function () {
        //     alert('loaded');
        // }
    };
    apiObj = new JitsiMeetExternalAPI(domain, options);

    apiObj.addEventListeners({
        // readyToClose: function () {
        //     alert('going to close');
        // }
    });

    apiObj.executeCommand('subject', 'New Room 2');
}

function HangupCall(){
    apiObj.executeCommand('hangup');
}
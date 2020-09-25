var apiObj = null;

function StartMeeting(){
    const domain = 'jitsimeet.ekuthi.com:9996';
    const options = {
        roomName: 'test',
        // width: 700,
        // height: 700,
        parentNode: document.querySelector('#jitsi-meet-conf-container')
    };
    apiObj = new JitsiMeetExternalAPI(domain, options);
}
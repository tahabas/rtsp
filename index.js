Stream = require('node-rtsp-stream');
stream = new Stream({
    name: 'BigBuckBunny',
    streamUrl: 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov',
    wsPort: 9999,
    fps: '30',
    kbs: '2048k',
    ffmpegOptions: {// options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 , // options with required values specify the value after the key
        '-vb': "2M" // you may have to increase video buffer size for very high bitrates
    }
});
let interval;
let dataset;
let mute = 'muted';

const bottomText = `
    <div class="bottom-text">
        <span>Powered By Sprout</span>
    </div>`;

(function () {
    return document.write(
        `<div class="container">
            <div class="frame" id="frameDiv">
                <div class="video-container">
                    <div class="videos" id="videosDiv">
                        <div class="video">
                            <video id="background" class="video-js vjs-fill" autoplay="true" preload="auto" loop="true" playsinline muted>
                                <source src="https://vz-e26d1929-d75.b-cdn.net/37d09bb5-7108-4e58-8b5d-8c698faf09ea/playlist.m3u8" type="application/x-mpegURL">
                            </video>
                        </div>
                    </div>
                    <div class="options" id="optionsDiv">
                        <div class="header_section">
                          <img id="logo" src="./assets/transparent_logo.png">
                          <img id="speaker" src="./assets/mute.png" onclick="toggleSound()">
                        </div>
                        <div class="currentOptions" id="currentOptionsDiv">
                            <div class="question">
                                <h3>Hi! I am your Macbook guide</h3>
                            </div>
                            <div class="answers">
                                <button type="button" value="1" onclick="nextVideo('intro')">Get Started</button>
                                ${bottomText}
                            </div>
                        </div>
                    </div>
                </div>
    		</div>
        </div>`
    );
})();

videojs("background").ready(function(){
    this.player_.controls(false);
    console.log(this.player_.qualityLevels())
});

dataset = {
    "intro": {
        "video": "https://vz-e26d1929-d75.b-cdn.net/458c995b-e769-4f54-b0fb-141208155928/playlist.m3u8",
        "question": "Hi! I am your Macbook guide. What would you like to know?",
        "options": [
            { text: "Processor", value: "processor"},
            { text: "Storage and Ram", value: "storage"},
            { text: "Display & Battery", value: "display"},
            { text: "Speakers", value: "speakers"}
        ]
    },
   "processor": {
        "video": "https://vz-e26d1929-d75.b-cdn.net/46ebdbc1-9cfe-4233-a005-2b20c281f473/playlist.m3u8",
        "question": "What are the other things you would want to know about?",
        "options": [
           { text: "Storage and Ram", value: "storage" },
           { text: "Speakers", value: "speakers" },
           { text: "Display & Battery", value: "display" },
           { text: "Buy Now", value: "https://apple.com", url: true }
        ]
    },
    "storage": {
        "video": "https://vz-e26d1929-d75.b-cdn.net/30761643-d719-4f12-a666-413ce341a8d8/playlist.m3u8",
        "question": "What are the other things you would want to know about?",
        "options": [
           { text: "Processor", value: "processor" },
           { text: "Speakers", value: "speakers" },
           { text: "Display & Battery", value: "display" },
           { text: "Buy Now", value: "https://apple.com", url: true }
        ]
    },
    "speakers": {
        "video": "https://vz-e26d1929-d75.b-cdn.net/00dc683a-d429-4788-b8b1-774e07268371/playlist.m3u8",
        "question": "What are the other things you would want to know about?",
        "options": [
           { text: "Processor", value: "processor" },
           { text: "Storage and Ram", value: "storage" },
           { text: "Display & Battery", value: "display" },
           { text: "Buy Now", value: "https://apple.com", url: true }
        ]
    },
    "display": {
        "video": "https://vz-e26d1929-d75.b-cdn.net/44fe5d5b-fb0e-44fa-b59d-07a5eb9ed1ad/playlist.m3u8",
        "question": "What are the other things you would want to know about?",
        "options": [
           { text: "Processor", value: "processor" },
           { text: "Storage and Ram", value: "storage" },
           { text: "Speakers", value: "speakers" },
           { text: "Buy Now", value: "https://apple.com", url: true }
        ]
    }
}

function getVideoId() {
    let video = document.getElementsByClassName('video')
    video = Array.from(video);
    video = Array.from(video[0].children);
    return video[0].id;
}

function toggleSound() {
    let video = videojs(getVideoId()).player();
    video.muted(!video.muted());
    mute = video.muted() ? 'muted' : null;
    let icon = document.getElementById('speaker');
    if (video.muted()) {
        icon.src = './assets/mute.png';
    }
    else {
        icon.src = './assets/sound.png';
    }
}

function nextVideo(selection) {
    videojs(getVideoId()).dispose();
    document.getElementById('videosDiv').innerHTML = '';
    let text = document.getElementById('textOnVideoDiv');
    if (text !== null) {
        text.parentNode.removeChild(text);
    }
    let options = document.getElementById('currentOptionsDiv');
    if (options) {
        options.parentNode.removeChild(options);
    }
    document.getElementById('videosDiv').innerHTML += `<div class="video">
        <video id="${selection}" class="video-js vjs-fill" onended="nextQuestion('${selection}')" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
            <source src="${dataset[selection].video}" type="application/x-mpegURL">
        </video>
    </div>`;
    videojs(`${selection}`).ready(function(){
        this.player_.controls(false);
    });
}

function nextQuestion(selection) {
    let buttonOptions = "";
    dataset[selection].options.forEach((option) => {
        buttonOptions += `<button type="button" onclick=${option?.url ? "openInNewTab('"+option.value+"')" : "nextVideo('"+option.value+"')"}>${option.text}</button>`
    })
    document.getElementById('optionsDiv').innerHTML += `<div class="currentOptions" id="currentOptionsDiv">
        <div class="question">
            <h4>${dataset[selection].question}</h4>
        </div>
        <div class="answers">
            ${buttonOptions}
            ${bottomText}
        </div>`;
    document.getElementById('optionsDiv').style.display = 'flex';
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}
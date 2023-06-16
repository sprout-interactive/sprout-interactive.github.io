let interval;
let dataset;
let mute = 'muted';
let active = false;

const bottomText = `
    <div class="bottom-text">
        <span>Powered By Sprout</span>
    </div>`;

// (function() {
//     fetch(`https://ourauthbackend.com/widget?url=${window.location.href}`)
//     .then(data => data.json())
//     .then((json) => {
//         if (json?.token) {
//             renderWidget();
//         }
//     })
// })();

renderWidget()

function renderWidget() {
    return document.write(
        `<div id="interactive-interface"> 
            <div id="trigger" onclick="initiateInterface()">
                <img src="./assets/logo-dark.svg" style="height: 40px; width: 60px;">
            </div>
        </div>`
    )
};

function initiateInterface() {
    active = true;
    document.getElementById("interactive-interface").innerHTML = `<div class="container">
        <div class="frame" id="frameDiv">
            <div class="video-container">
                <div class="videos" id="videosDiv">
                    <div class="video">
                        <video id="background" class="video-js vjs-fill" autoplay="true" preload="auto" loop="true" playsinline muted>
                            <source src="https://vz-09c53bdb-c9e.b-cdn.net/c207610e-3108-4a9a-903d-c9165dfdf69b/playlist.m3u8" type="application/x-mpegURL">
                        </video>
                    </div>
                </div>
                <div class="header_section">
                     <img id="logo" src="./assets/logo-dark.svg">
                    <div class="icons-wrapper">
                        <img src="./assets/close.svg" onclick="closeInterface()">
                        <img id="speaker" src="./assets/mute.svg" onclick="toggleSound()">
                        <img id="share" src="./assets/share.svg" onclick="shareLink()">
                        <img id="contact" src="./assets/contact.svg" onclick="showForm()">
                    </div>
                </div>
                <div class="options" id="optionsDiv">
                    <div class="currentOptions" id="currentOptionsDiv">
                        <div class="question">
                            <h3>Welcome to the Quiz</h3>
                            <h4>Play to win. Click below to get started</h4>
                        </div>
                        <div class="answers cta">
                            <button type="button" value="1" onclick="nextVideo('1')">Get Started</button>
                            ${bottomText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form" id="formDiv">
            <div class="form-content">
                <div class="textOnForm">
                    <div class="form-text">
                        <img src="./assets/close.svg" onclick="closeForm()">
                    </div>
                    <div class="form-client-logo">
                        <h4>Get In Touch</h4>
                    </div>
                </div>
                <div class="fields" id="fieldsDiv">
              
                </div>
                <button type="button" class="submit" value="submit" onclick="sendInfo()">Submit</button>
            </div>
        </div>
        <div class="formStatus" id="formStatusDiv">
            <p id="status"></p>
        </div>
    </div>`
    videojs("background").ready(function(){
       this.player_.controls(false);
    });
};

function closeInterface() {
    stopTimer();
    videojs(getVideoId()).dispose();
    active = false;
    document.getElementById("interactive-interface").innerHTML = `<div id="trigger" onclick="initiateInterface()">
        <img src="./assets/logo-dark.svg" style="height: 40px; width: 60px;">
    </div>`
}

window.onload = async (event) => {
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    document.body.appendChild(script);
    fetch("./dataset.json").then(data => data.json()).then(json => dataset = json);
};

function getVideoId() {
    let video = document.getElementsByClassName('video')
    video = Array.from(video);
    video = Array.from(video[0].children);
    if (video.length > 1) {
        return video[1].id;
    }
    return video[0].id;
}

function toggleSound() {
    let video = videojs(getVideoId()).player();
    video.muted(!video.muted());
    mute = video.muted() ? 'muted' : null;
    let icon = document.getElementById('speaker');
    if (video.muted()) {
       icon.src = './assets/mute.svg';
    }
    else {
       icon.src = './assets/sound.svg';
    }
}

function shareLink() {
    if (navigator.share) {
        navigator.share({ title: 'Interactive Quiz Demo', url: window.location.href })
        .then(() => {
          console.log('do we need anything after sharing?');
        })
        .catch(console.error);
    }
    else {
        console.log('create share box');
    }
}

function showForm() {
    document.getElementById('frameDiv').style.display = 'none';
    let fieldsDiv = '';
    dataset.form.forEach(element => {
        fieldsDiv += `<div class="form-group">
            <label for="${element.identifier}">${element.label}:</label>
            <input type="${element.type}" class="field" id="${element.identifier}" name="${element.identifier}">
        </div>`
    })
    document.getElementById('fieldsDiv').innerHTML = fieldsDiv;
    document.getElementById('formDiv').style.display = 'block';
}

function closeForm() {
    document.getElementById('formDiv').style.display = 'none';
    document.getElementById('frameDiv').style.display = 'block';
}

function sendInfo() {
    let dataObj = { date: new Date().toISOString() };
    dataset.form.forEach(element => {
        dataObj[element.identifier] = document.getElementById(element.identifier).value;
    })
    fetch('https://k90nmo1jz3.execute-api.ap-south-1.amazonaws.com/v1/collect-lead/', {
        method: 'post',
        body: JSON.stringify(dataObj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json()
    }).then((res) => {
        if (res.status === 200) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
    })
}

function nextVideo(selection, moderator, sponsor=true) {
    stopTimer()
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
    if (selection === "won" || selection === "time" || selection === "wrong1" || selection === "wrong2" || selection === "wrong3") {
        document.getElementById('videosDiv').innerHTML += `<div class="video">
            <video id="quiz-${selection}" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                <source src="${dataset[selection].video}" type="application/x-mpegURL">
            </video>
        </div>`;
        document.getElementById('optionsDiv').innerHTML += `<div class="currentOptions" id="currentOptionsDiv">
            <div class="question">
                <h4>${dataset[selection].message}</h4>
            </div>
            <div class="answers cta">
                <button type="button" onclick=${dataset[selection].link ? "showForm()" : "nextVideo('1',false)"}>${dataset[selection].option}</button>
                ${bottomText}
            </div>`;
        document.getElementById('optionsDiv').style.display = 'flex';
    }
    else if (parseInt(selection) > 0) {
        if (parseInt(selection) > 1 && moderator) {
            confetti({
                startVelocity: 50,
                origin: {
                    x: 0.5,
                    y: 1
                }
            });
            document.getElementById('videosDiv').innerHTML += `<div class="video">
                <video id="quiz-right" onended="nextVideo('${selection}', false)" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                    <source src="${dataset["right"]["video"]}" type="application/x-mpegURL">
                </video>
            </div>`;
            selection = 'right';
        }
        else if (sponsor && (parseInt(selection) === 5 || parseInt(selection) === 9 || parseInt(selection) === 12)) {
            let sponsor = "";
            if (parseInt(selection) === 5) {
                sponsor = dataset["sponsor1"].video;
            }
            else if (parseInt(selection) === 9) {
                sponsor = dataset["sponsor2"].video;
            }
            else if (parseInt(selection) === 12) {
                sponsor = dataset["sponsor3"].video;
            }
            document.getElementById('videosDiv').innerHTML += `<div class="video">
                <video id="quiz-sponsor" onended="nextVideo('${selection}', false, false)" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                    <source src="${sponsor}" type="application/x-mpegURL">
                </video>
            </div>`;
            selection = "sponsor";
        }
        else {
            let questions = dataset[selection].questions;
            let randomQuestionNo = Math.floor(Math.random() * questions.length);
            let question = questions[randomQuestionNo].question;
            document.getElementById('videosDiv').innerHTML += `<div class="video">
                <div class="countdown"></div>
                <video id="quiz-${selection}" onended="nextQuestion(\`${question}\`, '${selection}', '${randomQuestionNo}')" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                    <source src="${dataset[selection].questions[randomQuestionNo].video}" type="application/x-mpegURL">
                </video>
            </div>`;
        }
    }
    videojs(`quiz-${selection}`).ready(function() {
        this.player_.controls(false);
    });
}

function nextQuestion(question, selection, randomQuestionNo) {
    let selectionOptions = '';
    let questions = dataset[selection].questions;
    let options = questions[randomQuestionNo].options;
    options = shuffleOptions(options);
    options.forEach((o) => {
        let stage = parseInt(selection, 10);
        stage = (stage + 1).toString();
        if (o === questions[randomQuestionNo].correct){
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('${stage}', true)">${o}</button>`
        }
        else if (parseInt(stage) < 5) {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('wrong1', true)">${o}</button>`
        }
        else if (parseInt(stage) < 9) {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('wrong2', true)">${o}</button>`
        }
        else if (parseInt(stage) < 12) {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('wrong3', true)">${o}</button>`
        }
    })
    document.getElementById('optionsDiv').innerHTML += `<div class="currentOptions" id="currentOptionsDiv">
	    <div class="question">
		  <h4>${question}</h4>
		</div>
		<div class="answers">
		  ${selectionOptions}
          ${bottomText}
		</div>`;
    document.getElementById('optionsDiv').style.display = 'flex';
    startTimer();
}

function toTitleCase(str) {
    return str.replace(/wS*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function startTimer() {
    let count = 100;
    interval = setInterval(() => {
        if (count == 0) {
            stopTimer();
            nextVideo('time', false);
        }
        else {
            count--;
            document.getElementsByClassName('countdown')[0].style.width = count + '%';
        }
    }, 100);
}

function shuffleOptions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function stopTimer() {
    clearInterval(interval);
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}
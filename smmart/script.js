// var imported = document.createElement('script');
// imported.src = 'https://www.googletagmanager.com/gtag/js?id=G-Q5924RXKC5';
// document.head.appendChild(imported);
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'G-Q5924RXKC5');

const domain = 'sprout-interactive.github.io/smmart';
let dataset = {
    "1": {
        "questions": [
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/5c65783c-a671-436c-b2fd-7d79abf2066b/playlist.m3u8",
                "question": "What is Entrepreneurship?",
                "options": [
                    "Pain",
                    "Punishment",
                    "Pleasure",
                    "Torture"
                ],
                "correct": "Pain"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/27de84eb-936b-429b-adb7-94030af5885d/playlist.m3u8",
                "question": "What is soch ka chakravyuh?",
                "options": [
                    "Thoughts without implementation",
                    "Thoughts with implementation",
                    "Actions without a planning",
                    "Overplanning"
                ],
                "correct": "Thoughts without implementation"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/9c32edaf-0289-4a3a-8987-4e5eed8b7186/playlist.m3u8",
                "question": "What is Halat ka chakravyuh?",
                "options": [
                    "People stopping growth",
                    "People empowering growth",
                    "Blaming conditions for grown",
                    "Inability to take risk"
                ],
                "correct": "People stopping growth"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/b5ace4f0-ea2e-4476-82ad-d82063114066/playlist.m3u8",
                "question": "What is Urja ka chakravyuh?",
                "options": [
                    "Spending efforts in operations",
                    "Spending time innovating",
                    "Efficient energy utilization",
                    "Spending time in finances"
                ],
                "correct": "Spending efforts in operations"
            }
        ]
    },
    "2": {
        "questions": [
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/069f4711-1579-43fd-9e00-d43bf5e35922/playlist.m3u8",
                "question": "What is productivity?",
                "options": [
                    "Max result in Min Time",
                    "Max result in Max Time",
                    "Min result in Max Time",
                    "Min result in Min Time"
                ],
                "correct": "Max result in Min Time"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/90adc8f0-7366-4886-8187-89515c8425a4/playlist.m3u8",
                "question": "What is Leverage?",
                "options": [
                    "Max result in Min efforts",
                    "Max result in Max efforts",
                    "Min result in Min efforts",
                    "Min result in Max efforts"
                ],
                "correct": "Max result in Min efforts"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/fa423763-e11e-45ac-abca-6b4425539796/playlist.m3u8",
                "question": "What is the most important thing for the growth of an organization?",
                "options": [
                    "Smart delegation",
                    "Finances",
                    "Fancy degrees",
                    "Operations"
                ],
                "correct": "Smart delegation"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/4a4f4e00-a1d8-4d6c-8631-cdf521a8f216/playlist.m3u8",
                "question": "What are the 2 decisions taken by every entrepreneur?",
                "options": [
                    "Value creation & Skills development",
                    "Economic returns & Self reliant",
                    "Financials gains & Tedious work",
                    "Tedious Work & Daily operations"
                ],
                "correct": "Value creation & Skills development"
            }
        ]
    },
    "3": {
        "questions": [
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/b629b706-746a-40a4-a50a-ecabc5fbdc60/playlist.m3u8?",
                "question": "Which of the following is not a component of value creation?",
                "options": [
                    "Finance",
                    "Leadership",
                    "Relationship",
                    "Creativity"
                ],
                "correct": "Finance"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/c9a47455-04a9-4df9-b1ec-8367124db221/playlist.m3u8",
                "question": "What is Leadership?",
                "options": [
                    "Providing direction",
                    "Giving order",
                    "Being a know it all",
                    "Micromanaging everything"
                ],
                "correct": "Providing direction"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/94424938-f344-4768-b428-b8b90ee5e3d9/playlist.m3u8",
                "question": "What is relationship?",
                "options": [
                    "Providing confidence",
                    "Giving orders",
                    "Expecting results",
                    "Burning out colleagues"
                ],
                "correct": "Providing confidence"
            },
            {
                "video": "https://vz-da0317b0-84a.b-cdn.net/d7239090-e4a0-4c65-989d-350d578fffc7/playlist.m3u8",
                "question": "What is creativity?",
                "options": [
                    "Providing capability",
                    "Do everything yourself",
                    "Non-strategic thinking",
                    "Avoid Risk Taking"
                ],
                "correct": "Providing capability"
            }
        ]
    },
    "right": {
        "video": "https://vz-da0317b0-84a.b-cdn.net/e1c7e399-2eea-4581-a434-01ebecfdd3a4/playlist.m3u8"
    },
    "won": {
        "video": "https://vz-da0317b0-84a.b-cdn.net/f981e987-fa0a-42c4-88b0-0ca70adfbc48/playlist.m3u8",
        "message": "You Won! You can still play again to test your knowledge",
        "option": "Play Again"
    },
    "time": {
        "video": "https://vz-da0317b0-84a.b-cdn.net/f3e05646-48f2-4649-9b52-5ed0ae0b6425/playlist.m3u8",
        "message": "Click on the button below to try again",
        "option": "Play Again"
    },
    "wrong": {
        "video": "https://vz-da0317b0-84a.b-cdn.net/8c35a1a9-99a1-4a27-8a23-ec7e9f9bb6c8/playlist.m3u8",
        "message": "Sorry you selected a wrong option",
        "option": "Try again"
    },
    "form": {
        "lead": [
            {
                "type": "string",
                "identifier": "name",
                "label": "Name"
            },
            {
                "type": "string",
                "identifier": "companyName",
                "label": "Company Name"
            },
            {
                "type": "string",
                "identifier": "contactNumber",
                "label": "Contact Number"
            },
            {
                "type": "email",
                "identifier": "email",
                "label": "Email Address"
            },
            {
                "type": "string",
                "identifier": "turnOver",
                "label": "Turn Over"
            },
            {
                "type": "string",
                "identifier": "location",
                "label": "Location"
            }
        ]
    }
};
let interval;
let mute = 'muted';
let active = false;
let dataObj = { date: new Date().toISOString() };
let autoTrigger = null;

const bottomText = `
    <div class="bottom-text">
        <span>Powered By Sprout</span>
    </div>`;

renderWidget();
autoTrigger = setTimeout(() => { initiateInterface() }, 4000);

function getParent() {
    return document.getElementById('mysproutcloud-interactive-interface');
}

function renderWidget() {
    return document.write(
        `<div id="mysproutcloud-interactive-interface"> 
            <div id="trigger" onclick="initiateInterface()">
                <img src="https://${domain}/assets/Smmart-Avtar.svg">
            </div>
        </div>`
    )
};

function initiateInterface() {
    if (!active) {
        clearTimeout(autoTrigger);
        active = true;
        getParent().innerHTML = `<div class="container">
            <div class="frame" id="frameDiv">
                <div class="video-container">
                    <div class="videos" id="videosDiv">
                        <div class="video">
                            <video id="background" class="video-js vjs-fill" autoplay="true" preload="auto" loop="true" playsinline muted>
                                <source src="https://vz-da0317b0-84a.b-cdn.net/d1571318-c13d-4604-8e74-8328b9a3113c/playlist.m3u8" type="application/x-mpegURL">
                            </video>
                        </div>
                    </div>
                    <div class="header_section">
                         <img id="logo" src="https://${domain}/assets/smart-logo.png">
                        <div class="icons-wrapper">
                            <img src="https://${domain}/assets/close.svg" onclick="closeInterface()">
                            <img id="speaker" src="https://${domain}/assets/tap-unmute.svg" onclick="toggleSound()">
                        </div>
                    </div>
                    <div class="options" id="optionsDiv">
                        <div class="currentOptions" id="currentOptionsDiv">
                            <div class="question">
                                <h3>Welcome To Why Do</h3>
                                <h4>Reserve Your Spot & Get A Chance To Win Our Game Changing Time Management Tool</h4>
                            </div>
                            <div class="answers cta">
                                <button type="button" value="1" onclick=${localStorage.getItem("lead") ? "nextVideo('1',true)" : "showForm()"}>Reserve My Spot!</button>
                                ${bottomText}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form" id="formDiv">
                <div class="form-content">
                    <div class="textOnForm">
                        <div id="formHeader">
                            <div class="form-client-logo">
                                <h4>Some Details For Reservation</h4>
                            </div>
                            <div>
                                <img src="https://${domain}/assets/close.png" onclick="closeForm()">
                            </div>
                        </div>
                    </div>
                    <div class="fields" id="fieldsDiv">
                  
                    </div>
                    <div id="formSubmit">
                        <button type="button" class="submit" value="submit" onclick="sendInfo()">Submit</button>
                    </div>
                </div>
            </div>
            <div class="formStatus" id="formStatusDiv">
                <p id="status"></p>
            </div>
        </div>`
        videojs("background").ready(function() { this.player_.controls(false) });
    }
};

function closeInterface() {
    stopTimer();
    videojs(getVideoId()).dispose();
    active = false;
    getParent().innerHTML = `<div id="trigger" onclick="initiateInterface()">
        <img src="https://${domain}/assets/Smmart-Avtar.svg">
    </div>`
}

function getVideoId() {
    let video = getParent().getElementsByClassName('video')
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
    let icon = getParent().querySelector('#speaker');
    if (video.muted()) {
       icon.src = 'https://${domain}/assets/mute.svg';
    }
    else {
       icon.src = 'https://${domain}/assets/sound.svg';
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
    const player = videojs(getVideoId());
    player.pause();
    let fieldsDiv = '';
    dataset.form.lead.forEach(element => {
        fieldsDiv += `<div class="form-group">
            <label for="${element.identifier}">${element.label}:</label>
            <input type="${element.type}" class="field" id="${element.identifier}" name="${element.identifier}">
        </div>`
    })
    getParent().querySelector('#fieldsDiv').innerHTML = fieldsDiv;
    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 640) {
        getParent().querySelector('#formDiv').style.height = '90%';
    }
    else if (width > 640 && width < 1008) {
        getParent().querySelector('#formDiv').style.height = '90%';
    }
    else{
        getParent().querySelector('#formDiv').style.height = '71vh';
    }
}

function closeForm() {
    const player = videojs(getVideoId());
    player.play();
    getParent().querySelector('#formDiv').style.height = '0%';
}

function sendInfo() {
    let dataErr = [];
    dataset.form.lead.forEach(element => {
        dataObj[element.identifier] = getParent().querySelector(`#${element.identifier}`).value;
    });
    if (dataObj.name === "") {
        dataErr.push("name");
    } 
    if (dataObj.companyName === "") {
        dataErr.push("companyName")
    } 
    if (dataObj.contactNumber === "" || !/^[6-9]\d{9}$/.test(dataObj.contactNumber)) {
        dataErr.push("contactNumber")
    }
    if (dataErr.length === 0) {
        fetch('https://ei7nd0lrp7.execute-api.ap-south-1.amazonaws.com/v1/lead', {
            method: 'post',
            body: JSON.stringify(dataObj),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.status === 200) {
                closeForm();
                localStorage.setItem("lead", true);
                nextVideo('1', true);
            }
            else {
                closeInterface();
                console.log(error);    
            }
        }).catch((error) => {
            closeInterface();
            console.log(error);
        })
    }
    else {
        dataErr.forEach((field) => {
            getParent().querySelector(`#${field}`).style.borderColor = "red";
            setTimeout(() => {
                getParent().querySelector(`#${field}`).style.borderColor = "";
            }, 2000);
        });
    }
}

function nextVideo(selection, moderator) {
    stopTimer()
    videojs(getVideoId()).dispose();
    getParent().querySelector('#videosDiv').innerHTML = '';
    let text = getParent().querySelector('#textOnVideoDiv');
    if (text !== null) {
       text.parentNode.removeChild(text);
    }
    let options = getParent().querySelector('#currentOptionsDiv');
    if (options) {
       options.parentNode.removeChild(options);
    }
    if (selection === "won" || selection === "time" || selection === "wrong") {
        getParent().querySelector('#videosDiv').innerHTML += `<div class="video">
            <video id="quiz-${selection}" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                <source src="${dataset[selection].video}" type="application/x-mpegURL">
            </video>
        </div>`;
        getParent().querySelector('#optionsDiv').innerHTML += `<div class="currentOptions" id="currentOptionsDiv">
            <div class="question">
                <h4>${dataset[selection].message}</h4>
            </div>
            <div class="answers cta">
                ${selection === "won" ? `<button type="button" onclick='openLink()'>Prize</button>` : ""}
                <button type="button" onclick=${dataset[selection].link ? "showForm()" : "nextVideo('1',false)"}>${dataset[selection].option}</button>
                ${bottomText}
            </div>`;
        getParent().querySelector('#optionsDiv').style.display = 'flex';
    }
    else if (parseInt(selection) > 0) {
        if (parseInt(selection) > 1 && moderator) {
            getParent().querySelector('#videosDiv').innerHTML += `<div class="video">
                <video id="quiz-right" onended="nextVideo('${selection}', false)" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                    <source src="${dataset["right"]["video"]}" type="application/x-mpegURL">
                </video>
            </div>`;
            selection = 'right';
        }
        else {
            let questions = dataset[selection].questions;
            let randomQuestionNo = Math.floor(Math.random() * questions.length);
            let question = questions[randomQuestionNo].question;
            getParent().querySelector('#videosDiv').innerHTML += `<div class="video">
                <div class="countdown"></div>
                <video id="quiz-${selection}" onended="nextQuestion(\`${question}\`, '${selection}', '${randomQuestionNo}')" class="video-js vjs-fill" controls="false" autoplay="true" playsinline data-setup='{"customControlsOnMobile": true}' ${mute}>
                    <source src="${dataset[selection].questions[randomQuestionNo].video}" type="application/x-mpegURL">
                </video>
            </div>`;
        }
    }
    videojs(`quiz-${selection}`).ready(function() { this.player_.controls(false) });
}

function nextQuestion(question, selection, randomQuestionNo) {
    let selectionOptions = '';
    let questions = dataset[selection].questions;
    let options = questions[randomQuestionNo].options;
    options = shuffleOptions(options);
    options.forEach((o) => {
        let stage = parseInt(selection, 10);
        stage = (stage + 1).toString();
        if (dataset[stage] && o === questions[randomQuestionNo].correct){
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('${stage}', true)">${o}</button>`
        }
        else if (!dataset[stage]) {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('won', false)">${o}</button>`
        }
        else {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('wrong', false)">${o}</button>`
        }
    })
    getParent().querySelector('#optionsDiv').innerHTML += `<div class="currentOptions" id="currentOptionsDiv">
        <div class="question">
          <h4>${question}</h4>
        </div>
        <div class="answers">
          ${selectionOptions}
          ${bottomText}
        </div>`;
    getParent().querySelector('#optionsDiv').style.display = 'flex';
    startTimer();
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
            getParent().getElementsByClassName('countdown')[0].style.width = count + '%';
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

function openLink() {
    window.open("https://youtu.be/j0V9JkkpH-8", '_blank').focus();
}
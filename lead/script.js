let interval;
let dataset = {
    "1": {
        "questions": [
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/1476afa4-d555-4c04-b208-870b50539155/playlist.m3u8",
                "question": "In which martial arts is Rajkumar Rao trained in?",
                "options": [
                    "Taekwondo",
                    "Karate",
                    "Judo",
                    "Kung fu"
                ],
                "correct": "Taekwondo"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/d054244c-2d7e-42b8-8431-16a77a27b774/playlist.m3u8",
                "question": "What is the name of Ritesh Deshmukh's character in Dhamaal?",
                "options": [
                    "Roy",
                    "Rajesh",
                    "Rakesh",
                    "Ronny"
                ],
                "correct": "Roy"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/b2b9c2c4-e3b6-4f81-a3af-badce60dc902/playlist.m3u8",
                "question": "About how many taste buds does the average human tongue have?",
                "options": [
                    "10000",
                    "1000",
                    "50000",
                    "100000"
                ],
                "correct": "10000"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/11684a39-8f17-4f3d-9a52-a54240dee532/playlist.m3u8",
                "question": "An Indian cricketer has a unique record of fielding for Pakistan, who is he?",
                "options": [
                    "Sachin Tendulkar",
                    "Kapil Dev",
                    "Sunil Gavaskar",
                    "Virat Kohli"
                ],
                "correct": "Sachin Tendulkar"
            }
        ]
    },
    "2": {
        "questions": [
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/e1f64791-a0d9-41b6-8cd6-228642b132f0/playlist.m3u8",
                "question": "Barsaat was one of the hit movies directed by Raj Kapoor, who starred opposite Raj Kapoor in the movie?",
                "options": [
                    "Nargis",
                    "Nadira",
                    "Vyjayanthimala",
                    "Madhubala"
                ],
                "correct": "Nargis"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/7f79f5b2-2983-4c65-ab60-2b1a8fea8400/playlist.m3u8",
                "question": "Bollywood superstar Shahrukh Khan, played a villain in which film?",
                "options": [
                    "Darr",
                    "Josh",
                    "Raees",
                    "Kal Ho Na Ho"
                ],
                "correct": "Darr"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/bfbf9855-1c09-4155-90f8-fd69ffc0285b/playlist.m3u8",
                "question": "By inventing the automobile this man changed the world, who is he?",
                "options": [
                    "Karl Benz",
                    "Henry Ford",
                    "Giovanni Agnelli",
                    "Adam Opel"
                ],
                "correct": "Karl Benz"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/7ebf6996-7cb4-4138-b4bb-c7f3bea34f7d/playlist.m3u8",
                "question": "Don Bradman, retired with the Highest average in test cricket, what was his average?",
                "options": [
                    "99.94",
                    "85.45",
                    "80.1",
                    "101.23"
                ],
                "correct": "99.94"
            }
        ]
    },
    "3": {
        "questions": [
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/7a6f929b-f4b3-47b1-bbbe-b191eb0e08b1/playlist.m3u8",
                "question": "Former Indian captain holds the ranks of LT Colonel in the Indian Army, and was the second person to achieve the same, who is he?",
                "options": [
                    "MS Dhoni",
                    "Gautam Gambhir",
                    "Anil Kumble",
                    "Rahul Dravid"
                ],
                "correct": "MS Dhoni"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/417d5640-8aa1-4169-b281-ea18511f5a5d/playlist.m3u8",
                "question": "Google Chrome, Safari, Firefox, and Explorer are different types of what?",
                "options": [
                    "Web browsers",
                    "Apps",
                    "SaaS",
                    "OS"
                ],
                "correct": "Web browsers"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/e508fc0d-d008-4486-997c-1bbd26c2776e/playlist.m3u8",
                "question": "how big is a cricket pitch supposed to be?",
                "options": [
                    "22 yards by 10 feet",
                    "20 yards by 12 feet",
                    "10 yards by 5 feet",
                    "40 yards by 20 feet"
                ],
                "correct": "22 yards by 10 feet"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/94b3fe85-d55d-47ce-bb58-cec3de47cc55/playlist.m3u8",
                "question": "How long did the longest cricket match in history go on for?",
                "options": [
                    "12 days",
                    "11 days",
                    "7 days",
                    "23 days"
                ],
                "correct": "12 days"
            }
        ]
    },
    "4": {
        "questions": [
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/93544cdc-7aa2-47a5-a0cb-fe4b86330ba5/playlist.m3u8",
                "question": "How long did the Middle Ages last?",
                "options": [
                    "1000 years",
                    "200 years",
                    "1240 years",
                    "876 years"
                ],
                "correct": "1000 years"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/d672297e-9f93-49c5-9042-65b3e320bc08/playlist.m3u8",
                "question": "How many molecules of oxygen does ozone have?",
                "options": [
                    "Three",
                    "Two",
                    "One",
                    "Four"
                ],
                "correct": "Three"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/154a3905-b51a-45c7-b537-4ecca0f2d7f2/playlist.m3u8",
                "question": "How many NBA championships did Michael Jordan win?",
                "options": [
                    "Six",
                    "Five",
                    "Eleven",
                    "Ten"
                ],
                "correct": "Six"
            },
            {
                "video": "https://vz-09c53bdb-c9e.b-cdn.net/d702eaf5-5beb-4c61-a29b-63602921238f/playlist.m3u8",
                "question": "How many parts (screws and bolts included) does the average car have?",
                "options": [
                    "30000",
                    "10000",
                    "50000",
                    "5000"
                ],
                "correct": "30000"
            }
        ]
    },
    "right": {
        "video": "https://vz-09c53bdb-c9e.b-cdn.net/6c186e8e-03d9-4e30-9822-50a63c7d50e1/playlist.m3u8"
    },
    "won": {
        "video": "https://vz-09c53bdb-c9e.b-cdn.net/95f2ef98-4805-4a69-81d0-df1b4d7e1336/playlist.m3u8",
        "message": "Winning message",
        "option": "Provide details",
        "link": "https://www.jugnuplaygames.com/contact-8"
    },
    "time": {
        "video": "https://vz-09c53bdb-c9e.b-cdn.net/fc3fc38f-3aa4-4c2a-87b3-e3e053c62c6b/playlist.m3u8",
        "message": "Click On The Button Below To Try Again",
        "option": "Play Again"
    },
    "wrong": {
        "video": "https://vz-09c53bdb-c9e.b-cdn.net/0c3e4889-971a-41e4-a658-ab88d7e0eec7/playlist.m3u8",
        "message": "Sorry you did not clear stage 1",
        "option": "Try again"
    },
    "form": {
        "lead": [
            {
                "type": "string",
                "identifier": "name",
                "label": "Full name"
            },
            {
                "type": "email",
                "identifier": "emailid",
                "label": "Email Address"
            },
            {
                "type": "number",
                "identifier": "phone",
                "label": "Phone number"
            }
        ],
        "prize": [
            {
                "type": "string",
                "identifier": "address",
                "label": "Address"
            }
        ]
    }
};
let mute = 'muted';
let active = false;
let prize = false;
let dataObj = { date: new Date().toISOString() };

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
                    </div>
                </div>
                <div class="options" id="optionsDiv">
                    <div class="currentOptions" id="currentOptionsDiv">
                        <div class="question">
                            <h3>Welcome to the Quiz</h3>
                            <h4>Play to win. Click below to get started</h4>
                        </div>
                        <div class="answers cta">
                            <button type="button" value="1" onclick=${localStorage.getItem("lead") ? "nextVideo('1')" : "showForm()"}>Get Started</button>
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
    videojs("background").ready(function() { this.player_.controls(false) });
};

function closeInterface() {
    stopTimer();
    videojs(getVideoId()).dispose();
    active = false;
    document.getElementById("interactive-interface").innerHTML = `<div id="trigger" onclick="initiateInterface()">
        <img src="./assets/logo-dark.svg" style="height: 40px; width: 60px;">
    </div>`
}

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
    if (prize) {
        dataset.form.prize.forEach(element => {
            fieldsDiv += `<div class="form-group">
                <label for="${element.identifier}">${element.label}:</label>
                <input type="${element.type}" class="field" id="${element.identifier}" name="${element.identifier}">
            </div>`
        })
    }
    else {
        dataset.form.lead.forEach(element => {
            fieldsDiv += `<div class="form-group">
                <label for="${element.identifier}">${element.label}:</label>
                <input type="${element.type}" class="field" id="${element.identifier}" name="${element.identifier}">
            </div>`
        })
    }
    document.getElementById('fieldsDiv').innerHTML = fieldsDiv;
    document.getElementById('formDiv').style.display = 'block';
}

function closeForm() {
    document.getElementById('formDiv').style.display = 'none';
    document.getElementById('frameDiv').style.display = 'block';
}

function sendInfo() {
    let dataErr = null;
    if (prize) {
        dataset.form.prize.forEach(element => {
            if (document.getElementById(element.identifier).value.trim() !== "") {
                dataObj[element.identifier] = document.getElementById(element.identifier).value;
            }
            else {
                dataErr = true;
            }
        })
    }
    else {
        dataset.form.lead.forEach(element => {
            if (document.getElementById(element.identifier).value.trim() !== "") {
                dataObj[element.identifier] = document.getElementById(element.identifier).value;
            }
            else {
                dataErr = true;
            }
        })
    }
    if (dataErr === null) {
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
                closeForm();
                if (!prize) {
                    localStorage.setItem("lead", true);
                    nextVideo('1');
                }
            }
        }).catch((error) => {
            closeInterface();
            console.log(error);
        })
    }
    else {
        closeForm();
        nextVideo('1');
        console.log("no data");
    }
}

function nextVideo(selection) {
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
    if (selection === "won" || selection === "time" || selection === "wrong") {
        if (selection === "won") {
            prize = true;
        }
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
                <button type="button" onclick=${dataset[selection].link ? "showForm()" : "nextVideo('1')"}>${dataset[selection].option}</button>
                ${bottomText}
            </div>`;
        document.getElementById('optionsDiv').style.display = 'flex';
    }
    else if (parseInt(selection) > 0) {
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
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('${stage}')">${o}</button>`
        }
        else if (!dataset[stage]) {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('won')">${o}</button>`
        }
        else {
            selectionOptions += `<button type="button" value="${o}" onclick="nextVideo('wrong')">${o}</button>`
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
            nextVideo('time');
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
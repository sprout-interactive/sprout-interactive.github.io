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
                                <source src="https://vz-09c53bdb-c9e.b-cdn.net/c207610e-3108-4a9a-903d-c9165dfdf69b/playlist.m3u8" type="application/x-mpegURL">
                            </video>
                        </div>
                    </div>
                    <div class="header_section">
                        <img id="logo" src="./assets/logo-dark.svg">
                        <div class="icons-wrapper">
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
                            <div class="answers">
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
    );
})();
// <img src="./assets/logo-dark.svg">
// style="display: flex; justify-content: space-between;"
videojs("background").ready(function(){
   this.player_.controls(false);
});

window.onload = async (event) => {
    var script = document.createElement("script");
    script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
    document.body.appendChild(script);
    // fetch("https://jugnu.ams3.cdn.digitaloceanspaces.com/001interactiveassets/Json/2/dataset.json").then(data => data.json()).then(json => dataset = json);
    dataset = {
      "1": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/20cb1393-c91e-4430-a4f7-6c8e455de914/playlist.m3u8",
               "question": "In the Priyadarshan directed movie Hulchul, which movie are Anjali (Kareena Kapoor) and her family watching?",
               "options": [
                  "Bobby",
                  "Kaho Na Pyar Hai",
                  "Darr",
                  "Mohabbatein"
               ],
               "correct": "Bobby"
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
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/37ca96d1-15cb-41fe-8f4a-97604dcb9935/playlist.m3u8",
               "question": "Alia Bhatt holds a passport of foreign nation, which is it?",
               "options": [
                  "UK",
                  "Canada",
                  "UAE",
                  "USA"
               ],
               "correct": "UK"
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
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/5c8dce0c-a569-4bc2-b1bf-746fa967711e/playlist.m3u8",
               "question": "At the age of 14 Katrina Kaif won a beauty contest in this country?",
               "options": [
                  "USA",
                  "UK",
                  "UAE",
                  "Australia"
               ],
               "correct": "USA"
            },
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
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/41136e35-bd50-49cd-a399-2e240557fa51/playlist.m3u8",
               "question": "Before becoming an actor what was Taapsee Pannu's profession?",
               "options": [
                  "software engineer",
                  "fashion designer",
                  "jweller",
                  "investment banker"
               ],
               "correct": "software engineer"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/7f79f5b2-2983-4c65-ab60-2b1a8fea8400/playlist.m3u8",
               "question": "Bollywood superstar Shahrukh Khan, played a villain in which film?",
               "options": [
                  "Darr",
                  "Josh",
                  "raees",
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
            }
         ]
      },
      "2": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/06f30b14-6a20-4529-84d5-1f50c286f3a3/playlist.m3u8",
               "question": "By what name were the Egyptian kings/rulers known?",
               "options": [
                  "Pharaohs",
                  "Pharaohs",
                  "Pharaohs",
                  "Pharaohs"
               ],
               "correct": "Pharaohs"
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
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/ec976415-8acd-413c-b618-33641661a7d8/playlist.m3u8",
               "question": "During the reign of which emperor is the poet Kalidasa accepted to have lived?",
               "options": [
                  "Chandragupta Vikramaditya",
                  "Samudragupta",
                  "Ramagupta",
                  "Kumaragupta I"
               ],
               "correct": "Chandragupta Vikramaditya"
            },
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
            },
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
                  "two",
                  "one",
                  "Four"
               ],
               "correct": "Three"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/154a3905-b51a-45c7-b537-4ecca0f2d7f2/playlist.m3u8",
               "question": "How many NBA championships did Michael Jordan win?",
               "options": [
                  "Six",
                  "five",
                  "Eleven",
                  "ten"
               ],
               "correct": "Six"
            }
         ]
      },
      "3": {
         "questions": [
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
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/2e7cc03f-a765-4f22-a811-727ea8f9be17/playlist.m3u8",
               "question": "How many player are a part of a football match?",
               "options": [
                  "22",
                  "15",
                  "20",
                  "25"
               ],
               "correct": "22"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/74205632-ff40-4cff-b580-2a26aec7e9c1/playlist.m3u8",
               "question": "How many Pyramids of Giza were made?",
               "options": [
                  "Three",
                  "one",
                  "five",
                  "ten"
               ],
               "correct": "Three"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/763658cd-7fe3-492a-bd39-ed100980b129/playlist.m3u8",
               "question": "How many times does the heartbeat per day?",
               "options": [
                  "100000",
                  "200000",
                  "50000",
                  "500000"
               ],
               "correct": "100000"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/1fd5bb35-c021-48ff-b2ba-a94219f4230f/playlist.m3u8",
               "question": "In Sholay, what was the name of Basanti's horse?",
               "options": [
                  "Dhano",
                  "Dhano",
                  "Dhano",
                  "Dhano"
               ],
               "correct": "Dhano"
            },
            // {
            //    "video": "https://vz-09c53bdb-c9e.b-cdn.net/d228a8a3-521e-402f-8f21-395c860a0e18/playlist.m3u8",
            //    "question": "In 1903 this woman made history, by winning the first nobel prize as a female, who is she?",
            //    "options": [
            //       "Marie Curie",
            //       "Lise Meitner",
            //       "IrÃ¨ne Curie-Joliot",
            //       "Barbara McClintock"
            //    ],
            //    "correct": "Marie Curie"
            // },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/a7c3e562-4178-4b77-a812-c3210850e161/playlist.m3u8",
               "question": "In 1930 which country won the first ever fifa world cup?",
               "options": [
                  "Uruguay",
                  "Italy",
                  "Brazil",
                  "France"
               ],
               "correct": "Uruguay"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/8f7e4c28-79ea-41e5-8a78-decd91535e25/playlist.m3u8",
               "question": "In 2009 Siddharth Malhotra had a small role in this TV show, what's the name of the tv show?",
               "options": [
                  "Dharti Ka Veer Yodha Prithviraj Chauhan.",
                  "Taarak Mehta Ka Ooltah Chashmah",
                  "CID",
                  "Balika Vadhu"
               ],
               "correct": "Dharti Ka Veer Yodha Prithviraj Chauhan."
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/6b5a2e07-2328-468c-a74e-d33008ada7c3/playlist.m3u8",
               "question": "In IPL 2011, this superstar was a man on a mission, winning the purple cap, who is he?",
               "options": [
                  "Chris Gale",
                  "Brendon McCullum",
                  "Virat Kohli",
                  "Rohit Sharma"
               ],
               "correct": "Chris Gale"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/44804337-31e1-4c09-a1d9-c184296aedb8/playlist.m3u8",
               "question": "In our solar system which planet has the highest gravity?",
               "options": [
                  "Jupiter",
                  "Saturn",
                  "Earth",
                  "Mars"
               ],
               "correct": "Jupiter"
            }
         ]
      },
      "4": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/4806a6e7-3fd8-4ff2-b627-630516ca8462/playlist.m3u8",
               "question": "In the Epic Ramayana who tried to kill Rama?",
               "options": [
                  "Parashurama",
                  "Bharat",
                  "Kalki",
                  "Sita"
               ],
               "correct": "Parashurama"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/a304aa34-6d5d-4bcb-a919-65558c5d051d/playlist.m3u8",
               "question": "In the inaugural season of the IPL, Kings XI Punjab had a Punjabi pop singer as their brand ambassador, who was he?",
               "options": [
                  "Daler Mehndi",
                  "Mika singh",
                  "diljit dosanjh",
                  "Honey singh"
               ],
               "correct": "Daler Mehndi"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/25dcaba4-ae60-4186-88eb-438478576b92/playlist.m3u8",
               "question": "In the movie Billu, what is the name of the village where Billu lives?",
               "options": [
                  "Budbuda",
                  "Poovar",
                  "Landour",
                  "Khimsar"
               ],
               "correct": "Budbuda"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/a27e4cd6-57b1-4a60-990f-f550cdf5f5d1/playlist.m3u8",
               "question": "In the world of computer what is JAVA?",
               "options": [
                  "Programming Language",
                  "OS",
                  "Web Browser",
                  "Binary"
               ],
               "correct": "Programming Language"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/1106055d-bb8e-45cf-a634-65481c7059ac/playlist.m3u8",
               "question": "In what animals are pearls found in?",
               "options": [
                  "Oysters",
                  "Shellfish",
                  "Clam",
                  "Mussels"
               ],
               "correct": "Oysters"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/776c7f82-0701-4871-8b54-6a1c281fcafa/playlist.m3u8",
               "question": "In what year did Steve Jobs release the first Iphone?",
               "options": [
                  "2007",
                  "2008",
                  "2009",
                  "2010"
               ],
               "correct": "2007"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/c93a17e7-c72c-4bcf-9d5a-5443ab19da4e/playlist.m3u8",
               "question": "In what year was the Corvette introduced?",
               "options": [
                  "1953",
                  "1949",
                  "1962",
                  "1950"
               ],
               "correct": "1953"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f04a6b1e-3f61-4fbc-b232-1973e574de5d/playlist.m3u8",
               "question": "In what year was the first-ever Wimbledon Championship held?",
               "options": [
                  "1877",
                  "1899",
                  "1876",
                  "1900"
               ],
               "correct": "1877"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f791b666-36de-44d6-98ec-ba58c12b19bf/playlist.m3u8",
               "question": "In which body part can you find the femur?",
               "options": [
                  "Leg",
                  "Arm",
                  "Neck",
                  "Back"
               ],
               "correct": "Leg"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/ec3895ba-f128-4938-ac86-91072b51c572/playlist.m3u8",
               "question": "In which country Adolph Hitler was born?",
               "options": [
                  "Austria",
                  "Germany",
                  "Russia",
                  "Poland"
               ],
               "correct": "Austria"
            }
         ]
      },
      "5": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/1476afa4-d555-4c04-b208-870b50539155/playlist.m3u8",
               "question": "In which martial arts is Rajkumar Rao trained in?",
               "options": [
                  "Taekwondo",
                  "karate",
                  "Judo",
                  "Kung fu"
               ],
               "correct": "Taekwondo"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/3a503299-ced0-42fb-9098-0d06e5d81440/playlist.m3u8",
               "question": "In which year World War I begin?",
               "options": [
                  "1914",
                  "1919",
                  "1912",
                  "1916"
               ],
               "correct": "1914"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/4c580112-2a17-4ac8-9021-463750e67139/playlist.m3u8",
               "question": "Karishma & Kareena Kapoor's grandmother was not Indian, which country did she belong to?",
               "options": [
                  "UK",
                  "USA",
                  "South Africa",
                  "Canada"
               ],
               "correct": "UK"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f19330e4-f9e7-4593-8c77-bbff7e0e13be/playlist.m3u8",
               "question": "Nagrath, is the official last name of this Bollywood family however they use a different last name, what is the surname used by them?",
               "options": [
                  "Roshan",
                  "Kapoor",
                  "Kumar",
                  "Khanna"
               ],
               "correct": "Roshan"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/89055d93-c22b-4379-905c-0efdfde8d5f4/playlist.m3u8",
               "question": "Name the country in South America which spans more than half of its western coast",
               "options": [
                  "Chile",
                  "Brazil",
                  "Colombia",
                  "Argentina"
               ],
               "correct": "Chile"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/ee66fe85-1ccb-4559-9e47-65d54a07ca47/playlist.m3u8",
               "question": "Pankaj Tripathi, once stole a pair of slipper from an actor, who is he?",
               "options": [
                  "Manoj Bajpayee",
                  "Raj Kumar Rao",
                  "Pankaj Kapoor",
                  "Sudhir Mishra"
               ],
               "correct": "Manoj Bajpayee"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/9c196905-73e2-4c90-9de0-e0651c680a11/playlist.m3u8",
               "question": "Penicillin was a life saving drug, who discovered it?",
               "options": [
                  "Alexander Fleming",
                  "John Collins Warren",
                  "Elliott Joslin",
                  "Benjamin Waterhouse"
               ],
               "correct": "Alexander Fleming"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/9ddb7acc-06a4-4ec8-bf58-d7788b45c72f/playlist.m3u8",
               "question": "Rajasthan Royals won the first IPL in 2008, who was their captain?",
               "options": [
                  "Warne",
                  "Watson",
                  "Tanvir",
                  "Smith"
               ],
               "correct": "Warne"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/78fd6dd7-c600-4bfa-b859-249f17d675c9/playlist.m3u8",
               "question": "Richter Scale is metric to measure natural disasters, what disaster does it measure?",
               "options": [
                  "Earthquakes",
                  "tsunami",
                  "Volcano",
                  "Rains"
               ],
               "correct": "Earthquakes"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/bc4033b8-f27f-448a-82a1-f26e74db53c2/playlist.m3u8",
               "question": "Shahid Kapoor's grand-parents were journalists, which magazine did they work for?",
               "options": [
                  "Sputnik",
                  "filmfare",
                  "Stardust",
                  "CNN"
               ],
               "correct": "Sputnik"
            }
         ]
      },
      "6": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/85fecdad-d049-4836-b34f-04836b6c0818/playlist.m3u8",
               "question": "Shraddha Kapoor, Tiger Shroff, and Athiya Shetty were all classmates in this school?",
               "options": [
                  "American School of Bombay",
                  "Bombay Scottish",
                  "Singapore International",
                  "Dhirubhai Ambani International School"
               ],
               "correct": "American School of Bombay"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/319286e1-a39a-4efa-a6b5-eaa77d56fecf/playlist.m3u8",
               "question": "Siddhima, was the name give to this bollywood superstar actress, who is she?",
               "options": [
                  "Kareena Kapoor",
                  "Priyanka kapoor",
                  "Aishwarya Rai",
                  "Kajol Devgn"
               ],
               "correct": "Kareena Kapoor"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/00101a41-22f6-49cf-8485-18131c018076/playlist.m3u8",
               "question": "The first century in IPL was scored in the very first game, who scored it?",
               "options": [
                  "Brendon McCullum",
                  "Chris Gayle",
                  "Ab De Villiers",
                  "Sachin Tendulkar"
               ],
               "correct": "Brendon McCullum"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/3df320b9-b23d-4617-ac98-4197107be9fd/playlist.m3u8",
               "question": "The longest river in the world is located in Africa, what's its name?",
               "options": [
                  "The Nile",
                  "The Nile",
                  "The Nile",
                  "The Nile"
               ],
               "correct": "The Nile"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/8f29e0c8-ae8c-41c0-a7b5-51d14c267da7/playlist.m3u8",
               "question": "This actress is a professional singer as well, and has been singing since the age of 7, who is she?",
               "options": [
                  "Tara Sutaria",
                  "Alia Bhatt",
                  "Sara Ali Khan",
                  "Monali Thakur"
               ],
               "correct": "Tara Sutaria"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f8a9bf72-3512-4d12-8197-a9ffab755ba4/playlist.m3u8",
               "question": "This bowler took the first hattrick in IPL, who is he?",
               "options": [
                  "Laxmipathy Balaji",
                  "Yuvraj Singh",
                  "Dale Steyn",
                  "Brett Lee"
               ],
               "correct": "Laxmipathy Balaji"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/6db2918c-7773-4163-94d1-d23c6c5f07e9/playlist.m3u8",
               "question": "This cricketer was the first active cricketer to be nominated to Rajya Sabha, who was he?",
               "options": [
                  "Sachin Tendulkar",
                  "Kirti Azad",
                  "Chetan Chauhan",
                  "Navjot Singh Sidhu"
               ],
               "correct": "Sachin Tendulkar"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/0e184728-231f-4f13-9cf4-df61c1d07455/playlist.m3u8",
               "question": "This Goddess is said to have emerged during the churning of the ocean, who is she?",
               "options": [
                  "Lakshmi",
                  "Durga",
                  "Kali",
                  "Sarasvati"
               ],
               "correct": "Lakshmi"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/9f97765f-cc79-4cdc-80bb-817c15abf567/playlist.m3u8",
               "question": "Top run scorer in every IPL is given a cap, what it the colour of the cap?",
               "options": [
                  "Orange",
                  "Red",
                  "Green",
                  "Purple"
               ],
               "correct": "Orange"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/71b200fb-c651-434c-97db-aa0396a3bcde/playlist.m3u8",
               "question": "What age in Indian history is referred to as the 'Golden Age'?",
               "options": [
                  "Gupta",
                  "Chalukya",
                  "Chola",
                  "Ikshvaku"
               ],
               "correct": "Gupta"
            }
         ]
      },
      "7": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f931ff67-3255-42dc-a5b1-9a16648e8e39/playlist.m3u8",
               "question": "What does âHTTPâs original name?",
               "options": [
                  "twttr",
                  "Tweety",
                  "TinyM",
                  "Tales"
               ],
               "correct": "twttr"
            },
            // {
            //    "video": "https://vz-09c53bdb-c9e.b-cdn.net/d5cc7a74-fea8-426f-ba8f-aced920f067d/playlist.m3u8",
            //    "question": "Whatâs the shortcut for the âcopyâs cricket match recorded?",
            //    "options": [
            //       "1745",
            //       "1760",
            //       "1900",
            //       "1977"
            //    ],
            //    "correct": "1745"
            // },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/a2fd696c-4dea-4129-9644-68b033fb64ba/playlist.m3u8",
               "question": "Where was the final of the 2009 IPL held?",
               "options": [
                  "New Wanderers Stadium, Johannesburg",
                  "New Wanderers Stadium, Johannesburg",
                  "New Wanderers Stadium, Johannesburg",
                  "New Wanderers Stadium, Johannesburg"
               ],
               "correct": "New Wanderers Stadium, Johannesburg"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/68cb53c9-7b68-4ff1-a203-24f446c42b14/playlist.m3u8",
               "question": "Which actor Inspired MS Dhoni's hairstyle during the early part of his career?",
               "options": [
                  "John Abraham",
                  "Akshay Kumar",
                  "Nicolas Cage",
                  "keanu reeves"
               ],
               "correct": "John Abraham"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/225911f9-0b80-4078-ba94-5188c200ea89/playlist.m3u8",
               "question": "Which animal can be seen on the luxury car brand Porsche logo?",
               "options": [
                  "Horse",
                  "Bull",
                  "Tiger",
                  "Lion"
               ],
               "correct": "Horse"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f66ffbd2-c1a0-4412-a2a4-321d5f35ff73/playlist.m3u8",
               "question": "Which car is often called the first muscle car?",
               "options": [
                  "The Pontiac GTO",
                  "Ford Mustang",
                  "Chevrolet Camaro",
                  "Dodge Charger"
               ],
               "correct": "The Pontiac GTO"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/c042a693-fe64-4b09-a03b-892a407e8414/playlist.m3u8",
               "question": "Which city of India is the Taj Mahal?",
               "options": [
                  "Agra",
                  "Delhi",
                  "Hyderabad",
                  "Panipat"
               ],
               "correct": "Agra"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/dc21562e-6a32-4568-bf6b-e0e2e02d0828/playlist.m3u8",
               "question": "Which continent is the largest?",
               "options": [
                  "Asia",
                  "Antarctica",
                  "North America",
                  "Africa"
               ],
               "correct": "Asia"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/b3cd5fca-2dd8-4b56-9d66-083d84f74230/playlist.m3u8",
               "question": "Which country will host the 2023 cricket world cup?",
               "options": [
                  "India",
                  "Australia",
                  "UK",
                  "USA"
               ],
               "correct": "India"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/457d2d5a-ebdf-4247-ad3a-ea81261443dd/playlist.m3u8",
               "question": "Which desert is the largest in the world?",
               "options": [
                  "The Sahara Desert",
                  "Great Australian Desert",
                  "Arabian Desert",
                  "Kalahari Desert"
               ],
               "correct": "The Sahara Desert"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/18cc671c-eba8-465f-8f44-06eb29a96421/playlist.m3u8",
               "question": "Which element is said to keep bones strong?",
               "options": [
                  "Calcium",
                  "Iron",
                  "Vitamin A",
                  "Vitamin C"
               ],
               "correct": "Calcium"
            }
         ]
      },
      "8": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f6d29a8a-93db-4c80-a64a-0a982003fe18/playlist.m3u8",
               "question": "Which incarnation of the Lord Vishnu was responsible for killing the demon Hiranyaksha?",
               "options": [
                  "Varaha",
                  "Parasurama",
                  "Narasimha",
                  "Krishna"
               ],
               "correct": "Varaha"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f13cd3f1-68e3-42b3-b877-e99b23693893/playlist.m3u8",
               "question": "Which is the hottest planet in our solar system?",
               "options": [
                  "Venus",
                  "Mercury",
                  "Mars",
                  "Saturn"
               ],
               "correct": "Venus"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/e488a47c-d2d7-4b6a-a392-b2f1d9893bfd/playlist.m3u8",
               "question": "Which of the following is an incarnation of Shiva?",
               "options": [
                  "Durvasa",
                  "Krishna",
                  "Kalki",
                  "Parashurama"
               ],
               "correct": "Durvasa"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/a6565d67-0524-4359-91a4-78b722fe9bd5/playlist.m3u8",
               "question": "Which of the Seven Wonders is located in Egypt?",
               "options": [
                  "The Pyramids of Giza",
                  "Taj Mahal",
                  "Leaning Tower Of Pizza",
                  "Statue Of Liberty"
               ],
               "correct": "The Pyramids of Giza"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/635fcdf8-05b9-44a3-bebe-0b8518ee3684/playlist.m3u8",
               "question": "Which railway station did MS Dhoni work at, as a ticket collector?",
               "options": [
                  "Kharagpur",
                  "Kanpur",
                  "Kota",
                  "Lucknow"
               ],
               "correct": "Kharagpur"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/e4d0e319-e3d1-45f3-a3f1-b4359cac1c9a/playlist.m3u8",
               "question": "Which two countries share the longest international border?",
               "options": [
                  "Canada and the USA",
                  "India & Pakistan",
                  "Brazil & Argentina",
                  "Russia & Canada"
               ],
               "correct": "Canada and the USA"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/1e238e91-fcff-469d-8110-e03b2ec8a86f/playlist.m3u8",
               "question": "Which was the first film that Ranbir Kapoor was an AD on?",
               "options": [
                  "Aa Ab Laut Chalen",
                  "Swadesh",
                  "Black",
                  "Dhoom"
               ],
               "correct": "Aa Ab Laut Chalen"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/f65c1f50-8aec-4d60-acd0-9bea8aa7c7d1/playlist.m3u8",
               "question": "Which was the first production house Parineeti Chopra worked with as a PR consultant?",
               "options": [
                  "YRF",
                  "Dharma Productions",
                  "Eros",
                  "UTV"
               ],
               "correct": "YRF"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/61479d39-ba91-4d9a-933b-da6935b1cd5d/playlist.m3u8",
               "question": "Who directed the first ever Indian feature film, Raja Harishchandra?",
               "options": [
                  "Dadasaheb Phalke",
                  "Dadasaheb Torne",
                  "R. Nataraja Mudaliar",
                  "J.C. Daniel Nadar"
               ],
               "correct": "Dadasaheb Phalke"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/0ca81ea7-cd42-414d-861a-544384f50253/playlist.m3u8",
               "question": "Who is known as the father of computers?",
               "options": [
                  "Charles Babbage",
                  "Alan Turing",
                  "Steve Jobs",
                  "Shiva Ayyadurai"
               ],
               "correct": "Charles Babbage"
            }
         ]
      },
      "9": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/909eed71-d7e4-4bbf-93a4-c86e8a54736c/playlist.m3u8",
               "question": "Who is the F1 superstar with most race wins?",
               "options": [
                  "Lewis Hamilton",
                  "Michael Schumacher",
                  "Sebastian Vettel",
                  "Alain Prost"
               ],
               "correct": "Lewis Hamilton"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/c916f774-0ab6-451c-9187-0a759a25fb32/playlist.m3u8",
               "question": "Who is the founder of Ebay?",
               "options": [
                  "Pierre Omidyar",
                  "steve wozniak",
                  "Elon Musk",
                  "Larry Page"
               ],
               "correct": "Pierre Omidyar"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/85e0da62-14b6-450e-8eb1-b65d282d6a49/playlist.m3u8",
               "question": "Who is the freedom fighter who founded the Indian National Army, in 1942?",
               "options": [
                  "Subhash Chandra Bose",
                  "Jawaharlal Nehru",
                  "Bhagat Singh",
                  "Vallabhbhai Patel"
               ],
               "correct": "Subhash Chandra Bose"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/e86dd5aa-bca6-44a0-8b9a-cda3bd1adc20/playlist.m3u8",
               "question": "Who Is the narrator of the Bhagavad Gita?",
               "options": [
                  "Sanjaya",
                  "Krishna",
                  "Bhishma",
                  "Arjun"
               ],
               "correct": "Sanjaya"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/e8c00389-e787-48da-b3e6-cf2894bd726e/playlist.m3u8",
               "question": "Who recomended MS Dhoni for captain?",
               "options": [
                  "Sachin Tendulkar",
                  "Rahul Dravid",
                  "Anil Kumble",
                  "VVS Laxman"
               ],
               "correct": "Sachin Tendulkar"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/bf06cc92-7a48-4b71-bd70-7a80e87140bf/playlist.m3u8",
               "question": "Who was first to take 5 wickets in IPL?",
               "options": [
                  "Sohail Tanvir",
                  "Amit Mishra",
                  "Zaheer Khan",
                  "Malinga"
               ],
               "correct": "Sohail Tanvir"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/87c4b2c8-2a8f-47d1-b8a4-d48269cc1c9c/playlist.m3u8",
               "question": "Who was the director of superhit film Satya?",
               "options": [
                  "Ramgopal Verma",
                  "Sanjay Leela Bhansali",
                  "Ashutosh Gowariker",
                  "Yash Chopra"
               ],
               "correct": "Ramgopal Verma"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/2e83e45c-1191-40e7-b637-d0dd5ccd6b9b/playlist.m3u8",
               "question": "Who was the first batsman in cricket history to be given out by the third umpire?",
               "options": [
                  "Sachin Tendulkar",
                  "Sanath Jayasuriya",
                  "Imran Khan",
                  "Ian Botham"
               ],
               "correct": "Sachin Tendulkar"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/7556a178-d854-4309-8240-0510f3b744df/playlist.m3u8",
               "question": "Who was the first Bollywood superstar selected as a jury member for Cannes film festival?",
               "options": [
                  "Aishwarya Rai",
                  "Amitabh Bachchan",
                  "Sushmita sen",
                  "Shahrukh Khan"
               ],
               "correct": "Aishwarya Rai"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/5b5bdcbb-e5ea-456e-b8b1-eacb7e5341fc/playlist.m3u8",
               "question": "Who was the first ruler to use rockets in warfare?",
               "options": [
                  "Tipu Sultan",
                  "Baber",
                  "Akbar",
                  "Prithviraj"
               ],
               "correct": "Tipu Sultan"
            }
         ]
      },
      "10": {
         "questions": [
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/9f962ddc-9741-4091-b9e1-5454f1c004ce/playlist.m3u8",
               "question": "Who was the general of Alexander the Great whose daughter married Chandragupta Maurya?",
               "options": [
                  "Seleukos Nikator",
                  "Cassander",
                  "Ptolemy",
                  "Hephaestion"
               ],
               "correct": "Seleukos Nikator"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/56ae3cf7-0f59-4588-9db1-1856b4b691f2/playlist.m3u8",
               "question": "Who was the leading lady in the movie Chandni Chowk To China?",
               "options": [
                  "Deepika Padukone",
                  "Katrina Kaif",
                  "Priyanka Chopra",
                  "Aishwarya Rai"
               ],
               "correct": "Deepika Padukone"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/13f0ffdd-2ec7-4f31-b2eb-c4c374407ab9/playlist.m3u8",
               "question": "Who was the legendary WWE star known as the people's champion?",
               "options": [
                  "The Rock",
                  "John Cena",
                  "Hulk Hogan",
                  "The Great Khali"
               ],
               "correct": "The Rock"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/4a0009cf-ebe1-4816-9311-b4ed24835df9/playlist.m3u8",
               "question": "With 26 wickets who was the purple cap holder in IPL 2015?",
               "options": [
                  "Dwayne Bravo",
                  "Dale Steyn",
                  "Malinga",
                  "Amit Mishra"
               ],
               "correct": "Dwayne Bravo"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/3f8f3813-482f-4c19-afbf-558c8c8ba3bf/playlist.m3u8",
               "question": "World famous athlete Usain Bolt was involved in which sport?",
               "options": [
                  "100m sprint",
                  "long Jump",
                  "High Jump",
                  "Swimming"
               ],
               "correct": "100m sprint"
            },
            {
               "video": "https://vz-09c53bdb-c9e.b-cdn.net/52d398c4-8ce1-46e8-8a68-901980f0aaac/playlist.m3u8",
               "question": "Do you know who is MS Dhoni's favourite WWE wrestler?",
               "options": [
                  "Hulk Hogan",
                  "The Rock",
                  "Steve Austin",
                  "The Undertaker"
               ],
               "correct": "Hulk Hogan"
            }
          ]
       },
       "right": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/6c186e8e-03d9-4e30-9822-50a63c7d50e1/playlist.m3u8"
       },
       "sponsor1": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/95f2ef98-4805-4a69-81d0-df1b4d7e1336/playlist.m3u8"
       },
       "sponsor2": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/95f2ef98-4805-4a69-81d0-df1b4d7e1336/playlist.m3u8"
       },
       "sponsor3": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/95f2ef98-4805-4a69-81d0-df1b4d7e1336/playlist.m3u8"
       },
       "won": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/95f2ef98-4805-4a69-81d0-df1b4d7e1336/playlist.m3u8",
            "message": "Winning message",
            "option": "Provide details",
            "link": "https://www.jugnuplaygames.com/contact-8"
       },
       "time": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/31cd4992-185b-4097-96ab-3c196ea6167e/playlist.m3u8",
            "message": "Time up message",
            "option": "Try again"
       },
       "wrong1": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/0c3e4889-971a-41e4-a658-ab88d7e0eec7/playlist.m3u8",
            "message": "Wrong message page 1",
            "option": "Try again"
       },
       "wrong2": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/31cd4992-185b-4097-96ab-3c196ea6167e/playlist.m3u8",
            "message": "Wrong message page 2",
            "option": "Claim gift",
            "link": "https://www.google.com"
       },
       "wrong3": {
            "video": "https://vz-09c53bdb-c9e.b-cdn.net/31cd4992-185b-4097-96ab-3c196ea6167e/playlist.m3u8",
            "message": "Wrong message page 3",
            "option": "Claim gift",
            "link": "https://www.google.com"
       },
       "form": [
            {
                "type": "string",
                "identifier": "name",
                "label": "Full name"
            },
            {
                "type": "email",
                "identifier": "email",
                "label": "Email Address"
            },
            {
                "type": "number",
                "identifier": "mobile",
                "label": "Phone number"
            }
       ]
    }
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
    console.log(dataObj)
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
            <div class="answers">
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
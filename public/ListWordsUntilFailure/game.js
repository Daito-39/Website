const timer = document.getElementById('timer');
const time = document.getElementById('time');
const inputField = document.getElementById('inputField');
const listOfWords = document.getElementById('listOfWords');
const pointCountSpan = document.getElementById('pointCountSpan');

var start = true;
var counter = 60;
var userList = [];
var score = 0;

//timer
function startTheTime() {
    var interval = setInterval(function() {
        counter--;

        if (counter <= 0) {
            clearInterval(interval);
            timer.textContent = "Time is up";
            inputField.disabled = true;
            return;
        } else {
            time.textContent = counter;
            console.log("timer -> " + counter);
        }
    }, 1000);
}

async function checkWord() {
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

    try {
        const response = await fetch(url + inputField.value);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        if (result[0].word == inputField.value) {
            handleResponse();
        }
    } catch(error) {
        console.error(error.message);
        inputField.value = "";
    }
}

function handleResponse() {
    var alreadyEntered = false;

    for(var i = 0; i < userList.length; i++){
        if (inputField.value == userList[i]) {
            alreadyEntered = true;
        };
    }

    if(start) {
        start = false;
        startTheTime();
    }

    if(!alreadyEntered) {
        counter = counter + 3;
        time.textContent = counter;

        score++;
        pointCountSpan.textContent = score;

        userList.push(inputField.value);
        listOfWords.innerText = userList;
    }
    inputField.value = "";
}

inputField.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkWord();
    }
})
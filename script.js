document.addEventListener('DOMContentLoaded', appStart)

const sounds = {
    97: "boom",
    115: "clap",
    100: "hihat",
    102: "kick",
    103: "openhat",
    104: "ride",
    106: "snare",
    107: "tink",
    108: "tom"
}

let channel = []
let isRecording = false
let recStart = null

let channel1 = []
let channel2 = []
let channel3 = []
let channel4 = []

let isRecording1 = false
let isRecording2 = false
let isRecording3 = false
let isRecording4 = false

let rec1 = null
let rec2 = null
let rec3 = null
let rec4 = null

let playAll = document.querySelector('#playAll');
function appStart() {
    window.addEventListener('keypress', playSound)
    
    document.querySelector('#rec1').addEventListener('click',
        (e) => {
            isRecording1 = !isRecording1
            recStart1 = Date.now()
            e.target.innerHTML = isRecording1 ? 'Stop' : 'Rec'
        })
    document.querySelector('#rec2').addEventListener('click',
        (e) => {
            isRecording2 = !isRecording2
            recStart2 = Date.now()
            e.target.innerHTML = isRecording2 ? 'Stop' : 'Rec'
        })
    document.querySelector('#rec3').addEventListener('click',
        (e) => {
            isRecording3 = !isRecording3
            recStart3 = Date.now()
            e.target.innerHTML = isRecording3 ? 'Stop' : 'Rec'
        })
    document.querySelector('#rec4').addEventListener('click',
        (e) => {
            isRecording4 = !isRecording4
            recStart4 = Date.now()
            e.target.innerHTML = isRecording4 ? 'Stop' : 'Rec'
        })


    document.querySelector('#play1').addEventListener('click', function () {
        playMusic(channel1);
    })
    document.querySelector('#play2').addEventListener('click', function () {
        playMusic(channel2);
    })
    document.querySelector('#play3').addEventListener('click', function () {
        playMusic(channel3);
    })
    document.querySelector('#play4').addEventListener('click', function () {
        playMusic(channel4);
    })
}

function playMusic(ch) {
    ch.forEach(sound => {
        setTimeout(
            () => {
                audioDOM = document.querySelector(`#${sound.sound}`)
                audioDOM.currentTime = 0
                audioDOM.play()
            }
            , sound.time
        )
    })
}


function playSound(e) {
    console.log(`klawisz: ${e.keyCode}`)
    let soundName = sounds[e.keyCode];
    document.querySelector("[data-num=" + soundName + "]").classList.add("anim");
    setTimeout(function () {
        document.querySelector("[data-num=" + soundName + "]").classList.remove("anim");
    }, 200);
    audioDOM = document.querySelector(`#${soundName}`)
    audioDOM.currentTime = 0
    audioDOM.play()

    if (isRecording) {
        channel.push({
            sound: soundName,
            time: Date.now() - recStart
        })
        console.log(channel1)
    }

    if (isRecording1) {
        channel1.push({
            sound: soundName,
            time: Date.now() - recStart1
        })
        console.log(channel1)
    }

    if (isRecording2) {
        channel2.push({
            sound: soundName,
            time: Date.now() - recStart2
        })
        console.log(channel2)
    }

    if (isRecording3) {
        channel3.push({
            sound: soundName,
            time: Date.now() - recStart3
        })
        console.log(channel3)
    }

    if (isRecording4) {
        channel4.push({
            sound: soundName,
            time: Date.now() - recStart4
        })
        console.log(channel4)
    }
}

playAll.addEventListener('click', function () {
    playMusic(channel1);
    playMusic(channel2);
    playMusic(channel3);
    playMusic(channel4);
})


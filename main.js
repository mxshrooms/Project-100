speechRecognition = window.webkitSpeechRecognition;
testRecognition = new speechRecognition();

function start() {
    document.getElementById("voiceoutput").innerHTML = "";
    testRecognition.start();
}

testRecognition.onresult = function(event) {
    console.log(event);
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("voiceoutput").innerHTML = content;
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    speakData = "Taking your selfies in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function (){
        imgid="selfie1";
        picture();
        download();
        speakData = "Taking your next selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function (){
        imgid="selfie2";
        picture();
        download();
        speakData = "Taking your last selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function (){
        imgid="selfie3";
        picture();
        download();
    }, 15000);
}

Webcam.set({
    width: 400, height: 480, image_format: "png", png_quality: 100
});

camera = document.getElementById("camera");

function picture() {
    Webcam.snap(function (store) {
        if(imgid == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="myselfie" src="'+store+'">';
        }
        if(imgid == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="myselfie2" src="'+store+'">';
        }
        if(imgid == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="myselfie3" src="'+store+'">';
        }
    });
}

function download(){
    imgurl = document.getElementById("link");
    storepic = document.getElementById("myselfie").src;
    imgurl.href=storepic;
    imgurl.click();
}
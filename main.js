var recognition=new window.webkitSpeechRecognition();
function start_hear(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function run(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        
    TextToSpeech();
    
    }
}

function TextToSpeech(){
    speak_data="Taking your selfie in 5 seconds";
    speak_audio=new SpeechSynthesisUtterance(speak_data);
    window.speechSynthesis.speak(speak_audio);
    Webcam.attach("#camera");
    setTimeout(function(){
        takePic()
        download()
    },5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
});
function takePic(){
    Webcam.snap(function(cam_pic){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+cam_pic+'">'
    });
}
function download(){
    download_link=document.getElementById("pic_selfie");
    download_link.href=document.getElementById("selfie").src;
    download_link.click();
}
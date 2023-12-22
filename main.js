Webcam.set({
    width:500,
    hieght:500,
    image_format:'png',
    png_quality:90
});
    camera= document.getElementById("camera")
Webcam.attach('#camera');

function  take_snapshot()
{
    Webcam.snap(function(data_Uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'
    })
}

console.log('ml5 version:', m15.version);
classifier = ml5.imageClassifier('https://teachablemachine*://teachablemachine.withgoogle.com/models/3WrTruKLM/model.json',modelLoaded())
   
function modelLoaded() {
    console.log("Model Loaded!");
}

function check()
{
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult())
}

function gotResult(error, results){
    if (error) {
        console.error(error);
    }else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(2);
    }
}
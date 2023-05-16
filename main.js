function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xM3u2jpyk/', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
     console.log(results);
     random_number_r = Math.floor(Math.random() * 255) + 1;
     random_number_g = Math.floor(Math.random() * 255) + 1;
     random_number_b = Math.floor(Math.random() * 255) + 1;
   
     document.getElementById("result_label").innerHTML = 'I hear with my little ear👂 - '+ results[0].label;
     document.getElementById("result_confidence").innerHTML = 'How trustworthy am I? | The Gameshow - ' (results[0].confidence*100)toFixed(2)+"%";
     document.getElementById("result_label").style.color = "rgb("+random_number_r+random_number_g+random_number_b")";
     document.getElementById("result_confidence").style.color = "rgb("+random_number_r+random_number_g+random_number_b")";

     img = document.getElementById('alien1');
     img1 = document.getElementById('alien2');
     img2 = document.getElementById('alien3');
     img3 = document.getElementById('alien4');

 if (results[0].label == "Bark") {
      img.src = '31210d45-846b-4909-b42c-51be91d89f3a-1657862662624.webp';
      img1.src = 'OIP (1).jpeg';
      img2.src = 'tenor (1).gif';
      img3.src = 'af729d9799bf43b8eb5b072a930b7979.jpg';
     } else if (results[0].label == "Roar") {
        img.src = '31210d45-846b-4909-b42c-51be91d89f3a-1657862662624.webp';
        img1.src = 'lion-roar-28.gif';
        img2.src = 'OIP (3).jpeg';
        img3.src = 'af729d9799bf43b8eb5b072a930b7979.jpg';
     } else if (results[0].label == "Miaow"){
      img.src = '31210d45-846b-4909-b42c-51be91d89f3a-1657862662624.webp';
      img1.src = 'OIP (1).jpeg';
      img2.src = 'OIP (3).jpeg';
      img3.src = 'hamster-meme.gif';
     }else{
      img.src = 'tenor.gif';
        img1.src = 'OIP (1).jpeg';
        img2.src = 'OIP (3).jpeg';
        img3.src = 'af729d9799bf43b8eb5b072a930b7979.jpg';
     } 
     }
   }
}
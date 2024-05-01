function meanPercent(){
    var mean = 0;

    var num1 = parseFloat(document.getElementById('g1a').value);
    var den1 = parseFloat(document.getElementById('g1b').value);
    var num2 = parseFloat(document.getElementById('g2a').value);
    var den2 = parseFloat(document.getElementById('g2b').value);
    var num3 = parseFloat(document.getElementById('g3a').value);
    var den3 = parseFloat(document.getElementById('g3b').value);
    var num4 = parseFloat(document.getElementById('g4a').value);
    var den4 = parseFloat(document.getElementById('g4b').value);

    var result = num1/den1 + num2/den2 + num3/den3 + num4/den4;
    mean = Math.round(((result/4)*100)*100)/100;
    document.getElementById('result').innerHTML = "The average mean : " + mean + "%";  

}
 function weightedPercent()
 {
    var num1 = parseFloat(document.getElementById('g1a').value);
    var den1 = parseFloat(document.getElementById('g1b').value);
    var num2 = parseFloat(document.getElementById('g2a').value);
    var den2 = parseFloat(document.getElementById('g2b').value);
    var num3 = parseFloat(document.getElementById('g3a').value);
    var den3 = parseFloat(document.getElementById('g3b').value);
    var num4 = parseFloat(document.getElementById('g4a').value);
    var den4 = parseFloat(document.getElementById('g4b').value);

    var weight1 = parseFloat(document.getElementById('wt1').value);
    var weight2 = parseFloat(document.getElementById('wt2').value);
    var weight3 = parseFloat(document.getElementById('wt3').value);
    var weight4 = parseFloat(document.getElementById('wt4').value);
    
   var result = (num1/den1)*weight1 + (num2/den2)*weight2 + (num3/den3)*weight3 + (num4/den4)*weight4;

    var realResult = Math.round(result);
    document.getElementById('result').innerHTML = "The average weighted : " + realResult + "%";
 }
 function percent()
 {
        var num1 = parseFloat(document.getElementById('g1a').value);
        var den1 = parseFloat(document.getElementById('g1b').value);
        var num2 = parseFloat(document.getElementById('g2a').value);
        var den2 = parseFloat(document.getElementById('g2b').value);
        var num3 = parseFloat(document.getElementById('g3a').value);
        var den3 = parseFloat(document.getElementById('g3b').value);
        var num4 = parseFloat(document.getElementById('g4a').value);
        var den4 = parseFloat(document.getElementById('g4b').value);
        document.getElementById('p1').innerHTML = Math.round(((num1/den1)*100)*100)/100 + "%";
        document.getElementById('l1').innerHTML = letterGrade((num1/den1)*100); 
        document.getElementById('p2').innerHTML = Math.round(((num2/den2)*100)*100)/100 + "%";
        document.getElementById('l2').innerHTML = letterGrade((num2/den2)*100);
        document.getElementById('p3').innerHTML = Math.round(((num3/den3)*100)*100)/100 + "%";
        document.getElementById('l3').innerHTML = letterGrade((num3/den3)*100); 
        document.getElementById('p4').innerHTML =  Math.round(((num4/den4)*100)*100)/100 + "%";
        document.getElementById('l4').innerHTML =  letterGrade((num4/den4)*100);
 }

 function letterGrade(x)
 {
     if (x >= 95 && x <= 100){
         return "A+";
     }
     else if (x >= 90 && x < 95){
        return "A";
     }
     else if (x >= 85 && x < 90){
        return "A-";
     }
     else if (x >= 80 && x < 85){
        return "B+";
     }
     else if (x >= 75 && x < 80){
        return "B";
     }
     else if (x >= 70 && x < 75){
        return "B-";
     }
     else if (x >= 65 && x < 70){
        return "C+";
     }
     else if (x >= 60 && x < 65){
        return "C+";
     }
     else if (x >= 55 && x < 60){
        return "C-";
     }
     else if (x >= 50 && x < 55){
        return "D";
     }
     else if (x < 50) {
        return "F";
     }
     else{
         return;
     }
 }
 

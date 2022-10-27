function Marks() {
  this.claculate = function () {
      // var name = parseInt(document.getElementById("name").value);
      var umark = parseInt(document.getElementById("umark").value);
      var emark = parseInt(document.getElementById("emark").value);
      var chemmark = parseInt(document.getElementById("chemistrymark").value);
      var mathmark = parseInt(document.getElementById("mathsmark").value);
      var scimark = parseInt(document.getElementById("sciencemark").value);
  
      if (
        umark > 100 ||
        emark > 100 ||
        chemmark > 100 ||
        mathmark > 100 ||
        scimark > 100
      ) {
        alert("Please Enter A Correct Number");
      } else {
        var obtain = umark + emark + chemmark + mathmark + scimark;
        var obtainresult = document.getElementById("obtainedmarks");
        var percentageval = (obtain / 500) * 100;
        obtainresult.innerHTML = obtain;
        var percentage = (document.getElementById("percentage").innerHTML =
          percentageval + "%");
        console.log(percentageval);
        console.log(percentage);
        if (obtain === 500) {
          document.getElementById("remarks").innerHTML =
            "<span style = 'color : yellow;'>First</span>";
        } else if (
          umark > 60 ||
          emark > 60 ||
          chemmark > 60 ||
          mathmark > 60 ||
          scimark > 60
        ) {
          document.getElementById("remarks").innerHTML =
            "<span style = 'color : green;'>Pass</span>";
        } else {
          document.getElementById("remarks").innerHTML =
            "<span style = 'color : red;'>Fail</span>";
        }
      }
    
  } 
}

Marks();
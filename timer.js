function StartTimer(){
// Set the date we're counting down to
let timeObject = new Date();
const maxtime = 30 * 60 * 1000;
const mintime = 25 * 60 * 1000;

MaxcountDown = new Date(timeObject.getTime() + maxtime).getTime();
MincountDown = new Date(timeObject.getTime() + mintime).getTime();
localStorage['MaxcountDown'] = MaxcountDown;
localStorage['MincountDown'] = MincountDown;
UpdateTimer()
}

function PlanTimer(){
  // Set the date we're counting down to
  let timeObject = new Date();
  const Plantime = 10 * 60 * 1000;
  
  PlancountDown = new Date(timeObject.getTime() + Plantime).getTime();
  localStorage['PlancountDown'] = PlancountDown;
  UpdateTimer()
  }

function UpdateTimer(){
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    // Reading Local Storage Every Second Is a great idea :D
    var Maxdistance = localStorage['MaxcountDown'] - now;
    var Mindistance = localStorage['MincountDown'] - now;
    var Plandistance = localStorage['PlancountDown'] - now;
      
    // Time calculations for days, hours, minutes and seconds
    var Maxminutes = Math.floor((Maxdistance % (1000 * 60 * 60)) / (1000 * 60));
    var Maxseconds = Math.floor((Maxdistance % (1000 * 60)) / 1000);
  
    var Minminutes = Math.floor((Mindistance % (1000 * 60 * 60)) / (1000 * 60));
    var Minseconds = Math.floor((Mindistance % (1000 * 60)) / 1000);
  
    var Planminutes = Math.floor((Plandistance % (1000 * 60 * 60)) / (1000 * 60));
    var Planseconds = Math.floor((Plandistance % (1000 * 60)) / 1000);
  
    // Output the result in an element with id="demo"
    document.getElementById("MaxTime").innerHTML = Maxminutes + "m " + Maxseconds + "s ";
    document.getElementById("MinTime").innerHTML = Minminutes + "m " + Minseconds + "s ";
    document.getElementById("PlanTime").innerHTML = Planminutes + "m " + Planseconds + "s ";
      
    // If the count down is over, write some text 
    if (Maxdistance < 0) {
      document.getElementById("MaxTime").innerHTML = "Reached";
    }
    if (Mindistance < 0) {
      document.getElementById("MinTime").innerHTML = "Reached";
    }
    if (Plandistance < 0) {
      document.getElementById("PlanTime").innerHTML = "Reached";
    }
  
}

// Update the count down every 1 second
var x = setInterval(function() {
  UpdateTimer()
}, 1000);


function PlanAddTime(Amount){
  if (Number(localStorage['PlancountDown'])===0) {
      console.log("Timer is " + Number(localStorage['PlancountDown']) + " setting time to now plus " + Amount)
      localStorage['PlancountDown'] = new Date().getTime() + Amount * 60 * 1000
      UpdateTimer()
  }
  else{
  localStorage['PlancountDown'] = Number(localStorage['PlancountDown']) + Amount * 60 * 1000
  UpdateTimer()
  }
}

function ResetTimer(name){
  localStorage[name] = 0
  UpdateTimer()
}
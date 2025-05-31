const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');
 const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

const updateCountDown = (deadline) => {
  const currentTime = new Date ();
  const timeDifference = deadline - currentTime; // milliseconds
  
    if (timeDifference <= 0) {
    days.textContent = "00";
    hours.textContent = "00";
    mins.textContent = "00";
    secs.textContent = "00";
    return; // Stop updating when countdown ends
  }
  
  //calculate days, hours, mins, secs from timeDifference
  let calSecs = Math.floor(timeDifference/1000) % 60;
  let calcMins = Math.floor(timeDifference/1000/60) % 60;
  let calcHours = Math.floor(timeDifference/1000/60/60) % 24;
  let calcDays = Math.floor(timeDifference/1000/60/60/24);
  
  days.textContent = formatTime(calcDays);
  mins.textContent = formatTime(calcMins);
  hours.textContent = formatTime(calcHours);
  secs.textContent = formatTime (calSecs);
 

  };


const deadline = new Date('2025-03-19T23:59:59');

  setInterval(() => updateCountDown(deadline),1000);
  

updateCountDown(deadline);


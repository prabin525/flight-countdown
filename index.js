function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var daysshow = document.getElementById('daysshow');
  var hoursshow = document.getElementById('hoursshow');
  var minutesshow = document.getElementById('minutesshow');
  var secondsshow = document.getElementById('secondsshow');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var c = document.getElementById('clockdiv');
      c.style.display = "none";
      var text = document.getElementById('message');
      var title = document.getElementById('title');
      text.innerHTML = "Nepal is where I be!!!"
      title.style.display = "none";
    }
    if (t.days <= 0) {
      daysshow.style.display = "none";
      daysSpan.style.display = "none";
    }
    if (t.days <= 0 && t.hours <= 0) {
      hoursshow.style.display = "none";
      daysSpan.style.display = "none";
    }
    if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0) {
      minutesshow.style.display = "none";
      daysSpan.style.display = "none";
    }
    if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
      secondsshow.style.dispaly = "none";
      daysSpan.style.display = "none";
    }

  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function t_initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');
  var daysshow = document.getElementById('t_daysshow');
  var hoursshow = document.getElementById('t_hoursshow');
  var minutesshow = document.getElementById('t_minutesshow');
  var secondsshow = document.getElementById('t_secondsshow');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var c = document.getElementById('clockdiv');
      c.style.display = "none";
      var text = document.getElementById('message');
      var title = document.getElementById('title');
      text.innerHTML = "Nepal is where I be!!!"
      title.style.display = "none";
    }
    if (t.days <= 0) {
      daysshow.style.display = "none";
      daysSpan.style.display = "none";
    }
    if (t.days <= 0 && t.hours <= 0) {
      hoursshow.style.display = "none";
      daysSpan.style.display = "none";
    }
    if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0) {
      minutesshow.style.display = "none";
      daysSpan.style.display = "none";
    }
    if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) {
      secondsshow.style.dispaly = "none";
      daysSpan.style.display = "none";
    }

  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date("May 21, 2023 11:10:00");
initializeClock('clockdiv', deadline);


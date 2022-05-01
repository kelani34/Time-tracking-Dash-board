const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const workTiming = document.getElementById('work-timing');
const lastWorkTiming = document.getElementById('work-lst-tmg');
const playTiming = document.getElementById('play-timing');
const lastPlayTiming = document.getElementById('play-lst-tmg');
const studyTiming = document.getElementById('study-timing');
const lastStudyTiming = document.getElementById('study-lst-tmg');
const exerciseTiming = document.getElementById('exercise-timing');
const lastExerciseTiming = document.getElementById('exercise-lst-tmg');
const selfCareTiming = document.getElementById('self-care-timing');
const lastSlfCTiming = document.getElementById('self-care-lst-tmg');
const socialTiming = document.getElementById('social-timing');
const lastSocialTiming = document.getElementById('social-lst-tmg');

const Work = {
    "title": "Work",
    "timeframes": {
        "daily": {
            "current": 5,
            "previous": 7
        },
        "weekly": {
            "current": 32,
            "previous": 36
        },
        "monthly": {
            "current": 103,
            "previous": 128
        }
    }
}
const play = {
    "title": "Play",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 2
        },
        "weekly": {
            "current": 10,
            "previous": 8
        },
        "monthly": {
            "current": 23,
            "previous": 29
        }
    }
}
const study = {
    "title": "Study",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 7
        },
        "monthly": {
            "current": 13,
            "previous": 19
        }
    }
}
const excer = {
    "title": "Exercise",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 1
        },
        "weekly": {
            "current": 4,
            "previous": 5
        },
        "monthly": {
            "current": 11,
            "previous": 18
        }
    }
}
const social = {
    "title": "Social",
    "timeframes": {
        "daily": {
            "current": 1,
            "previous": 3
        },
        "weekly": {
            "current": 5,
            "previous": 10
        },
        "monthly": {
            "current": 21,
            "previous": 23
        }
    }
}
const slfCare = {
    "title": "Self Care",
    "timeframes": {
        "daily": {
            "current": 0,
            "previous": 1
        },
        "weekly": {
            "current": 2,
            "previous": 2
        },
        "monthly": {
            "current": 7,
            "previous": 11
        }
    }
}


// Add Event listeners

daily.addEventListener('click', showDaily);
weekly.addEventListener('click', showWeekly);
monthly.addEventListener('click', showMonthly);

// Functions 

function controlOpacity() {
    daily.style.opacity = "0.5";
    weekly.style.opacity = "0.5";
    monthly.style.opacity = "0.5";

}

function showDaily() {
    controlOpacity();
    daily.style.opacity = "1";
    console.log(workTiming);
    console.log(lastWorkTiming);
    console.log(playTiming);
    console.log(lastPlayTiming);
    console.log(studyTiming);
    console.log(lastStudyTiming);
    console.log(exerciseTiming);
    console.log(lastExerciseTiming);
    console.log(socialTiming);
    console.log(lastSocialTiming);
    console.log(selfCareTiming);
    console.log(lastSlfCTiming);


    workTiming.innerText = Work.timeframes.daily.current;
    lastWorkTiming.innerText = Work.timeframes.daily.previous;

    playTiming.innerText = play.timeframes.daily.current;
    lastPlayTiming.innerText = play.timeframes.daily.previous;

    studyTiming.innerText = study.timeframes.daily.current;
    lastStudyTiming.innerText = study.timeframes.daily.previous;

    exerciseTiming.innerText = excer.timeframes.daily.current;
    lastExerciseTiming.innerText = excer.timeframes.daily.previous;

    socialTiming.innerText = social.timeframes.daily.current;
    lastSocialTiming.innerText = social.timeframes.daily.previous;

    selfCareTiming.innerText = slfCare.timeframes.daily.current;
    lastSlfCTiming.innerText = slfCare.timeframes.daily.previous;

}
function showWeekly() {
    controlOpacity();
    weekly.style.opacity = "1";

    workTiming.innerText = Work.timeframes.weekly.current;
    lastWorkTiming.innerText = Work.timeframes.weekly.previous;

    playTiming.innerText = play.timeframes.weekly.current;
    lastPlayTiming.innerText = play.timeframes.weekly.previous;

    studyTiming.innerText = study.timeframes.weekly.current;
    lastStudyTiming.innerText = study.timeframes.weekly.previous;

    exerciseTiming.innerText = excer.timeframes.weekly.current;
    lastExerciseTiming.innerText = excer.timeframes.weekly.previous;

    socialTiming.innerText = social.timeframes.weekly.current;
    lastSocialTiming.innerText = social.timeframes.weekly.previous;

    selfCareTiming.innerText = slfCare.timeframes.weekly.current;
    lastSlfCTiming.innerText = slfCare.timeframes.weekly.previous;

}
function showMonthly() {
    controlOpacity();
    monthly.style.opacity = "1";

    workTiming.innerText = Work.timeframes.monthly.current;
    lastWorkTiming.innerText = Work.timeframes.monthly.previous;

    playTiming.innerText = play.timeframes.monthly.current;
    lastPlayTiming.innerText = play.timeframes.monthly.previous;

    studyTiming.innerText = study.timeframes.monthly.current;
    lastStudyTiming.innerText = study.timeframes.monthly.previous;

    exerciseTiming.innerText = excer.timeframes.monthly.current;
    lastExerciseTiming.innerText = excer.timeframes.monthly.previous;

    socialTiming.innerText = social.timeframes.monthly.current;
    lastSocialTiming.innerText = social.timeframes.monthly.previous;

    selfCareTiming.innerText = slfCare.timeframes.monthly.current;
    lastSlfCTiming.innerText = slfCare.timeframes.monthly.previous;

}

daily.click();
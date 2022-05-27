
var countDownDate1 = new Date("May 07, 2020 00:00:00").getTime();
var countDownDate2 = new Date("Jun 17, 2020 00:00:00").getTime();
var countDownDate3 = new Date("Feb 26, 2020 00:00:00").getTime();
var countDownDate4 = new Date("Feb 21, 2020 00:00:00").getTime();

var timer1= document.getElementById("timer1")
var timer2= document.getElementById("timer2")
var timer3= document.getElementById("timer3")
var timer4= document.getElementById("timer4")

function countdown(finish_date, timer){

    var x = setInterval(function() {

        var now = new Date().getTime();

        var distance = finish_date - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = days + "<span style='font-weight:normal'>d</span> " + hours + "h " + minutes + "m " + seconds + "s "+"left";


                if (distance < 0) {
                    clearInterval(x);
                    timer.innerHTML = "You missed the festival this year";
                    }
                    }, 1000);
}

countdown(countDownDate1, timer1)
countdown(countDownDate2, timer2)
countdown(countDownDate3, timer3)
countdown(countDownDate4, timer4)
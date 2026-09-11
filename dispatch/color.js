let color = {
    "%Bold%": "[1;2m",
    "%Line%": "[4;2m",
    "%Reset%": "[0;2m",
    "%FGGrey%": "[2;30m",
    "%FGRed%": "[2;31m",
    "%FGGreen%": "[2;32m",
    "%FGGold%": "[2;33m",
    "%FGBlue%": "[2;34m",
    "%FGPink%": "[2;35m",
    "%FGTeal%": "[2;36m",
    "%FGWhite%": "[2;37m",
    "%BGBlue%": "[2;40m",
    "%BGOrange%": "[2;41m",
    "%BGGrey40%": "[2;42m",
    "%BGGrey45%": "[2;43m",
    "%BGGrey55%": "[2;44m",
    "%BGPurple%": "[2;45m",
    "%BGGrey60%": "[2;46m",
    "%BGWhite%": "[2;47m",

    "%Count%" : function getcount() {return Number(localStorage['count'])},
};

let time = {
    "%numyear%" : function numyear() {return new Date().getFullYear()},
    "%nummonth%" : function nummonth() {return new Date().getMonth() + 1},
    "%numdate%" : function numdate() {if (new Date().getDate() > 9) {return `${new Date().getDate()}`;} else {return "0" + `${new Date().getDate()}`;}},
    
    "%stxtmonth%" : function stxtmonth() {return new Date().toLocaleString('default', { month: 'short' })},
    "%stxtday%" : function stxtday() {return new Date().toLocaleString('default', { weekday: 'short' })},
    "%ltxtmonth%" : function ltxtmonth() {return new Date().toLocaleString('default', { month: 'long' })},
    "%ltxtday%" : function ltxtday() {return new Date().toLocaleString('default', { weekday: 'long' })},
    
    "%hour%" : function hour(){if (new Date().getHours() > 9) {return `${new Date().getHours()}`;} else {return "0" + `${new Date().getHours()}`;}},
    
    
    
    "%hour12%" : function hour12(){return ((new Date().getHours() % 12 || 12) < 10 ? '0' : '') + (new Date().getHours() % 12 || 12);},
    
    "%min%" : function min(){if (new Date().getMinutes() > 9) {return `${new Date().getMinutes()}`;} else {return "0" + `${new Date().getMinutes()}`;}},
    
    "%campm%" : function AMPM() {return new Date().getHours() < 12 ? "AM" : "PM";},
    "%ampm%" : function ampm() {return new Date().getHours() < 12 ? "am" : "pm";}
    }

function swap(input, swaps) {
    for (let [oldStr, newStr] of Object.entries(swaps)) {
        let regex = new RegExp(oldStr, "ig");
        var input = input.replace(regex, newStr);
    }
    return input;
}

if (isNaN(localStorage['count'])){let num = 0;localStorage['count'] = num;}
function count(){if (isNaN(localStorage['count'])){let num = 0;localStorage['count'] = num;}localStorage['count'] = Number(localStorage['count']) + 1;return Number(localStorage['count'])}
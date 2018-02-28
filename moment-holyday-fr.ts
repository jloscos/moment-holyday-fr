import * as moment from "moment";

// source : http://techneilogy.blogspot.fr/2012/02/couple-of-years-ago-i-posted-source.html
moment.fn["easter"] = function () {
    const year = this.year();
    let a = year % 19;
    let b = Math.floor(year / 100);
    let c = year % 100;
    let d = Math.floor(b / 4);
    let e = b % 4;
    let f = Math.floor((b + 8) / 25);
    let g = Math.floor((b - f + 1) / 3);
    let h = (19 * a + b - d - g + 15) % 30;
    let i = Math.floor(c / 4);
    let k = c % 4;
    let l = (32 + 2 * e + 2 * i - h - k) % 7;
    let m = Math.floor((a + 11 * h + 22 * l) / 451);
    let n0 = (h + l + 7 * m + 114);
    let n = Math.floor(n0 / 31) - 1;
    let p = n0 % 31 + 1;
    return moment().set({year: year, month: n, date: p});
}

moment.fn["jourDeLan"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 0, date: 1});
}


moment.fn["lundiDePaque"] = function() {
    return this.easter().add(1, "day");
}

moment.fn["feteDuTravail"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 4, date: 1});
}
moment.fn["victoire1945"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 4, date: 8});
}


moment.fn["ascension"] = function () {
    return this.easter().add(39, "days");
}

moment.fn["pentecote"] = function () {
    return this.easter().add(50, "days");
}
moment.fn["feteNationale"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 6, date: 14});
}
moment.fn["assomption"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 7, date: 15});
}
moment.fn["toussain"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 10, date: 1});
}
moment.fn["armistice"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 10, date: 11});
}

moment.fn["noel"] = function() {
    let date = moment();
    return date.set({year: this.year(), month: 11, date: 25});
}




moment.fn["isHolyday"] = function(){
    return this.getHolyday() !== undefined;
}

moment.fn["getHolyday"] = function() {
    for (const k in holydayList)
        if (holydayList[k].apply(this).toDateOnly().isSame(this.toDateOnly()))
            return k;
}

moment.fn["getHolydayList"] = function (){
    return Object.keys(holydayList).map(k => ({name: k, date: holydayList[k].apply(this)}));
}
moment.fn["toDateOnly"] = function() {
    let m = this as moment.Moment;
    return m.hour(0).minute(0).second(0).millisecond(0);
}

const holydayList = {
    "Jour de l'an": moment.fn["jourDeLan"],
    "Lundi de pâques": moment.fn["lundiDePaque"],
    "Fête du travail": moment.fn["feteDuTravail"],
    "Victoire 1945": moment.fn["victoire1945"],
    "L'ascension": moment.fn["ascension"],
    "Pentecote": moment.fn["pentecote"],
    "Fête Nationale": moment.fn["feteNationale"],
    "l'Assomption": moment.fn["assomption"],
    "Toussain": moment.fn["toussain"],
    "Armistice": moment.fn["armistice"],
    "Noel": moment.fn["noel"],
}

declare module 'moment' {
    export interface Moment {
        isHolyday(): boolean;
        getHolydayList(): {name: string, date: moment.Moment}[];
        getHolyday(): string;
        toDateOnly(): moment.Moment;
    }
}

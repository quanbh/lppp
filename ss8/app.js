///// khai báo một đối tượng date mới

// let takeDate0 = newDate();

/// chúng ta có thể truywwfn giá trị khởi tạo vào như: date string number
// let takeDate1 = new Date();
// let takeDate2 = new Date(value);
// let takeDate3 = new Date(dataString);
// let takeDate4 = new Date(year, month, day);
// let takeDate5 = new Date(year, month, day, hours, minutes, seconds, miliseconds)

let today = new Date();
console.log("today:",today);

let birthDay = new Date('February 4,2009 05:00:00')
console.log("birthday:", birthDay);

let birthDay1 = new Date('2009-04-02T05:00:00')
console.log("birthday:", birthDay1);

let birthDay2 = new Date('2009.04.02')
console.log("birthday:", birthDay2);

let shortDate1 = new Date('03-03-2024')
console.log(shortDate1);

let shortDate2 = new Date('03/03/2024')
console.log(shortDate2);

let shortDate3 = new Date('2024,03,03')
console.log(shortDate3);

let shortDate4 = new Date('2024-03-03')
console.log(shortDate4);

////tính số ngày giữa 2 ngày


let date1 = new Date("2024-03-22")
let date2 = new Date("2024-04-22")
let difference_time = date2.getTime() - date1.getTime()
console.log("difference_time",difference_time);
let difference_day = difference_time/(1000*3600 *24)
console.log("số ngày giữa 2 ngày",difference_day);


////kiểm tra năm nhuận

function isLeapYear(year){
    return(year % 4 ==0 && year %100 !==0) || (year % 400 ==0)
}

console.log(isLeapYear(2024));
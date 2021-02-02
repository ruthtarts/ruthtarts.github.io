let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let today = new Date();
let dayOfWeek = today.getDay();
let date = daylist[dayOfWeek] + ", " + today.getDate() + " " + monthlist[today.getMonth()] + " " + today.getFullYear();


document.write(date);
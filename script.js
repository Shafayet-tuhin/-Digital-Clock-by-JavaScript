function digitalClock(){
let date = new Date() ; 
let hour = date.getHours() ; 
let miniute = date.getMinutes() ; 
let seconds = date.getSeconds() ; 
let timeFormat = "AM" ; 

if ( hour == 0 ){
 hour = 12 ; 
}
else if ( hour  > 12 ){
    hour -= 12 ; 
    timeFormat = "PM" ; 
}


hour = hour < 10 ? '0' + hour : hour ; 
miniute =miniute < 10 ? '0' + miniute : miniute ;
seconds = seconds < 10 ? '0' + seconds : seconds ; 
 
let time = `${hour} : ${miniute} : ${seconds}` ; 

document.getElementById('time').innerHTML = time ;
document.querySelector('small').innerHTML = timeFormat ;  

}
       
setInterval(digitalClock) ; 

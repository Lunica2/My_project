const timeEL = document.getElementById("time");

function getCurrenttime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEL.innerHTML=`${hours} : 
    ${minutes <10 ? `0${minutes}`: minutes} :
    ${seconds <10 ? `0${seconds}`: seconds}`
}
setInterval(getCurrenttime,1000)
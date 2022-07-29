function getCurrentTime() {
    const dateNow = new Date();
    const hours = dateNow.getHours().toString().padStart(2, "0");
    const minutes = dateNow.getMinutes().toString().padStart(2, "0");
    const seconds = dateNow.getSeconds().toString().padStart(2, "0");
    return `${hours}${minutes}${seconds}`;
} 

function changeTimeToBinary(timeString) {
    return timeString.split("").map((time) => parseInt(time, 10).toString(2).padStart(4, "0"));
}

function actionBinaryView(){
    const binaryTime = changeTimeToBinary(getCurrentTime());
    for(let i=0;i<binaryTime.length;i++){
        const temp = binaryTime[i].split("");
        for(let j=0;j< temp.length;j++){
            let elem = document.getElementById(`col${i+1}row${j+1}`);
            if (temp[j] === '1'){
                elem.classList.add("work-circle");
            }else{
                elem.classList.remove("work-circle");
            }
        }
    }
   
}
setInterval(function () {
    actionBinaryView();
  },1000);
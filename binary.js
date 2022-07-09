function getCurrentTime() {
    const dateNow = new Date();
    const hours = dateNow.getHours().toString().padStart(2, "0");
    const minutes = dateNow.getMinutes().toString().padStart(2, "0");
    const seconds = dateNow.getSeconds().toString().padStart(2, "0");
    return `${hours}${minutes}${seconds}`;
}

function changeTimeToBinary(timeString) {
    const binaryArr = timeString.split("").map((time) => parseInt(time, 10).toString(2).padStart(4, "0"));
    return binaryArr;
}

function actionBinaryView(){
    const binaryTime = changeTimeToBinary(getCurrentTime());
    for(let i=0;i<6;i++){
        const temp = binaryTime[i].split("");
        for(let j=0;j<4;j++){
            let elem = document.getElementById(`col${i+1}row${j+1}`);
            if (temp[j] == 1){
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
function getCurrentTime() {
    const date_now = new Date();
    const hours = date_now.getHours().toString().padStart(2, "0");
    const minutes = date_now.getMinutes().toString().padStart(2, "0");
    const seconds = date_now.getSeconds().toString().padStart(2, "0");
    return `${hours}${minutes}${seconds}`;
}

function changeTimeToBinary(timeString) {
    binaryArr =  timeString.split("")
    return binaryArr.map((num) => parseInt(num, 10).toString(2).padStart(4, '0'));;
}

// console.log(changeTimeToBinary(getCurrentTime()));

function actionBinaryView(){
    const binaryTime = changeTimeToBinary(getCurrentTime());
    for(let i=0;i<binaryTime.length;i++){
        const temp = binaryTime[i].split("");
        for(let j=0;j<4;j++){
            let elem = document.getElementById("col"+i+"row2"+j);
            // console.log("i = "+i+"j = "+j);
            elem.classList.add("work-circle");
            elem.classList.add("work-circle");
            // if (temp == 1){
            //     elem.classList.add("work-circle");
            // }else{
            //     elem.classList.remove("work-circle");
            // }
        }
    }
   
}
setInterval(function () {
    actionBinaryView();
  },1000);
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

console.log(changeTimeToBinary(getCurrentTime()));
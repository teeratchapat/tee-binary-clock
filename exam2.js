function check(arrNum){
    let count = 0
    for(let i=0;i<arrNum.length;i++){
        let temp = 0
        let num = 0
        for(let j=0;j<arrNum.length;j++){
            if(arrNum[j]<arrNum[j+1]){
                temp = arrNum[j]
                arrNum[j] = arrNum[j+1]
                arrNum[j+1] = temp
                // console.log(arrNum[j]+"----SWAP-----"+arrNum[j+1])
            }else if(arrNum[j]>=arrNum[j+1]){
                // console.log(arrNum[j]+"work"+arrNum[j+1])
                num += 1
            }
            count += 1
        }
        if(num==(arrNum.length-1)){
            break
        }
    }
    console.log("ArrNum = ",arrNum," count = "+count)
}

check([
    1,    2,      3,  5,
    8,   23,     32, 45,
   56,   56,     72, 78,
   80, 8888, 999999
 ])
check([
        1,    2,      3,  5,
        8,   23,     32, 45,
       56,   0,     72, 78,
       80, 8888, 999999
     ])
check([1,    3,      2,  5 ])
check([1,2,7,3,5])
    
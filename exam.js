function swap(x,y) {
    var b = x;
    // console.log("B = "+b)
    x = y;
    y = b;
    return {x,y};
}


function sortNum(numArr){
    console.log(numArr)
    let k=numArr.length
    let check = true
    let count = 0

    for(let i=0;i<numArr.length;i++){
        for(let j=k;j>0;j--){
            let box = 0
            if(numArr[j]<numArr[j-1])
            {
                // console.log(numArr[j]+" ++++ "+numArr[j-1])
                
                box = numArr[j]
                numArr[j] = numArr[j-1]
                numArr[j-1] = box
                // console.log(numArr[j]+" ---- "+numArr[j-1])
                // console.log("")
            }
            count += 1
            // console.log("----------- end loop k")
        }
        // console.log("----------- end loop i")
        // console.log("k = "+k)
        console.log(numArr)
    }
    console.log("count = ",count)

}

// sortNum([23,78,45,8,56,32])
// sortNum([23,5,78,999999,2,1,3,45,56,8,72,80,56,32,8888])

// console.log(swap(5,6))

function check(arrNum){
    let temp_num = 0
    let check = false
    console.log("StartArr =", arrNum)
    for (let i=0;i<arrNum.length;i++) {
        let num = 0
        for(let j=arrNum.length;j>0;j--){
            let temp = 0
                if(arrNum[j]<arrNum[j-1]){
                    temp = arrNum[j]
                    arrNum[j] = arrNum[j-1]
                    arrNum[j-1] = temp
                    // console.log("------swap-------")

                }else if(arrNum[j]>=arrNum[j-1]){
                    num += 1
                    // console.log("----work---")
                }
                temp_num += 1
                
        }
        console.log('num', num)
        if(num == (arrNum.length-1)){
            console.log('Break')
            break;
        }
        console.log("EndArr =", arrNum)
        // console.log(arrNum+" num = "+num+"arrNum.length = "+arrNum.length)
        console.log("---------------end loop----------------")
    }
    console.log(" ==TEMP=="+temp_num)

}
// check([
//     1,    2,      3,  5,
//     8,   23,     32, 45,
//    56,   56,     72, 78,
//    80, 8888, 999999
//  ])

//  check([
//     1,    2,      3,  5,
//     8,   23,     32, 45,
//    56,   0,     72, 78,
//    80, 8888, 999999
//  ])
//  check([1,    3,      2,  5 ])
 check([1,2,7,3,5])
// function convert(type){
//     console.log(type.toLowerCase())
// }
function checkNum(arrNum){
    let compar = 0
    let count = 0
    let num = 0 
    let arr = []
    let obj = {}
    for(let i=0;i<arrNum.length;i++){
        let c = 0
        for(let j=0;j<arrNum.length;j++){
            if(arrNum[i]==arrNum[j]){
                c += 1
            }
            obj[arrNum[i]] = c
        }
        if(c >= compar){
            count = c
            num = arrNum[i]
            compar += 1
        }
    }
    // console.log(obj)
    for(const key in obj){
        if(obj[key]==count){
            arr.push(key)
        }
    }
    // console.log(arr)
    // console.log("num ="+num+"count"+count)
    return [arr,count]
}

// checkNum([1,3,2,5,3,2])
function sortNum(arrNum,type){
    let val = checkNum(arrNum)
    var obj = {}
    type = type.toLowerCase()
    if(type=="asc"){
        let temp_num = 0
        for(let i=0;i<arrNum.length;i++){
            let temp = 0 
            let num = 0
            for(let j=arrNum.length;j>0;j--){
                if(arrNum[j]<arrNum[j-1]){
                    temp = arrNum[j]
                    arrNum[j] = arrNum[j-1]
                    arrNum[j-1] = temp
                }else if(arrNum[j]>=arrNum[j-1]){
                    num += 1
                }
                temp_num += 1
            }
        if(num == (arrNum.length-1)){
            break;
        }
        }
        console.log("INPUT =",arrNum,"  TYPE ="+type)
        console.log("WORK = "+temp_num)
    }else if(type=="desc"){
        let temp_num = 0
        for(let i=0;i<arrNum.length;i++){
            let temp = 0 
            let num = 0
            for(let j=0;j<arrNum.length;j++){
                if(arrNum[j]>arrNum[j-1]){
                    temp = arrNum[j]
                    arrNum[j] = arrNum[j-1]
                    arrNum[j-1] = temp
                }else if(arrNum[j]<=arrNum[j-1]){
                    num += 1
                }
                temp_num += 1
            }
        if(num == (arrNum.length-1)){
            break;
        }
        }
        console.log("INPUT =",arrNum,"  TYPE ="+type)
        console.log("WORK = "+temp_num)
    }
    obj.arr = arrNum
    obj.mostNum = val[0]
    obj.mostCount = val[1]
    console.log("OUTPUT",obj)
    console.log("----------------------------------------------")
}
sortNum([5,4,3,2,1],"asc")
sortNum([1,3,2,5,2],"asc")
sortNum([1,2,7,3,5],"asc")
sortNum([1,3,3,5,2,2],"Desc")
function removeNode(arr,wordRm){
    wordRm = wordRm.toUpperCase()
    let checkNum = 0
    let lastArr = []
    for(let i=0;i<arr.length;i++){
        if(wordRm == arr[i].name){
            checkNum = i
            // console.log("wordRm = "+i)
            if(checkNum==0){
                break;
            }else{
            arr[i-1].next = arr[i].next
            }
        }
    }
    for(let j=0;j<arr.length;j++){
        if(j == checkNum){
            continue
        }else{
            lastArr.push(arr[j])
        }
    }
    // console.log(lastArr)
    return lastArr;
}

function arrList(arr){
    let newList = []
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        let c = 0
        for(let j=0;j<arr.length;j++){
            if(arr[i].name == arr[j].next){
                c += 1
            }
        }
        if(c == 0){
            newList.push(arr[i])
            let compar = 0
            compar = i
            for(let m=0;m<arr.length;m++){
                let numBreak = 0;
                for(let n=0;n<arr.length;n++){
                    if(arr[n].name == arr[compar].next){
                        newList.push(arr[n])
                        compar = n
                        numBreak += 1
                    }   
                }
                if(numBreak == 0){
                    break;
                }
            }
        }
    }
    // console.log(newList)
    // removeNode(newList,"z")


    return removeNode(newList,"g")
}


let input = [
    {name: 'Z', next: null},
{name: 'A', next: 'B'},
{name: 'B', next: 'C'},
{name: 'H', next: 'Z'},
{name: 'C', next: 'G'},
{name: 'G', next: 'H'},
];

let rmArr =  removeNode(
    input, 'B'
);
console.log (rmArr )
rmArr = removeNode(rmArr, 'G');
console.log (rmArr )
rmArr = removeNode(rmArr, 'C');
console.log (rmArr )
rmArr = removeNode(rmArr, 'Z');
console.log (rmArr )
// console.log (rmArr )

// const removeNode = (nameNode) => {
    // [
    //     { name: 'A', next: 'B' },
    //     --> removed { name: 'B', next: 'C' },
    //     { name: 'C', next: 'G' },
    //     { name: 'G', next: 'H' },
    //     { name: 'H', next: 'Z' },
    //     { name: 'Z', next: null }
    //   ]
    // [
    //     { name: 'A', next: 'C' },
    //     { name: 'C', next: 'G' },
    //     { name: 'G', next: 'H' },
    //     { name: 'H', next: 'Z' },
    //     { name: 'Z', next: null }
    //   ]
// }
// arrList(
//     [{name: 'Z', next: null},
//     {name: 'A', next: 'B'},
//     {name: 'B', next: 'C'},
//     {name: 'H', next: 'Z'},
//     {name: 'C', next: 'G'},
//     {name: 'G', next: 'H'},
//     ]
// )
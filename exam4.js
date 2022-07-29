function output(arr){
    let result = ''
    for(let i=0;i<arr.length;i++){
        // console.log("i == ",i)

        if(i==(arr.length-1)){
            break;
        }else{
        result += arr[i] + '->'
        
        }
        // console.log("-----------")

    }
    console.log(result)
}

function train(objArr){
    let obj = {}
    let arr = []
    // obj[0] = objArr[0].name
    // console.log(obj[0])
    for(let i=0;i<objArr.length;i++){
        let count = 0
        // arr[i]= [objArr[i].name,objArr[i].next]
        for(let j=0;j<objArr.length;j++){
            if(objArr[i].name == objArr[j].name){
                count += 1
            }
            if(objArr[i].name == objArr[j].next){
                count += 1
            }
        }

        if(count < 2){
            let compar = 0
            arr.push(objArr[i].name)
            arr.push(objArr[i].next)
            compar = i
            // console.log(compar)
            for(let k=0;k<objArr.length;k++){
                let numBreak = 0;
                for(let l=0;l<objArr.length;l++){
                    if(objArr[l].name == objArr[compar].next){
                        arr.push(objArr[l].next)
                        compar = l
                        // console.log("+++++"+k)
                        numBreak += 1
                    }
                }
                if(numBreak == 0){
                    // console.log("num == "+numBreak)
                    break;
                }
            }
            // console.log("------"+compar)
        }

        // console.log("test")
    }
    output(arr)
}

train(
    [{name: 'Z', next: null},
    {name: 'A', next: 'B'},
    {name: 'B', next: 'C'},
    {name: 'H', next: 'Z'},
    {name: 'C', next: 'G'},
    {name: 'G', next: 'H'},
    ]
)
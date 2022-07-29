function parseshow(tree){
    let arrTree = []
    let start = tree.name
    let temp = []
    let tempArr = {}
    let i = 0 
    let tempObjM = {}
    for(const key in tree){
        temp.push(tree["childs"][i].name)
        i++
    
    }
    tempArr.parent = start
    tempArr.childs = temp
    arrTree.push(tempArr)
    let ChildsArr = []
    let tempArrM = []
    for(let j=0;j<tree["childs"].length;j++){
        temp = []
        for(let k=0;k<tree["childs"].length;k++){
            tempArr = {}
            tempArr.parent = tree["childs"][j].name
            temp.push(tree["childs"][j].childs[k].name)
            tempObjM = {}
            ChildsArr = []
            for(let m=0;m<tree["childs"].length;m++){
                let Objlast = {}
                let tempLast = []
                let countLast = 0
                if(tree["childs"][j].childs[k].childs[m] == undefined){
                }else{
                    ChildsArr.push(tree["childs"][j].childs[k].childs[m].name)
                    for(let last=0;last<tree["childs"].length;last++){
                         if(tree["childs"][j].childs[k].childs[m].childs[last] == undefined){
                            continue
                         }else{
                            Objlast.parent = tree["childs"][j].childs[k].childs[m].name
                            tempLast.push(tree["childs"][j].childs[k].childs[m].childs[last].name)
                            countLast += 1
                        } Objlast.childs = tempLast
                        if(countLast == 2){
                            arrTree.push(Objlast)
                            }   
                    }
                }
            }
            if(tree["childs"][j].childs[k].childs!=0){
            tempObjM.parent = tree["childs"][j].childs[k].name
            tempObjM.childs = ChildsArr
            arrTree.push(tempObjM)
            }
        }
        tempArr.childs = temp
        arrTree.push(tempArr)
    }
    // console.log(arrTree)
    return arrTree

}
const tree = {
    name: 'ROOT',
    childs: [
        {
            name: 'A',
            childs: [
                {
                    name: 'K',
                    childs: []
                },
                {
                    name: 'C',
                    childs: []
                }
            ]
        },
        {
            name: 'G',
            childs: [
                {
                    name: 'I',
                    childs: [
                        {
                            name: 'V',
                            childs: []
                        },
                        {
                            name: 'Z',
                            childs: [ 
                                {
                                name: 'W',
                                childs: []
                            },
                            {
                                name: 'N',
                                childs: []
                            }
                        ]
                        }
                    ]
                },
                {
                    name: 'H',
                    childs: [
                        {
                            name: 'X',
                            childs: []
                        },
                        {
                            name: 'Y',
                            childs: []
                        }
                    ]
                }
            ]
        }
    ]
}
let parse = []
parse = parseshow(tree)
// console.log(parseshow(tree))
function search(parse,treeObj){
    let num = 0
    let resultObj = {}
    for(let i =0;i<parse.length;i++){
        for(let j =0;j<parse.length;j++){
            if(parse[i].childs[j] == treeObj){
                num = i
            }
            resultObj.name = treeObj
            resultObj.parent = parse[num].parent
        }
        
    }console.log(resultObj)
}

function parseArr(arrTree){
    let num = 0
    let resultObj = {}
    let tempArr = []
    let resultArr = []
    let z=0
    for(let i =0;i<arrTree.length;i++){
        for(let j =0;j<arrTree[i].childs.length;j++){
            resultObj = {}
            resultObj.name = arrTree[i].childs[j]
            if(arrTree[i].childs[j] != 0){
            resultObj.parent = arrTree[i].parent
            tempArr.push(resultObj)
            }
        }
    }
    // console.log(tempArr)
    return tempArr
}
function route(arr,destination){
    console.log(arr)
    // console.log(arr[0])
    let tempArr = []
    let checkArr = []
    let temp = ""
    temp = destination
    tempArr.push(destination)
    for(let i =0;i<arr.length;i++){
            if(checkArr=="ROOT"){
                tempArr.push("ROOT")
                    break;
            }else{
                if(temp == arr[i].name){
                    // console.log("arr = ",arr[i].parent)
                    tempArr.push(arr[i].parent)
                    temp = arr[i].parent
                    arr[i].parent
                    i=0
                    // console.log(temp)
                }
            }
          
    }
    console.log(tempArr)
    let num = (tempArr.length-1)
    let arrResult = []
    for(let j=0;j<tempArr.length;j++){
        arrResult.push(tempArr[num])
        num -= 1
    }
    console.log("RESULT",arrResult)

}

route(parseArr(parse),'W')

route(parseArr(parse),'G')

route(parseArr(parse),'ROOT')
// parseArr(parse)
// search(parse,'W')

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
            // tempM.push(tempObjM)
            // console.log(tempM)
            // console.log("Arr == ",j,"=",typeof(tree["childs"][0].childs[0].childs[0]))
            ChildsArr = []
            for(let m=0;m<tree["childs"].length;m++){
                let Objlast = {}
                let tempLast = []
                let countLast = 0
                if(tree["childs"][j].childs[k].childs[m] == undefined){
                    // ChildsArr.push(undefined)
                }else{
                    // console.log("i",i,"j",j,"k",k,tree["childs"][j].childs[k].childs[m].name)
                    ChildsArr.push(tree["childs"][j].childs[k].childs[m].name)
                    for(let last=0;last<tree["childs"].length;last++){
                         if(tree["childs"][j].childs[k].childs[m].childs[last] == undefined){
                            continue
                         }else{
                            // console.log("result == ",tree["childs"][j].childs[k].childs[m].childs[last].name)
                            Objlast.parent = tree["childs"][j].childs[k].childs[m].name
                            tempLast.push(tree["childs"][j].childs[k].childs[m].childs[last].name)
                            countLast += 1
                        } Objlast.childs = tempLast
                        if(countLast == 2){
                            // console.log(Objlast)
                            arrTree.push(Objlast)
                            }   
                    }
                }
                // console.log("================================")
                // console.log("Arr == ",j,"=",tree["childs"][j].childs[k].childs[m])
                // ChildsArr.push(tree["childs"][j].childs[k].childs[m])
            }
            // console.log(ChildsArr)
            tempObjM.parent = tree["childs"][j].childs[k].name
            tempObjM.childs = ChildsArr
            // console.log(tempObjM)
            // console.log("A",tempObjM.parent," B ",tempObjM.childs)
            // console.log("-----------",ChildsArr)
            // tempObjM.parent = tree["childs"][j].childs[k].name
            // console.log("============",temp)
            // tempM.push(tempObjM)
            // console.log("============",tempM)
            arrTree.push(tempObjM)
            
            
        }
        // console.log(tempArrM)
        tempArr.childs = temp
        arrTree.push(tempArr)
        // arrTree.push(tempObjM)
    }
    // console.log(arrTree)
    // console.log(arrTree)
    // for(let l=0;l<tree["childs"].length;l++){
    //     let tempObjM = {}
    //     for(let m=0;m<tree["childs"].length;m++){
    //         tempObjM = {}
    //         tempObjM.parent = tree["childs"][l].childs[m].name
    //         console.log(tempObjM.parent)
    //         tempM.push(tempObjM)
    //     }
    //     console.log("============",tempM)
    // }
    console.log(arrTree)
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
    // console.log(parse[0].childs)
    for(let i =0;i<parse.length;i++){
        for(let j =0;j<parse.length;j++){
            if(parse[i].childs != undefined){
                // console.log(parse[i].childs[j])
            }else{
                continue
            }
        }
        
    }
}

search(parse,'A')

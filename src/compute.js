const compute = (arr)=>{
    if(arr[0][0].value===arr[0][1].value&&arr[0][1].value===arr[0][2].value&&arr[0][0].value!==''){
        return [true,arr[0][0].value]
    }else if(arr[1][0].value===arr[1][1].value&&arr[1][1].value===arr[1][2].value&&arr[1][0].value!==''){
        return [true,arr[1][0].value]
    }else if(arr[2][0].value===arr[2][1].value&&arr[2][1].value===arr[2][2].value&&arr[2][0].value!==''){
        return [true,arr[2][0].value]
    }else if(arr[0][0].value===arr[1][1].value&&arr[1][1].value===arr[2][2].value&&arr[0][0].value!==''){
        return [true,arr[0][0].value]
    }else if(arr[0][2].value===arr[1][1].value&&arr[1][1].value===arr[2][0].value&&arr[0][2].value!==''){
        return [true,arr[0][2].value]
    }else if(arr[0][0].value===arr[1][0].value&&arr[1][0].value===arr[2][0].value&&arr[0][0].value!==''){
            return [true,arr[0][0].value]
    }else if(arr[0][1].value===arr[1][1].value&&arr[1][1].value===arr[2][1].value&&arr[0][1].value!==''){
        return [true,arr[0][1].value]
    }else if(arr[0][2].value===arr[1][2].value&&arr[1][2].value===arr[2][2].value&&arr[0][2].value!==''){
        return [true,arr[0][2].value]
    }else if(arr[0].every((v)=>v.value!=='')&&arr[1].every((v)=>v.value!==''&&arr[2].every((v)=>v.value!==''))){
        return ['tie', 'tie']
    }
}

export default compute;
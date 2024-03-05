let arr=[10,20,30,23,34,55,36,56,87,99]
function search(arr,data){
    let idx=-1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==data){
            idx=i;
            break;
        }
    }
    return idx;
}
let ans=search(arr,55);
console.log(ans);
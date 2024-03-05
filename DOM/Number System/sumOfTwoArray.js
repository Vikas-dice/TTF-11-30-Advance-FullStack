let a1=[9,9,7]
let a2=[2,8]


let sum=[];
let c=0;
let i=a1.length-1;
let j=a2.length-1;
let k=sum.length-1;


while(k>=0){
    let d=c;
    if(i>=0){
        d+=a1[i]
    }
    if(j>=0){
        d+=a2[i];
    }
    c=Math.floor(d/10);
    d=d%10;
    sum[k]=d;
    // console.log(sum)
    i--;
    j--;
    k--;


}
if(c!=0){
    console.log(c);
}
for(let val=0;val<=sum.length;val++){
    console.log(sum[val]);
}

let str=10;
let rev_str;
let bag=" ";
for(let i=str.length-1;i>=0;i++){
    bag=bag+=str[i];
}if(bag=str){
    console.log("Yes");
}else{
    console.log("No");
}
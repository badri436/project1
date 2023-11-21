let sentence = "amma this amma is Malayalam word malayalam";
let txt2 = "";
let txt3 = "";
name1=sentence.split(' ');
console.log(name1);

for(let j=0;j<name1.length;j++){
    firstIndex=name1[j].toLocaleLowerCase();
    // console.log(firstIndex);

    for(let i=0;i<firstIndex.length;i++){
        txt2+=firstIndex[firstIndex.length-1-i];
    }
    if(txt2!=firstIndex){
       txt3+=" "+firstIndex;
      // console.log(txt3);
    }
    txt2="";
}
console.log(txt3);

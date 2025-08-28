//love count
function increaseLove(){
    const loveElement=document.getElementById("love_count")
    let currentCount=parseInt(loveElement.innerText)
    currentCount +=1
    loveElement.innerText = currentCount;
}



















const copyCountBtn=document.getElementById("copy_count_btn") ;
let copyCount=0;
const copyButtons=document.getElementsByClassName("copy_btn");
for(const copyButton of copyButtons){
    copyButton.addEventListener("click",function(){
       const copyNumber=copyButton.parentNode.parentNode.children[3].innerText
    //    console.log(copyNumber);
        navigator.clipboard.writeText(copyNumber).then(() => {
            alert(`নম্বর কপি হয়েছে :${copyNumber}`);
            copyCount++ ;

            copyCountBtn.innerText=copyCount +"  copy" ;

        })
        
    })
}

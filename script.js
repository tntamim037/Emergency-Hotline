//love count...
function increaseLove(){
    const loveElement=document.getElementById("love_count")
    let currentCount=parseInt(loveElement.innerText)
    currentCount +=1
    loveElement.innerText = currentCount;
}

// call button all...

let coins=100;

//sobaik dhoro...

const callButtons=document.getElementsByClassName("call_btn");
const clearButton=document.getElementById("clean_history") ;
const callHistoryList=document.getElementById("call_history_list");
const coinDisplay=document.getElementById("coin_count")

//loop is on....

for(const btn of callButtons){
    btn.addEventListener("click",function(){
        const serviceName=btn.parentNode.parentNode.children[2].innerText
        const serviceName2=btn.parentNode.parentNode.children[1].innerText
        // console.log(serviceName);
        const serviceNumber=btn.parentNode.parentNode.children[3].innerText
        // console.log(serviceNumber);

//check.....

        if(coins<20){
            alert("❌ আপনার পর্যান্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            return ;
        }
        coins -=20;
        coinDisplay.innerText=coins ;
        
        alert(`📞 calling ${serviceName} ${serviceNumber}....`);

        const now=new Date();
        const myTime=now.toLocaleTimeString();

        const li=document.createElement("li");
        li.className="flex justify-between items-center py-1";
        const leftDiv=document.createElement("div");
        leftDiv.innerHTML=`<p class="font-semibold">${serviceName2}</p>
                    <p class="text-sm text-gray-500">${serviceNumber}</p>`
        const rightDiv=document.createElement("div");
        rightDiv.innerText=myTime ;
        rightDiv.className="text-sm"
       li.appendChild(leftDiv)
       li.appendChild(rightDiv)
        callHistoryList.appendChild(li);

    })
}

//clear history

clearButton.addEventListener("click",function(){
    callHistoryList.innerHTML="";
})















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

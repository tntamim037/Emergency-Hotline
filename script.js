function increaseLove(){
    const loveElement=document.getElementById("love_count")
    let currentCount=parseInt(loveElement.innerText)
    currentCount +=1
    loveElement.innerText = currentCount;
}
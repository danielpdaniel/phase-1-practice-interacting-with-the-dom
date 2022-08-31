const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause")
const submit = document.querySelector("form#comment-form")
const submitButton = document.querySelector("button#submit")



let timer;
function startTimer(){
    timer = setInterval(function(){
    let counterNum = parseInt(counter.textContent);
    counter.textContent = counterNum + 1;
}, 1000)
}
startTimer()


plus.addEventListener("click", function(){
    let counterNum = parseInt(counter.textContent);
    counter.textContent = counterNum + 1;
})

minus.addEventListener("click", function(){
    let counterNum = parseInt(counter.textContent);
    counter.textContent = counterNum - 1;
})

heart.addEventListener("click", function(){
    let ulLikes = document.querySelector("ul.likes")
    const newLi = document.createElement("li")
    let timesClicked = newLi.id;
    
    

    newLi.textContent = `${counter.textContent} has been liked 1 time.`
    let liArray = document.querySelectorAll("li");

         newLi.className = counter.textContent;
         newLi.id = 1
         ulLikes.appendChild(newLi);
    
        // newLi.textContent = `${counter.textContent} has been liked 1 time.`
        //  ulLikes.appendChild(newLi)

        //  if(newLi.className === counter.textContent){
        //     let thisLi = document.getElementsByClassName(counter.textContent);
        //     thisLi.textContent = `${counter.textContent} has been liked ${parseInt(newLi.className) + 1} times.`
        //  }
        // let newerLi = document.createElement('li');
    

   
    // function clickCounter(newLi){
    //     timesClicked += 1
    // }

    // function idSetter(){
    //     for(li of liArray){
    //         if (li.className === counter.textContent){
    //             newLi.id = parseInt(li.id, 10) + 1;
    //             // debugger
    //         } else {
    //             debugger
    //             newLi.id = 1;
    //             debugger
    //         }
    //     }
    // }
   
    // idSetter()
    
//    const countUp = liArray.filter(() => {counter.textContent === li.className})
    for(li of liArray){
        // let timesClicked = 1
        // let newArray
        
        if (li.className === counter.textContent){

            li.id = parseInt(li.id, 10) + 1;
            // clickCounter()
            // const timesClicked = liArray.filter(li => {li.className === counter.textContent});
            // newerLi.textContent = `${counter.textContent} has been liked ${newerLi.id} times.`
            li.textContent = `${counter.textContent} has been liked ${li.id} times.`
            // ulLikes.replaceChild(newLi, newLi)
            ulLikes.removeChild(newLi)
           
            
        } 
    //    console.log(newArray)
    
    }
    
    
    // ulLikes.replaceChild(newerLi, newLi);

   



    //  for(i = 0; i < liArray.length; i++){
    //     if(liArray[i] === counter.textContent){s
    //         liArray[i] = `${counter.textContent} has been liked ${i} times.`
    //     }
        // console.log(liArray)
    //  }


        

    // if(counter.textContent === newLi.textContent) {
    // newLi.textContent = `${counter.textContent} has been liked ${timesClicked} times.`
    // } else {
    // newLi.textContent = `${counter.textContent} has been liked 1 time.`
    // ulLikes.appendChild(newLi)
    // }   
})

pause.addEventListener("click", function(){
    if (plus.disabled === false){
    pause.textContent = "Resume";
    clearInterval(timer);
    
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    console.log(timer)
    }
    else{
        pause.textContent = "pause";
        plus.disabled = false;
        minus.disabled = false;
        heart.disabled = false;
        startTimer();
        // const timer = setInterval(function(){
        //     let counterNum = parseInt(counter.textContent);
        //     counter.textContent = counterNum + 1;
        // }, 1000)
        
        
    }
});

submitButton.addEventListener("click", function(event){
    event.preventDefault();
    let input = document.querySelector("input#comment-input");

    const commentsList = document.querySelector("div#list");
    let newComment = document.createElement("p");
    newComment.textContent = input.value;

    commentsList.appendChild(newComment);
   input.value = ""

});



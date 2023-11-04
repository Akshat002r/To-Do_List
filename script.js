const inputBox=document.getElementById("search-box");
const listContainer=document.getElementById("list-container");

function AddTask(){
    if(inputBox.value ===""){
        alert("Write The Task to Add it in the List.");
    }
    else{
        // const taskk=inputBox.value;
        const ele=document.createElement("li");
        ele.innerHTML=inputBox.value;
        listContainer.appendChild(ele);
        
        const spannele=document.createElement("span");
        spannele.innerHTML="\u00d7";
        ele.appendChild(spannele);
    }

    inputBox.value="";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checkedd");
        saveData();
    }

    else if(e.target.tagName ==="SPAN")
    {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
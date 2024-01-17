function searchEmoji(){
    let inputValue=document.getElementById("search_field").value;
    displayResult(inputValue);

}



function displayResult(searchQuery=""){
    let filteredData= emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery)!=-1){
            return true;
        }
        if(e.tags.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){
            return true;
        }
        
        
    })
let pareent=document.getElementById("search_result_container");
pareent.innerHTML="";
filteredData.forEach((e)=>{
    let new_row=document.createElement("tr");
    new_row.style.backgroundColor="gray";
    
    let new_emoji=document.createElement("td");
    
    new_emoji.style.fontSize="35px";
    new_emoji.style.padding="30px";
    
    let new_aliases=document.createElement("td");
    new_aliases.style.fontSize="25px";
    new_aliases.style.paddingLeft="50px";

    
    let new_desc=document.createElement("td");
    new_desc.style.fontSize="25px";
    new_desc.style.paddingLeft="350px";
    new_emoji.innerText=e.emoji;
    new_aliases.innerText=e.aliases;
    new_desc.innerText=e.description;
    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_desc);
    pareent.appendChild(new_row);
    
})

}
document.getElementById("search_field").addEventListener('keyup',searchEmoji)
window.onload = () =>displayResult();
//your code here!
 const container = document.getElementById("infi-list");
let containerHeight = container.clientHeight;
let scrollHeight = container.scrollHeight;
let scrolltop = container.scrollTop;
let newItem = document.createElement("li");
newItem.innerText="item2";

container.addEventListener("scroll",() =>{
    
	
if(Math.floor(scrolltop) === (scrollHeight-containerHeight)){

    container.appendChild(newItem);
	 container.appendChild(newItem);
}
});

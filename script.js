//your code here!
 const container = document.getElementById("infi-list");
let containerHeight = container.clientHeight;
let scrollHeight = container.scrollHeight;
let scrolltop = container.scrollTop;
let newItem = document.createElement("li");
newItem.innerText="item1";

container.addEventListener("scroll",() =>{
    console.log(scrolltop);
    console.log(scrollHeight-containerHeight);
if(Math.floor(scrolltop) == (scrollHeight-containerHeight)){

    container.append(newItem,newItem);
}
});

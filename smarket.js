var items = [];

document.querySelector("input[type=submit]")
.addEventListener("click",()=>{
    var itemName = document.querySelector("input[name=item_name]");
    var itemCost = document.querySelector("input[name=price]");

    items.push({
        name: itemName.value,
        value: itemCost.value
    });

    let itemList = document.querySelector(".item-list");
    let sum = 0;
    itemList.innerHTML = "";
    items.map(function(val){
        sum+=parseFloat(val.value);

        itemList.innerHTML+=`
        <div class="item-list-one">
         <h3>`+val.name+`</h3>
         <h3 class="price-item"><span>R$`+val.value+`</span></h3></div>`;
    })

    sum = sum.toFixed(2);
    itemName.value= "";
    itemCost.value= "";

    let pieceSum = document.querySelector(".item-sum h1");
    pieceSum.innerHTML = "R$"+sum;
});
   
document.querySelector("button[name=clean]")
.addEventListener("click",()=>{
    items = [];
    document.querySelector(".item-list").innerHTML = "";
    document.querySelector(".item-sum h1").innerHTML = "R$0";
})
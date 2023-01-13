let input="";
function arrayManipulation(input)
{
    input=input.split(",");
    input=input.map((e)=>parseInt(e));
    input.sort((a,b)=>b-a);
    let s=0,e=input.length-1,arr=[];
    while(s<e)
    {
        arr.push(input[s++]);
        arr.push(input[e--]);
    }
    if(s==e)
    {
        arr.push(input[s]);
    }
    return arr;
}
while(1)
{
     input=prompt("Enter numbers seperated by comma (,) *");
     if(!input)
     {
        window.location.reload();

     }
     input=input.trim();
    input=input.replace(/\s+/g,'');
    if(input.match(/[^0-9^,]/g))
    {
        alert("Invalid input");
    }
    else
    {
        break;
    }
}

let res=arrayManipulation(input);

console.log(res);
var str=`The numbers in desired format are as follows: `;
res.forEach(element => {
    str+=`${element},`;
});
console.log(str);




// const coffee=["Espresso","Cappuccino","Latte"];
// const addon=["Milk","Cream","Latte"];
// const price=[60,75,100,80,90,125,100,125,150];

// let str=``,j=0;
// coffee.forEach((e)=>{
//     addon.forEach((i)=>{
//         str+=`<li data-i="${e},${i},${price[j]}">${e} with ${i} &nbsp;&nbsp;<b>&#8377;${price[j++]}</b><span class="btn">+</span></li>`;
//     })
// });

// document.querySelector(".item-list").innerHTML=str;
// document.querySelectorAll(".btn").forEach((e)=>{
//     e.addEventListener("click",(e)=>{
        
//         let data=e.target.parentElement.dataset.i;
        
//         let cartItem=document.querySelector(".cart-item");
       
//         let removeItem=document.querySelectorAll(".remove-cart"),bool=true;
//        Array.from(removeItem).forEach((e)=>{
//             if(e.dataset.item==data)
//             {
//                 bool=false;
//             }
//         })
//         if(bool)
//         {
//             if(cartItem.childElementCount==0)
//             {
//                 cartItem.innerHTML+="<div class='total-btn'><li onclick='handlePrice(this)' >Calculate</li><li onclick='generateBill(this)'>Generate Bill.</li></div>";
//             }
//             cartItem.innerHTML=`<li class="remove-cart" data-item=${data}>${data.split(",")[0]} with ${data.split(",")[1]}&nbsp;&nbsp;&nbsp;(&#8377;${data.split(",")[2]})<input class="price" data-price=${data.split(",")[2]} type='number' min='1' max='100' value='1'></input><span onclick="removeCart(this)">X</span></li>`+cartItem.innerHTML;
//         }
//         else
//         {
//             alert("Already Added!");
//         }
//     });
// });


// function removeCart(e)
// {
//     let cartItem=e.parentElement.parentElement;
//     if(cartItem.childElementCount==2)
//     {
//         cartItem.innerHTML="";
//         document.getElementById("dispsum").innerText="";
//     }
//     else
//     {
//         e.parentElement.remove();   
//     }
// }


// function handlePrice(e)
// {
//     let price=document.querySelectorAll(".price");
//     let sum=0;
//     Array.from(price).forEach((e)=>{
//         sum+=e.dataset.price*e.value;
//         let dispsum=document.getElementById("dispsum");
//         if(dispsum!=null)
//         {
//             dispsum.innerText="Total: "+sum;
//         }
//         else
//         {
//             document.querySelector(".cart").innerHTML+=`<h2 id="dispsum">Total: ${sum}</h2>`;
//         }
//     });
//     return sum;
// }


// function generateBill(e)
// {
//    let sum=handlePrice();
//    let cartItems=document.querySelectorAll(".remove-cart");
//    let cartItemsArr=[],str=`<h2>Your Bill</h2><ul>`;
//     Array.from(cartItems).forEach((item)=>{
//         let n=item.childNodes[1].value;
       
//         let d=item.dataset.item+`,${n}`;
//         d=d.split(',');
       
//         str+=`<li>${d[0]} with ${d[1]} Rs. ${d[2]} x ${d[3]}</li>`;
//     });
//     str+=`</li><h1>Total Amount paid: ${sum}</h1><button id='clear' onclick='handleReset()'>Clear</button>`;

//     document.querySelector('.Result').innerHTML="";
//     document.querySelector('.Result').innerHTML+=str;
// }

// function handleReset()
// {
//     window.location.reload();
// }

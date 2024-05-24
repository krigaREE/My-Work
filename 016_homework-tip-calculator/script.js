const billInput =  document.getElementById("bill");
const tipInput =  document.getElementById("tip");
const totalSpan =  document.getElementById("total");


function calculateTotal(){
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100)
    totalSpan.innerText = totalValue.toFixed(2)
}








const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (event) => {
   const x = (event.pageX - btnEl.offsetLeft);
   const y = (event.pageY - btnEl.offsetTop);

   btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})
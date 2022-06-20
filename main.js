const input = document.querySelector(" input"),
counter = document.querySelector(" .counter"),
maxLength = input.getAttribute("maxlength");
 input.onkeyup = ()=>{
 counter.innerText = maxLength - input.value.length;
}
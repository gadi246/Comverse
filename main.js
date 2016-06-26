var buls = document.querySelectorAll('.bul') ;
buls[0].style.background = '#2894c9';
document.body.addEventListener("click", function() {
    for(var i = 0;i < buls.length;i++)  {
        buls[i].style.background = '#fff'
    }
    if (event.target.className == "bul")
        event.target.style.background = '#2894c9'
},true);
console.log('ok');
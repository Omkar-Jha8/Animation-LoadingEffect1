setTimeout(() => {
    var div = document.querySelector('.main');
    var p = document.querySelector('.p');
    div.className = "new-class"
    p.innerHTML = "HEY! 👋 WELCOME 😊";
    p.className = "new-p";
}, 6000);
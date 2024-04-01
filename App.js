

// ----------------------------------Animations déplacement et blur--------------------------------
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entre) => {
        console.log(entre)
        if (entre.isIntersecting) {
            entre.target.classList.add('show')
        } else {
            entre.target.classList.remove('show')
        }
    });
})

const slideElements = document.querySelectorAll('.slidG, .slidD, .slidB, .slidH, .slidO')
slideElements.forEach((el) => observer.observe(el));

// ----------------------------------Pages mouvement Réservation & contact--------------------------------
    var resBtn = document.getElementById("reservBtn");
    var contBtn = document.getElementById("contacterBtn");
    var res = document.getElementById("reserv");
    var cont = document.getElementById("contacter");
    function reserv() {
    res.style.left = "4px";
    cont.style.right = "-620px";
    resBtn.className += " white-btn";
    contBtn.className = "btn";
    res.style.opacity = 1;
    cont.style.opacity = 0;
}
    function contact() {
    res.style.left = "-610px";
    cont.style.right = "5px";
    resBtn.className = "btn";
    contBtn.className += " white-btn";
    res.style.opacity = 0;
    cont.style.opacity = 1;
}


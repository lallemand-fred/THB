


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

windowsize();
navscroll();

function deln() {
    document.getElementById("name").value = "";
}

function dele() {
    document.getElementById("mail").value = "";
}

function delt() {
    document.getElementById("msg").value = "";
}

function windowsize() {
    if (window.innerWidth <= 420) {
        document.getElementById("Projli").innerHTML = "Proj."
        document.getElementById("Aboutli").innerHTML = "Über"
        document.getElementById("Kontaktli").innerHTML = "Kont."
    }
    if (window.innerWidth > 420) {
        document.getElementById("Projli").innerHTML = "Projekte"
        document.getElementById("Aboutli").innerHTML = "Über uns"
        document.getElementById("Kontaktli").innerHTML = "Kontakt"
    }
    if (window.innerWidth < 720) {
        document.getElementById("intro").style.height = "430px";
        document.getElementById("intro").style.padding = "1px";
        document.getElementById("burger1").style.visibility = "visible";
        document.getElementById("burger2").style.visibility = "visible";
        document.getElementById("burger3").style.visibility = "visible";
        document.getElementById("burgerToggle").style.visibility = "visible";
        document.getElementById("burgerToggle").checked = false;
        document.getElementById("menu").style.margin = "-20px 0 0 50px";
        for (var i = 0; i < document.getElementsByClassName("desc").length; i++) {
            document.getElementsByClassName("desc")[i].style.width = "96%"
        }
        for (var i = 0; i < document.getElementsByClassName("descr").length; i++) {
            document.getElementsByClassName("descr")[i].style.width = "96%";
        }
        document.getElementById("ktk1").style.width = "100%";
        document.getElementById("ktk2").style.width = "100%";
        document.getElementById("ktk2").style.height = "200px";
    }
    if (window.innerWidth >= 720) {
        document.getElementById("intro").style.height = "220px";
        document.getElementById("intro").style.padding = "30px";
        document.getElementById("burger1").style.visibility = "hidden";
        document.getElementById("burger2").style.visibility = "hidden";
        document.getElementById("burger3").style.visibility = "hidden";
        document.getElementById("burgerToggle").style.visibility = "hidden";
        document.getElementById("burgerToggle").checked = true;
        document.getElementById("menu").style.margin = "-20px 0 0 -28px";
        for (var i = 0; i < document.getElementsByClassName("desc").length; i++) {
            document.getElementsByClassName("desc")[i].style.width = "46%"
        }
        for (var i = 0; i < document.getElementsByClassName("descr").length; i++) {
            document.getElementsByClassName("descr")[i].style.width = "29.3333%";
        }
        document.getElementById("ktk1").style.width = "70%";
        document.getElementById("ktk1").style.float = "left";
        document.getElementById("ktk2").style.width = "30%";
        document.getElementById("ktk2").style.height = "500px";
        document.getElementById("ktk2").style.float = "left";
    }

}


// 
function navindex(n) {
    if (n == 1) {
        document.getElementById("a1").style.backgroundColor = "lightgrey";
        document.getElementById("a2").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a3").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a4").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a1").style.fontWeight = "bold";
        document.getElementById("a2").style.fontWeight = "normal";
        document.getElementById("a3").style.fontWeight = "normal";
        document.getElementById("a4").style.fontWeight = "normal";

    }
    if (n == 2) {
        document.getElementById("a2").style.backgroundColor = "lightgrey";
        document.getElementById("a1").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a3").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a4").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a2").style.fontWeight = "bold";
        document.getElementById("a1").style.fontWeight = "normal";
        document.getElementById("a3").style.fontWeight = "normal";
        document.getElementById("a4").style.fontWeight = "normal";
    }
    if (n == 3) {
        document.getElementById("a3").style.backgroundColor = "lightgrey";
        document.getElementById("a2").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a1").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a4").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a3").style.fontWeight = "bold";
        document.getElementById("a2").style.fontWeight = "normal";
        document.getElementById("a1").style.fontWeight = "normal";
        document.getElementById("a4").style.fontWeight = "normal";
    }
    if (n == 4) {
        document.getElementById("a4").style.backgroundColor = "lightgrey";
        document.getElementById("a2").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a3").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a1").style.backgroundColor = "rgb(225, 225, 225)";
        document.getElementById("a4").style.fontWeight = "bold";
        document.getElementById("a2").style.fontWeight = "normal";
        document.getElementById("a3").style.fontWeight = "normal";
        document.getElementById("a1").style.fontWeight = "normal";
    }
}

function navscroll() {
    // Nicht ganz aufs Pixel genau abgestimmt, man weiß ja auch nicht, ob der User gerade oben oder unten auf der Seite liest.
    x = window.scrollY; //Für Google Chrome, auch 'document.body.scrollTop'.
    if (window.innerWidth >= 720) {
        if (x <= 250) {
            navindex(1);
        }
        if (x > 250 && x <= 1900) {
            navindex(2);
        }
        if (x > 1900 && x <= 2500) {
            navindex(3);
        }
        if (x > 2500) {
            navindex(4);
        }
    }
    if (window.innerWidth < 720) {
        if (x <= 450) {
            navindex(1);
        }
        if (x > 450 && x <= 3800) {
            navindex(2);
        }
        if (x > 3800 && x <= 5400) {
            navindex(3);
        }
        if (x > 5400) {
            navindex(4);
        }
    }
}
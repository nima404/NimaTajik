var doc = document;
// function inputText() {
//     var inputValue = doc.getElementById('inputVal').value;
//     if (inputValue.length >= 10) {
//         doc.getElementById('wrongInput').innerHTML = ('تعداد حروف بیش از حد مجاز است')
//     }
// }
AOS.init();
function btnMailBox() {
    var changeIcon = doc.getElementById("barIcon");
    doc.getElementById("iconTel").style.display = 'inline-block';
    doc.getElementById("iconWat").style.display = 'inline-block';
    doc.getElementById("iconMail").style.display = 'inline-block';
    doc.getElementById('barIcon').style.display = 'none';
    doc.getElementById('closicon').style.display = 'block';
}
function closeIcon() {
    doc.getElementById("iconTel").style.display = 'none';
    doc.getElementById('closicon').style.display = 'none';
    doc.getElementById("iconWat").style.display = 'none';
    doc.getElementById("iconMail").style.display = 'none';
    doc.getElementById('barIcon').style.display = 'inline-block';
}

var bar1 = ldBar("#myItem1");
// var bar2 = document.getElementById('myItem1').ldBar;
var timeLoad = setInterval(function () {
    // doc.querySelector('#myItem2').style.display = 'none';
    set(100);
}, 4500);

var startPage = setInterval(function () {
    doc.getElementById("firstDisplayMode").style.display = "inline-block";
    doc.getElementById("firstDisplayMode1").style.display = "block";
    doc.getElementById("firstDisplayMode2").style.display = "block";
}, 5500);

var deletLoading = setInterval(function () {
    doc.getElementById("myItem1").style.display = 'none';
}, 4520);
clearInterval();

let nav = document.querySelector('.nav')

nav.querySelectorAll('li a').forEach((a, i) => {
    a.onclick = (e) => {
        if (a.classList.contains('nav-item-active')) return

        nav.querySelectorAll('li a').forEach(el => {
            el.classList.remove('nav-item-active')
        })

        a.classList.add('nav-item-active')

        let nav_indicator = nav.querySelector('.nav-indicator')

        nav_indicator.style.left = `calc(${(i * 38) + 24}% - 24%)`
    }
})

function userClick() {
    var changeBackgroundImage = doc.getElementById("body");
    changeBackgroundImage.classList.replace('BodyPic', 'changebackgroundimage');

    var changeNavbarColor = doc.getElementById('navChangeColor');
    changeNavbarColor.style.backgroundColor = 'darkgoldenrod';

    var changeIconColor = doc.getElementById('navIndicator');
    changeIconColor.style.backgroundColor = 'darkgoldenrod';

    var iconOne = doc.getElementById("iconOne");
    var iconTwo = doc.getElementById("iconTwo");
    var iconThree = doc.getElementById("iconThree");
    iconOne.style.color = 'white';
    iconTwo.style.color = 'white';
    iconThree.style.color = 'white';

    doc.getElementById('myPic').style.display = 'block';
    doc.getElementById('parallaxImage').style.display = 'block';
    doc.getElementById('titleDisplayMode').style.display = 'block';

    doc.getElementById("firstDisplayMode2").style.display = "none";

    doc.getElementById("typeTwo").style.display = "none";
    doc.getElementById("typeOne").style.display = "none";
    doc.getElementById('projeoneDisplay').style.display = "none";
    doc.getElementById("miniProjes").style.display = 'none';
    doc.getElementById("orgProjectDiv").style.display = 'none';

    let phoneNum = 0;
    const phoneN = setInterval(() => {
        if (phoneNum <= 9) {
            phoneNum++;
        } else {
            clearInterval(phoneN);
        }
        doc.getElementById('privPhoneProj').innerHTML = phoneNum;
    }, 400)

    let phoneNum1 = 0;
    const phoneN1 = setInterval(() => {
        if (phoneNum1 <= 4) {
            phoneNum1++;
        } else {
            clearInterval(phoneN1);
        }
        doc.getElementById('privPhoneProj1').innerHTML = phoneNum1;
    }, 400)
}

function homeClick() {

    doc.getElementById('myPic').style.display = 'none';
    doc.getElementById('parallaxImage').style.display = 'none';
    doc.getElementById('titleDisplayMode').style.display = 'none';

    doc.getElementById("typeTwo").style.display = "block";
    doc.getElementById("typeOne").style.display = "block";


    var changeBackgroundImage1 = doc.getElementById("body");
    changeBackgroundImage1.classList.replace('changebackgroundimage', 'BodyPic');

    var changeNavbarColorHome = doc.getElementById('navChangeColor');
    changeNavbarColorHome.style.backgroundColor = 'white';

    var changeIconColorHome = doc.getElementById('navIndicator');
    changeIconColorHome.style.backgroundColor = 'white';

    var iconOneHome = doc.getElementById("iconOne");
    var iconTwoHome = doc.getElementById("iconTwo");
    var iconThreeHome = doc.getElementById("iconThree");
    iconOneHome.style.color = 'darkgoldenrod';
    iconTwoHome.style.color = 'darkgoldenrod';
    iconThreeHome.style.color = 'darkgoldenrod';
    doc.getElementById('projeoneDisplay').style.display = "none";
    doc.getElementById("miniProjes").style.display = 'none';
    doc.getElementById("orgProjectDiv").style.display = 'none';
}

var project = doc.getElementById("projectClick").addEventListener("click", function () {
    doc.getElementById('myPic').style.display = 'none';
    doc.getElementById('parallaxImage').style.display = 'none';
    doc.getElementById('titleDisplayMode').style.display = 'none';

    doc.getElementById("firstDisplayMode2").style.display = "none";

    doc.getElementById("typeTwo").style.display = "none";
    doc.getElementById("typeOne").style.display = "none";
    var changeBackgroundImage = doc.getElementById("body");
    changeBackgroundImage.classList.replace('BodyPic', 'changebackgroundimage');

    var changeNavbarColor = doc.getElementById('navChangeColor');
    changeNavbarColor.style.backgroundColor = 'darkgoldenrod';

    var changeIconColor = doc.getElementById('navIndicator');
    changeIconColor.style.backgroundColor = 'darkgoldenrod';

    var iconOne = doc.getElementById("iconOne");
    var iconTwo = doc.getElementById("iconTwo");
    var iconThree = doc.getElementById("iconThree");
    iconOne.style.color = 'white';
    iconTwo.style.color = 'white';
    iconThree.style.color = 'white';
    doc.getElementById('projeoneDisplay').style.display = "block";
    doc.getElementById("orgProjectDiv").style.display = 'block';
});



var projes = doc.getElementById('projeClick').addEventListener("click", function (event) {
    doc.getElementById("miniProjes").style.display = 'none';
    doc.getElementById("projes").style.display = 'block';
    event.preventDefault();
})
var projes = doc.getElementById('miniProjeClick').addEventListener("click", function (event) {
    doc.getElementById("miniProjes").style.display = 'block';
    doc.getElementById("projes").style.display = 'none';
    event.preventDefault();
})

// document.onmousemove = animateCircle;

// function animateCircle(event) {
//   var circle = document.createElement('div')
//   // console.log(circle)
//   var colors = ["#f00", "#6cf", "#0f0", "#00f"]
//   circle.setAttribute('class', 'circle')

//   // console.log(event)

//   circle.style.left = event.clientX + "px"
//   circle.style.top = event.clientY + "px"
//   circle.style.transition = "all 0.5s linear"

//   document.body.appendChild(circle)

//   circle.style.left = circle.offsetLeft - 20 + "px"
//   circle.style.top = circle.offsetTop - 20 + "px"

//   var mainColor = colors[Math.floor(Math.random() * colors.length)]

//   circle.style.borderColor = mainColor
//   circle.style.width = "50px"
//   circle.style.height = "50px"
//   circle.style.borderWidth = "5px"
//   circle.style.opacity = 0

// }




// Wed Loading


var bar2 = ldBar("#myItem2");
// var bar6 = document.getElementById('myItem2').ldBar;
var timeLoad1 = setInterval(function () {
    set(100);
}, 3000);

var startPage1 = setTimeout(function () {
    var boduchangeBack = doc.querySelector('.windosBodyPic');
    boduchangeBack.classList.replace('windosBodyPic' , 'windosBodyPic2');
    // doc.querySelector('#myItem2').style.display = 'none';
    doc.querySelector('#windowsDisplayNone').style.display = 'block';
    doc.querySelector('#dipslaWindosIntrodus').style.display = 'block';
    doc.querySelector('#windowsDisplayNone').style.display = 'block';
    doc.querySelector('#windowsDisplayNone').style.display = 'block';

}, 4000);
// // clearTimeout('startPage1');

// var startPage1 = setInterval(function () {
//     doc.getElementById("firstDisplayMode").style.display = "inline-block";
//     doc.getElementById("firstDisplayMode1").style.display = "block";
//     doc.getElementById("firstDisplayMode2").style.display = "block";
// }, 4000);

var deletLoading1 = setInterval(function () {
    doc.getElementById("myItem2").style.display = 'none';
}, 4000);




$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

function myIconBar() {
    doc.querySelector('#menu-toggle').classList.toggle("iconClick");

}
// function myIconBar(){
//     doc.querySelector('#menu-toggle').classList.toggle("iconClick");

//     doc.getElementById("projDivNav2").style.display = 'block';
// }


let i = 0;
const x = setInterval(() => {
    if (i <= 9) {
        i++;
    } else {
        clearInterval(x);
    }
    doc.getElementById('projectNumber').innerHTML = i;
}, 800)


let o = 0;
const s = setInterval(() => {
    if (o <= 3) {
        o++;
    } else {
        clearInterval(s);
    }
    doc.getElementById('privProjectNumber').innerHTML = o;
}, 800)

let m = 0;
const p = setInterval(() => {
    if (m <= 2) {
        m++;
    } else {
        clearInterval(p);
    }
    doc.getElementById('miniProjectNumber').innerHTML = m;
}, 800)

var projIconClick = doc.querySelector('#projIconClick').addEventListener('click', function (event) {
    doc.getElementById("dipslaWindosIntrodus").style.display = 'none';
    event.preventDefault();
    doc.getElementById('windosProjeDis').style.display = 'block';
    // AOS.init();
})

var userIconClick = doc.querySelector('#userIconClick').addEventListener('click', function (event) {
    doc.getElementById("dipslaWindosIntrodus").style.display = 'block';
    event.preventDefault();
    doc.getElementById('windosProjeDis').style.display = 'none';

    let i = 0;
    const x = setInterval(() => {
        if (i <= 9) {
            i++;
        } else {
            clearInterval(x);
        }
        doc.getElementById('projectNumber').innerHTML = i;
    }, 800)


    let o = 0;
    const s = setInterval(() => {
        if (o <= 3) {
            o++;
        } else {
            clearInterval(s);
        }
        doc.getElementById('privProjectNumber').innerHTML = o;
    }, 800)

    let m = 0;
    const p = setInterval(() => {
        if (m <= 2) {
            m++;
        } else {
            clearInterval(p);
        }
        doc.getElementById('miniProjectNumber').innerHTML = m;
    }, 800)
})




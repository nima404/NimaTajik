function promptAlert() {
    setTimeout(function(){
        let whatsUserName = prompt("لطفا نام کاربری خود را وارد کنید.");
        if(whatsUserName != null){
            document.getElementById('userNameMenu').innerHTML = whatsUserName;
            document.getElementById('UserNamePage').innerHTML = whatsUserName;
        }
         }, 100)  
  }
  promptAlert();


const buttons = document.querySelectorAll(".MenuItems-Btn");
buttons.forEach(btn => {
    btn.addEventListener("click" , function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.classList.add("spanStyle")
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})

let projeClick = document.getElementById('projeNote').addEventListener("click" , function(){
    document.getElementById('projeNote').classList.add("activeItemClick");
    document.getElementById('allNote').classList.remove("activeItemClick");
    document.getElementById('privetNote').classList.remove("activeItemClick");
    document.getElementById('jobNote').classList.remove("activeItemClick");
    document.querySelector("#notRegisteredNote").style.display = 'block';
    document.querySelector("#noteDisplayOther").style.display = 'none';
})
let noteClick = document.getElementById('allNote').addEventListener("click" , function(){
    document.getElementById('allNote').classList.add("activeItemClick");
    document.getElementById('projeNote').classList.remove("activeItemClick");
    document.getElementById('privetNote').classList.remove("activeItemClick");
    document.getElementById('jobNote').classList.remove("activeItemClick");
    document.querySelector("#notRegisteredNote").style.display = 'none';
    document.querySelector("#noteDisplayOther").style.display = 'block';
})
let privetClick = document.getElementById('privetNote').addEventListener("click" , function(){
    document.getElementById('privetNote').classList.add("activeItemClick");
    document.getElementById('projeNote').classList.remove("activeItemClick");
    document.getElementById('allNote').classList.remove("activeItemClick");
    document.getElementById('jobNote').classList.remove("activeItemClick");
    document.querySelector("#notRegisteredNote").style.display = 'block';
    document.querySelector("#noteDisplayOther").style.display = 'none';
})
let jobClick = document.getElementById('jobNote').addEventListener("click" , function(){
    document.getElementById('jobNote').classList.add("activeItemClick");
    document.getElementById('projeNote').classList.remove("activeItemClick");
    document.getElementById('privetNote').classList.remove("activeItemClick");
    document.getElementById('allNote').classList.remove("activeItemClick");
    document.querySelector("#notRegisteredNote").style.display = 'block';
    document.querySelector("#noteDisplayOther").style.display = 'none';
})


document.querySelector("#recycleaBtn1").addEventListener("click" , function(){
    document.querySelector('#removNote1').remove();
})

document.querySelector("#recycleaBtn2").addEventListener("click" , function(){
    document.querySelector('#removNote2').remove();
})

document.querySelector("#recycleaBtn3").addEventListener("click" , function(){
    document.querySelector('#removNote3').remove();
})

document.querySelector("#recycleaBtn4").addEventListener("click" , function(){
    document.querySelector('#removNote4').remove();
})

document.querySelector("#recycleaBtn5").addEventListener("click" , function(){
    document.querySelector('#removNote5').remove();
})

document.querySelector("#recycleaBtn6").addEventListener("click" , function(){
    document.querySelector('#removNote6').remove();
})

document.querySelector("#recycleaBtn7").addEventListener("click" , function(){
    document.querySelector('#removNote7').remove();
})

document.querySelector("#recycleaBtn8").addEventListener("click" , function(){
    document.querySelector('#removNote8').remove();
})

document.querySelector("#recycleaBtn9").addEventListener("click" , function(){
    document.querySelector('#removNote9').remove();
})


// Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var record = document.getElementById("addNoteBtn");
record.onclick = function(){
    modal.style.display = "none";
}
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var titleVal = document.querySelector("#titlev");
var noteVal = document.querySelector("#noteval");



var noteNum = 0;
document.querySelector("#addNoteBtn").addEventListener("click" , function(e){

    document.querySelector("#notRegisteredNote").style.display = 'none';
    
    noteNum++;
    if(noteNum == 1){
        document.getElementById('RecordTitle1').innerHTML = titleVal.value;
        document.getElementById('recordParagraf1').innerHTML = noteVal.value;
        document.querySelector("#removNote1").style.display = 'block';
    };

    if(noteNum == 2){
        document.getElementById('RecordTitle2').innerHTML = titleVal.value;
        document.getElementById('recordParagraf2').innerHTML = noteVal.value;
        document.querySelector("#removNote2").style.display = 'block';
    };

    if(noteNum == 3){
        document.getElementById('RecordTitle3').innerHTML = titleVal.value;
        document.getElementById('recordParagraf3').innerHTML = noteVal.value;
        document.querySelector("#removNote3").style.display = 'block';
    }

    if(noteNum == 4){
        document.getElementById('RecordTitle4').innerHTML = titleVal.value;
        document.getElementById('recordParagraf4').innerHTML = noteVal.value;
        document.querySelector("#removNote4").style.display = 'block';
    }

    if(noteNum == 5){
        document.getElementById('RecordTitle5').innerHTML = titleVal.value;
        document.getElementById('recordParagraf5').innerHTML = noteVal.value;
        document.querySelector("#removNote5").style.display = 'block';
    }

    if(noteNum == 6){
        document.getElementById('RecordTitle6').innerHTML = titleVal.value;
        document.getElementById('recordParagraf6').innerHTML = noteVal.value;
        document.querySelector("#removNote6").style.display = 'block';
    }

    if(noteNum == 7){
        document.getElementById('RecordTitle7').innerHTML = titleVal.value;
        document.getElementById('recordParagraf7').innerHTML = noteVal.value;
        document.querySelector("#removNote7").style.display = 'block';
    }

    if(noteNum == 8){
        document.getElementById('RecordTitle8').innerHTML = titleVal.value;
        document.getElementById('recordParagraf8').innerHTML = noteVal.value;
        document.querySelector("#removNote8").style.display = 'block';
    }

    if(noteNum == 9){
        document.getElementById('RecordTitle9').innerHTML = titleVal.value;
        document.getElementById('recordParagraf9').innerHTML = noteVal.value;
        document.querySelector("#removNote9").style.display = 'block';
    }

e.preventDefault();
})





var secCode = Math.floor(Math.random() * 100000);
document.getElementById('securityCode').innerHTML = (secCode);

var myTimerMinutes = 1;
var myTimerSeconds = 60;

var myTimer = setInterval(function() {
  document.getElementById("Timer").innerHTML =  myTimerMinutes + " : " + myTimerSeconds ;
  myTimerSeconds--;
  if(myTimerSeconds == 0) {
    myTimerSeconds = 60;
    myTimerMinutes--;
  }
  if(myTimerMinutes < 0) {
    myTimerMinutes = 0;
    clearInterval(myTimer);
    alert("وقت شما به پایان رسید.")
  }
}, 1000);

function logerBtn() {

  if (document.getElementById('secval').value != secCode) {
    document.getElementById('secWrong').innerHTML = ('کد امنیتی نادرست میباشد !');
  }

  if (document.getElementById('passinpt').value !== document.getElementById('passreap').value) {
    document.getElementById('repeatPassWrong').innerHTML = ('رمز با تکرار رمز هم خوانی ندارد !');
  }
  if (document.getElementById('passinpt').value == false) {
    document.getElementById('passWrong').innerHTML = ('رمز را وارد کنید')
  }
  if (document.getElementById('name-input').value == false) {
    document.getElementById('nameWrong').innerHTML = ('نام را وارد کنید')
  }
  if (document.getElementById('lname-input').value == false) {
    document.getElementById('lnameWrong').innerHTML = ('نام خانوداگی را وارد کنید')
  }
  if (document.getElementById('passreap').value == false) {
    document.getElementById('repeatPassWrong').innerHTML = ('تکرار رمز را وارد کنید')
  }
  if (document.getElementById('secval').value == false) {
    document.getElementById('secWrong').innerHTML = ('کد امنیتی را وارد کنید')
  }
  event.preventDefault()
}



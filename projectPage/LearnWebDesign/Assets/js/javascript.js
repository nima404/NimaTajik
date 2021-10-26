   $('document').ready(function(){
            $("#btn-log").click(function(){
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(".tog-btn").offset().top - 80
                }, 1000);
            })

        })
          function myFunction() {
              let nameValue = document.getElementById("name-input").value;
              let lnameValue = document.getElementById("lname-input").value;
              document.getElementById("name-value-input").innerHTML = nameValue+lnameValue ;
          }
          AOS.init();

          let numAdd = 0;
          function addnum1(){
            let numAdded = 1 ;
            numAdd = numAdd + numAdded;
            document.getElementById('num-cart').innerHTML = (numAdd);  
            document.getElementById('fixedDiv').style = 'display :inline-block;';
            document.getElementById('sssstow').innerHTML = '<div class="card-gold row" data-aos="zoom-in-down"><div class="col-lg-4 col-4"><img src="Assets/Image/js.png" alt="" class="card-gold-img"></div><div class="col-lg-8 col-8"><h5 class="pt-3">دوره طلایی جاوااسکریپت (مقدماتی)</h5><p class="title-h">مدرس:<br>اقای محمودی</p><p class="MeetingParagraf">15 جلسه</p><button class="addbtn" id="addnum" onclick="addnum1()"><i class="fas fa-plus"></i> افزودن به سبد خرید </button><div class="hr-dot"></div><span>80,000</span><span class="user-class"> <b class="user-number"> 0 </b> <i class="fas fa-users"></i></span></div></div>'; 
          }

          function addnum2(){
            let numAdded = 1 ;
            numAdd = numAdd + numAdded;
            document.getElementById('num-cart').innerHTML = (numAdd);
            document.getElementById('fixedDiv').style.display = 'inline-block';
          }

          
          function btncartshop(){
            document.getElementById('finishcart').innerHTML = ('دوره جاوااسکریپت مقدماتی')
          }
          function pagetow(){
            alert('ssssssssssssssssssss')
          }
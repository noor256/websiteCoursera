

$(document).ready(function(){
        $('#mycarousel').carousel({ interval: 1000});
        $("#mycarousel").click(function(){
      
        
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa fa-play');
                    $("#carouselButton").children("span").addClass('fa fa-pause');                    
                }
        });
    });
    

      
        //   let modal = document.getElementById("exampleModal");
        //   let btn = document.getElementById("reserveBtn");
  
        //   btn.onclick = function() {
           
        //  $("#exampleModal").modal("show");
           
        //     }
            $('#reserveBtn').click(function(){
                $("#exampleModal").modal("toggle");
           
            })

            // let loginBtn = document.getElementById("loginBtn");
            // let loginModal = document.getElementById("loginModal");

            // loginBtn.onclick = function() {
            //     $("#loginModal").modal("toggle");
            // }
            $('#loginBtn').click(function(){
                $("#loginModal").modal("toggle");
           
            })
$(document).ready(function(){
    document.getElementById("gallery").addEventListener("click", gallery);
    document.getElementById("accounts").addEventListener("click", accounts);
    function gallery(){
        const req = new XMLHttpRequest();
        req.onload = function() {
          document.getElementById("main-content").innerHTML = this.responseText;
        }
        req.open("GET", "gallery.txt");
        req.send();
    }
    function accounts(){
        const req = new XMLHttpRequest();
        req.onload = function() {
          document.getElementById("main-content").innerHTML = this.responseText;
        }
        req.open("GET", "accounts.txt");
        req.send();
    }
    //REMOVE AND ADD CLASS ATTRIBUTE
    $("#gallery").click(function(){
        $("#accounts").removeAttr("class");
        $("#gallery").attr("class", "active");
    })
    $("#accounts").click(function(){
        $("#gallery").removeAttr("class");
        $("#accounts").attr("class", "active");
    })
    //OPEN LINKS
    $(".web").on("click", function(){
        window.open("https://1910598john.github.io/jmcatamora/", "_blank")
    })
    $(".facebook").live("click", function(){
        window.open("https://www.facebook.com/catamora.07/", "_blank");
    })
    $(".instagram").live("click", function(){
        window.open("https://www.instagram.com/catamora.jm/", "_blank");
    })
    $(".youtube").live("click", function(){
        window.open("https://shorturl.at/deuK9", "_blank");
    })
    $(".github").live("click", function(){
        window.open("https://github.com/1910598john", "_blank");
    })
    $(".steam").live("click", function(){
        window.open("https://www.steamcommunity.com/id/230658225/", "_blank");
    })
    //VIEW CONTENT
    $("img").live("click",function(){
       var content = $(this).clone();
       $(".view").css({
           "visibility" : "visible",
       });
       $(".view .content").append(content);

       if ($(window).width() <= 768) {
          $(".content").css({
              "position" : "absolute",
              "top" : "50%",
              "left" : "50%",
              "transform" : "translate(-50%, -50%)",
              "width" : "250px",
              "height" : "300px",
          });
          $(".content img, .content video").css({
              "width" : "100%",
              "height" : "100%",
              "object-fit" : "cover",
          })
       }
       else {
          $(".content").css({
            "position" : "absolute",
            "left" : "50%",
            "transform" : "translateX(-50%)",
            "width" : "40%",
            "height" : "100%",
          })
          $(".content img, .content video").css({
            "width" : "100%",
            "height" : "100%",
            "object-fit" : "cover"
          })
       }
   })
   $(".view").click(function(){
       $(".content img, .content video").remove();
       $(this).css("visibility", "hidden");
   })
})
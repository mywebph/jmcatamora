$(document).ready(function(){
    const req = new XMLHttpRequest();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
            $("ul li a").click(function(){
                $("li a").removeAttr("class");
                $(this).attr("class", "active");
            })
        }
    }
    req.open("GET", "accounts.txt");
    req.send();
    var preload = document.getElementById("preload");
    window.addEventListener("load", hidePreloader);
    function hidePreloader(){
        preload.style.display = "none";
        document.body.style.overflowY = "visible";
    }
    document.getElementById("photos").addEventListener("click", photos);
    document.getElementById("videos").addEventListener("click", videos);
    document.getElementById("accounts").addEventListener("click", accounts);
    function photos(){
        const req = new XMLHttpRequest();
        req.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-content").innerHTML = this.responseText;
            $("ul li a").click(function(){
                $("li a").removeAttr("class");
                $(this).attr("class", "active");
            })
          }
        }
        req.open("GET", "photos.txt");
        req.send();
    }
    function videos(){
        const req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("main-content").innerHTML = this.responseText;
                $("ul li a").click(function(){
                    $("li a").removeAttr("class");
                    $(this).attr("class", "active");
                })
            }
        }
        req.open("GET", "videos.txt");
        req.send();
    }
    function accounts(){
        const req = new XMLHttpRequest();
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("main-content").innerHTML = this.responseText;
                $("ul li a").click(function(){
                    $("li a").removeAttr("class");
                    $(this).attr("class", "active");
                })
            }
        }
        req.open("GET", "accounts.txt");
        req.send();
    }
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
    //VIEW IMAGES AND VIDEOS
    $(".photos img, .videos video, .profile-pic img").live("click",function(){
       var content = $(this).clone();
       $(".view").css({
           "visibility" : "visible",
       });
       $(".view").append(content);
       $("body").css("overflow-y", "hidden");
       $(".body_container").css("overflow-y", "scroll");
       $(".view").css("overflow-y", "scroll");
       if ($(window).width() <= 768) {
          $(".view .image, .view video").css({
              "display" : "block",
              "width" : "100%",
              "height" : "70%",
              "object-fit" : "contain",
              "position" : "absolute",
              "top" : "50%",
              "transform" : "translateY(-50%)",
              "background" : "#000"
          })
          $(".close").css({
            "top" : "5%"
        })
       }
       else {
          $(".view .image, .view video").css({
            "display" : "block",
            "width" : "40%",
            "height" : "100vh",
            "object-fit" : "cover",
            "position" : "absolute",
            "left" : "50%",
            "transform" : "translateX(-50%)",
          })
          $(".view video").css({
              "object-fit" : "contain"
          })
       }
       var video = $(".view video");
       $(video).get(0).play();
       $(video).get(0).currentTime = 0;
       $(video).get(0).controls = true;
    })
    
   
   //VIEW COVER IMAGE
    $(".cover").live("click", function(){
       var img = $(this).children("img:first-child").clone();
       $(".view").append(img);
       $(".view").css("visibility", "visible");
       $("body").css("overflow-y", "hidden");
       $(".body_container").css("overflow-y", "scroll");
       $(".view").css("overflow-y", "scroll");
       if ($(window).width() <= 768) {
           $(".view .image").css({
               "display" : "block",
               "position" : "absolute",
               "width" : "100%",
               "top" : "50%",
               "transform" : "translateY(-50%)"
           })
           $(".close").css({
               "top" : "5%"
           })
       }
       else{
           $(".view .image").css({
               "display" : "block",
               "position" : "absolute",
               "height" : "40%",
               "width" : "100%",
               "object-fit" : "contain",
               "top" : "50%",
               "left" : "50%",
               "transform" : "translate(-50%, -50%)"
           })
       }
    })
    $(".close").click(function(){
        $(".view").css("visibility", "hidden");
        $(".view .image, .view video").remove();
        $("body").css("overflow-y", "visible");
        $(".body_container").css("overflow-y", "visible");
        $(".view").css("overflow-y", "visible");
    })
    const month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    const now = new Date();
    var hr = now.getHours();
    var min = now.getMinutes();
    if (min <= 10) {
        min = "0" + min;
    }
    if (hr <= 10) {
        hr = "0" + hr;
    }
    document.getElementById("time-now").innerHTML = month[now.getMonth()] + " " + now.getDate() + " at " + hr + ":" + min + ".";
})
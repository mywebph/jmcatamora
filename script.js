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
        req.open("GET", "desc/photos.txt");
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
        req.open("GET", "desc/videos.txt");
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
    $(".my_name, .my-dp").on("click", function(){
        window.open("https://facebook.com/catamora.07/", "_blank")
    })
    $(".web").on("click", function(){
        let urls = ["https://jmcatamora07.netlify.app/", "https://1910598john.github.io/portfolio/"];
        rand = Math.random() * 1;
        round = Math.round(rand);
        randomUrl = urls[round];
        window.open(randomUrl, "_blank");
    })
    $(".facebook").live("click", function(){
        window.open("https://www.facebook.com/catamora.07/", "_blank");
    })
    $(".instagram").live("click", function(){
        window.open("https://www.instagram.com/lucius.castus07/", "_blank");
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

    //DISABLE CONTEXTMENU
    $("video, img").live("contextmenu", function(event){
        event.stopPropagation();
        event.preventDefault();
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
          $(".content-info").css("display", "none");
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
            "top" : "5%",
            "right" : "5%"
          })
          $(".custom-hide-icon").css("display", "none");
          $(".close a").css("display", "block");
       }
       else if ($(window).width() <= 820) {
           $(".content-info").css("display", "none");
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
       else {
          $(".view .image, .view video").css({
            "display" : "block",
            "position" : "absolute",
            "left" : "25%",
            "top" : "50%",
            "transform" : "translate(-25%, -50%)",
            
          })
          $(".view video").css({
              "width" : "40%",
              "height" : "auto",
          })
          $(".view .image").css({
              "object-fit" : "cover",
              "width" : "40%",
              "height" : "100vh",
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
           $(".content-info").css("display", "none");
           $(".view .image").css({
               "display" : "block",
               "position" : "absolute",
               "width" : "100%",
               "top" : "50%",
               "transform" : "translateY(-50%)"
           })
           $(".close").css({
               "top" : "5%",
               "right" : "5%"
           })
           $(".custom-hide-icon").css("display", "none");
           $(".close a").css("display", "block");
       }
       if ($(window).width() <= 820) {
          $(".content-info").css("display", "none");
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
       else{
           $(".view .image").css({
               "display" : "block",
               "position" : "absolute",
               "height" : "40%",
               "width" : "100%",
               "object-fit" : "contain",
               "top" : "50%",
               "left" : "-15%",
               "transform" : "translateY(-50%)"
           })
       }
    })
    //CLOSE 
    $(".close").click(function(){
        $(".view").css("visibility", "hidden");
        $(".view .image, .view video").remove();
        $("body").css("overflow-y", "visible");
        $(".body_container").css("overflow-y", "visible");
        $(".view").css("overflow-y", "visible");
    })
    //DISPLAY TIME

    var int = setInterval(time, 1000);
    function time(){
        const now = new Date();
        var hr = now.getHours();
        var min = now.getMinutes();
        var AMPM = hr >= 12 ? "PM" : "AM";
        if (min < 10) {
            min = "0" + min;
        }
        if (hr > 12) {
            hr = hr - 12;
        }
        document.getElementById("time-now").innerHTML =  hr + ":" + min + " " + AMPM;
        document.getElementById("time-now").style.color = "rgb(133, 127, 127)";
    }
    
    $(".cover").live("mouseover", function(){
        $(".content-desc p").load("desc/cover.txt");
    })
    $(".dp").live("mouseover", function(){
        $(".content-desc p").load("desc/dp.txt");
    })
    $(".image1").live("mouseover", function(){
        $(".content-desc p").load("desc/image1.txt");
    })
    $(".image2").live("mouseover", function(){
        $(".content-desc p").load("desc/image2.txt");
    })
    $(".image3").live("mouseover", function(){
        $(".content-desc p").load("desc/image3.txt");
    })
    $(".image4").live("mouseover", function(){
        $(".content-desc p").load("desc/image4.txt");
    })
    $(".image5").live("mouseover", function(){
        $(".content-desc p").load("desc/image5.txt");
    })
    $(".image6").live("mouseover", function(){
        $(".content-desc p").load("desc/image6.txt");
    })
    $(".image7").live("mouseover", function(){
        $(".content-desc p").load("desc/image7.txt");
    })
    $(".image8").live("mouseover", function(){
        $(".content-desc p").load("desc/image8.txt");
    })
    $(".image9").live("mouseover", function(){
        $(".content-desc p").load("desc/image9.txt");
    })
    $(".image10").live("mouseover", function(){
        $(".content-desc p").load("desc/image10.txt");
    })
    $(".image11").live("mouseover", function(){
        $(".content-desc p").load("desc/image11.txt");
    })
    $(".image12").live("mouseover", function(){
        $(".content-desc p").load("desc/image12.txt");
    })

    $(".vid1").live("mouseover", function(){
        $(".content-desc p").load("desc/vid1.txt");
    })
    $(".vid2").live("mouseover", function(){
        $(".content-desc p").load("desc/vid2.txt");
    })
    $(".vid3").live("mouseover", function(){
        $(".content-desc p").load("desc/vid3.txt");
    })
    $(".vid4").live("mouseover", function(){
        $(".content-desc p").load("desc/vid4.txt");
    })
    $(".vid5").live("mouseover", function(){
        $(".content-desc p").load("desc/vid5.txt");
    })
    $(".vid6").live("mouseover", function(){
        $(".content-desc p").load("desc/vid6.txt");
    })
    $(".vid7").live("mouseover", function(){
        $(".content-desc p").load("desc/vid7.txt");
    })
    $(".vid8").live("mouseover", function(){
        $(".content-desc p").load("desc/vid8.txt");
    })
    $(".vid9").live("mouseover", function(){
        $(".content-desc p").load("desc/vid9.txt");
    })
    $(".vid10").live("mouseover", function(){
        $(".content-desc p").load("desc/vid10.txt");
    })
    $(".vid11").live("mouseover", function(){
        $(".content-desc p").load("desc/vid11.txt");
    })
    $(".vid12").live("mouseover", function(){
        $(".content-desc p").load("desc/vid12.txt");
    })
    $(".vid13").live("mouseover", function(){
        $(".content-desc p").load("desc/vid13.txt");
    })
    $(".vid14").live("mouseover", function(){
        $(".content-desc p").load("desc/vid14.txt");
    })
    $(".vid15").live("mouseover", function(){
        $(".content-desc p").load("desc/vid15.txt");
    })
    $(".vid16").live("mouseover", function(){
        $(".content-desc p").load("desc/vid16.txt");
    })
    $(".vid17").live("mouseover", function(){
        $(".content-desc p").load("desc/vid17.txt");
    })
    $(".vid18").live("mouseover", function(){
        $(".content-desc p").load("desc/vid18.txt");
    })
    $(".vid19").live("mouseover", function(){
        $(".content-desc p").load("desc/vid19.txt");
    })
    $(".vid20").live("mouseover", function(){
        $(".content-desc p").load("desc/vid20.txt");
    })
    $(".vid21").live("mouseover", function(){
        $(".content-desc p").load("desc/vid21.txt");
    })
    $(".vid22").live("mouseover", function(){
        $(".content-desc p").load("desc/vid22.txt");
    })
})


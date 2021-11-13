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
    $(".web").click(function(){
        window.open("https://1910598john.github.io/jmcatamora/", "_blank")
    })
    $(".facebook").click(function(){
        window.open("https://shorturl.at/ewEX2", "_blank");
    })
    $(".instagram").click(function(){
        window.open("https://shorturl.at/cqwEJ", "_blank");
    })
    $(".youtube").click(function(){
        window.open("https://shorturl.at/deuK9", "_blank");
    })
    $(".github").click(function(){
        window.open("https://shorturl.at/kCPUX", "_blank");
    })
    $(".steam").click(function(){
        window.open("https://shorturl.at/fhH04", "_blank");
    })
    $("img").click(function(){
        $(".view").css("visibility", "visible");
        var content = $(this).clone();
        $(".view .content").append(content);
        $(".content").css({
            "position" : "absolute",
            "left" : "50%",
            "transform" : "translateX(-50%)"
        })
    })
})
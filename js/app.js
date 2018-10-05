$("#arrowDown").click(function() {
    $('html,body').animate({
            scrollTop: $("#t").offset().top
        },
        'slow');
});

var hackSeaInfo = {
    img: "url(../images/hacksea.png)",
    description: "For this project"
}

var haccInfo = {
    img: "url(../images/hacc.png)",
    description: "For this projectss"
}

var bluePlanetInfo = {
    img: "url(../images/blueplanet.png)",
    description: "For this projectssssssss444ssssss"
}

var marvelApiInfo = {
    img: "url(../images/marvelApi.png)",
    description: "For this projectssss3333sss"
}

var sushiInfo = {
    img: "url(../images/kunio.png)",
    description: "For this projectss12123sss"
}
var constructionInfo = {
    img: "url(../images/construction.png)",
    description: "For this projectzxczxcssss"
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

$(".projectGridItem").click(function() {
    modal.style.display = "block";
    $('body').css("overflow", "hidden");
    var projName = $(this).find(".projectTitle").text()
    $("#projName").text(projName);
    if ($(this).attr("id") == "hackSeaContainer"){
        $("#projImg").css("background-image", hackSeaInfo.img)
        $("#projDesc").text(hackSeaInfo.description)
    } else if ($(this).attr("id") == "hacc4EduContainer"){
      $("#projImg").css("background-image", haccInfo.img)
      $("#projDesc").text(haccInfo.description)
    } else if ($(this).attr("id") == "bluePlanetContainer"){
      $("#projImg").css("background-image", bluePlanetInfo.img)
      $("#projDesc").text(bluePlanetInfo.description)
    } else if ($(this).attr("id") == "marvelApiContainer"){
      $("#projImg").css("background-image", marvelApiInfo.img)
      $("#projDesc").text(marvelApiInfo.description)
    } else if ($(this).attr("id") == "sushiWebContainer"){
      $("#projImg").css("background-image", sushiInfo.img)
      $("#projDesc").text(sushiInfo.description)
    } else if ($(this).attr("id") == "constructionWebContainer"){
      $("#projImg").css("background-image", constructionInfo.img)
      $("#projDesc").text(constructionInfo.description)
    }
});


span.onclick = function() {
    modal.style.display = "none";
    $('body').css("overflow", "scroll");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $('body').css("overflow", "scroll");
    }
}

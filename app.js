$("#arrowDown").click(function() {
    $('html,body').animate({
            scrollTop: $("#t").offset().top
        },
        'slow');
});

var hackSeaInfo = {
    img: "url(./images/hacksea.png)",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut quam nec velit molestie cursus a in lacus. Vestibulum pharetra eros augue, id tempus mauris aliquam ac. Maecenas in felis in augue gravida facilisis ac id purus. Cras sit amet ex semper, tempor orci nec, pulvinar sem. Pellentesque nunc diam.",
    site: "https://kylelingat.github.io/hack-for-the-sea/",
    gitHub: "https://github.com/kylelingat/hack-for-the-sea"
}

var haccInfo = {
    img: "url(./images/hacc.png)",
    description: "For this projectss",
    site: "https://zakattack9.github.io/HACC4Edu/",
    gitHub: "https://github.com/kylelingat/HACC4Edu"
}

var bluePlanetInfo = {
    img: "url(./images/blueplanet.png)",
    description: "For this projectssssssss444ssssss",
    site: "http://infinite-power.s3-website-us-west-2.amazonaws.com/",
    gitHub: "https://github.com/AOE-Dylan/BluePlanet-Project"
}

var marvelApiInfo = {
    img: "url(./images/marvelApi.png)",
    description: "For this projectssss3333sss",
    site: "https://kylelingat.github.io/marvel-api/",
    gitHub: "https://github.com/kylelingat/marvel-api"
}

var sushiInfo = {
    img: "url(./images/kunio.png)",
    description: "For this projectss12123sss",
    site: "https://kylelingat.github.io/sushiwebsite/",
    gitHub: "https://github.com/kylelingat/sushiwebsite"
}
var constructionInfo = {
    img: "url(./images/construction.png)",
    description: "For this projectzxczxcssss",
    site: "https://kylelingat.github.io/construction-company-website/",
    gitHub: "https://github.com/kylelingat/construction-company-website"
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
        $("#projImgContainer").css("background-image", hackSeaInfo.img);
        $("#projDesc").text(hackSeaInfo.description);
        $("#visitSiteButton > a").attr("href", hackSeaInfo.site);
        $("#visitGithubButton > a").attr("href", hackSeaInfo.gitHub);
    } else if ($(this).attr("id") == "hacc4EduContainer"){
      $("#projImgContainer").css("background-image", haccInfo.img);
      $("#projDesc").text(haccInfo.description);
      $("#visitSiteButton > a").attr("href", haccInfo.site);
      $("#visitGithubButton > a").attr("href", haccInfo.gitHub);
    } else if ($(this).attr("id") == "bluePlanetContainer"){
      $("#projImgContainer").css("background-image", bluePlanetInfo.img);
      $("#projDesc").text(bluePlanetInfo.description);
      $("#visitSiteButton > a").attr("href", bluePlanetInfo.site);
      $("#visitGithubButton > a").attr("href", bluePlanetInfo.gitHub);
    } else if ($(this).attr("id") == "marvelApiContainer"){
      $("#projImgContainer").css("background-image", marvelApiInfo.img);
      $("#projDesc").text(marvelApiInfo.description);
      $("#visitSiteButton > a").attr("href", marvelApiInfo.site);
      $("#visitGithubButton > a").attr("href", marvelApiInfo.gitHub);
    } else if ($(this).attr("id") == "sushiWebContainer"){
      $("#projImgContainer").css("background-image", sushiInfo.img);
      $("#projDesc").text(sushiInfo.description);
      $("#visitSiteButton > a").attr("href", sushiInfo.site);
      $("#visitGithubButton > a").attr("href", sushiInfo.gitHub);
    } else if ($(this).attr("id") == "constructionWebContainer"){
      $("#projImgContainer").css("background-image", constructionInfo.img);
      $("#projDesc").text(constructionInfo.description);
      $("#visitSiteButton > a").attr("href", constructionInfo.site);
      $("#visitGithubButton > a").attr("href", constructionInfo.gitHub);
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

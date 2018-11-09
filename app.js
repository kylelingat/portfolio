$("#arrowDown").click(function() {
    $('html,body').animate({
            scrollTop: $("#t").offset().top
        },
        'slow');
});

var hackSeaInfo = {
    img: "url(./images/hacksea.png)",
    description: "This project was a hackathon project that placed second overall. The challenge was to design a website that improves debris reporting efficiency. I worked with a team of 5 (including me) and I took the role of the website designer and front-end developer. The main page follows a simple rounded box layout that links to the other pages. Every page has a vertical navigation menu.",
    img2: "url(./images/hacksea2.png)",
    description2: "This report debris page serves as a form for users to submit debris. This page improves reporting efficiency because it has better design and lets the user know what information to submit. The layout was made via CSS grid. The form doesn't actually 'submit' because we couldn't build a back-end in under 24 hours so it just submits mock data. ",
    img3: "url(./images/hacksea3.png)",
    description3: "This page is where you can see other users' reported debris and if you click on the debris it opens a modal that includes more information about the debris like who submitted it, the description, and the type which is basically everything you submitted from your form. You can also comment on the debris to give what you think about it and communicate with others to plan possible debris cleaning.",
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

function generateHTML(project){
}


var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

$(".projectGridItem").click(function() {
    modal.style.display = "block";
    $('body').css("overflow", "hidden");
    // var projName = $(this).find(".projectTitle").text()
    // $("#projName").text(projName);
    // if ($(this).attr("id") == "hackSeaContainer"){
    //     $("#modalContentGrid").empty();
    //     generateHTML("hackSea")
    //     $("#hackSeaImg1").css("background-image", hackSeaInfo.img);
    //     $("#visitSiteButton > a").attr("href", hackSeaInfo.site);
    //     $("#visitGithubButton > a").attr("href", hackSeaInfo.gitHub);
    //     $("#hackSeaDesc1").text(hackSeaInfo.description);
    //     $("#hackSeaImg2").css("background-image", hackSeaInfo.img2);
    //     $("#hackSeaDesc2").text(hackSeaInfo.description2);
    //     $("#hackSeaImg3").css("background-image", hackSeaInfo.img3);
    //     $("#hackSeaDesc3").text(hackSeaInfo.description3);
    //
    // } else if ($(this).attr("id") == "hacc4EduContainer"){
    //   $("#modalContentGrid").empty();
    //   generateHTML("hacc")
    //   // $("#projImg").css("background-image", haccInfo.img);
    //   // $("#projDesc").text(haccInfo.description);
    //   // $("#visitSiteButton > a").attr("href", haccInfo.site);
    //   // $("#visitGithubButton > a").attr("href", haccInfo.gitHub);
    // } else if ($(this).attr("id") == "bluePlanetContainer"){
    //   $("#modalContentGrid").empty();
    //   // $("#projImg").css("background-image", bluePlanetInfo.img);
    //   // $("#projDesc").text(bluePlanetInfo.description);
    //   // $("#visitSiteButton > a").attr("href", bluePlanetInfo.site);
    //   // $("#visitGithubButton > a").attr("href", bluePlanetInfo.gitHub);
    // } else if ($(this).attr("id") == "marvelApiContainer"){
    //   $("#modalContentGrid").empty();
    //   // $("#projImg").css("background-image", marvelApiInfo.img);
    //   // $("#projDesc").text(marvelApiInfo.description);
    //   // $("#visitSiteButton > a").attr("href", marvelApiInfo.site);
    //   // $("#visitGithubButton > a").attr("href", marvelApiInfo.gitHub);
    // } else if ($(this).attr("id") == "sushiWebContainer"){
    //   $("#modalContentGrid").empty();
    //   // $("#projImg").css("background-image", sushiInfo.img);
    //   // $("#projDesc").text(sushiInfo.description);
    //   // $("#visitSiteButton > a").attr("href", sushiInfo.site);
    //   // $("#visitGithubButton > a").attr("href", sushiInfo.gitHub);
    // } else if ($(this).attr("id") == "constructionWebContainer"){
    //   $("#modalContentGrid").empty();
    //   // $("#projImg").css("background-image", constructionInfo.img);
    //   // $("#projDesc").text(constructionInfo.description);
    //   // $("#visitSiteButton > a").attr("href", constructionInfo.site);
    //   // $("#visitGithubButton > a").attr("href", constructionInfo.gitHub);
    // }
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

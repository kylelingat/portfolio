$("#arrowDown").click(function() {
    $('html,body').animate({
            scrollTop: $("#t").offset().top
        },
        'slow');
});


var projects = {
    hackSeaInfo: {
        title: "Hack for the Sea Hackathon 2nd Place",
        mainImg: "url(./images/hacksea.png)",
        description: "This project was a hackathon project that placed second overall. The challenge was to design a website that improves debris reporting efficiency. I worked with a team of 5 (including me) and I took the role of the website designer and front-end developer. The main page follows a simple rounded box layout that links to the other pages. Every page has a vertical navigation menu.",
        img2: "url(./images/hacksea2.png)",
        description2: "This report debris page serves as a form for users to submit debris. This page improves reporting efficiency because it has better design and lets the user know what information to submit. The layout was made via CSS grid. The form doesn't actually 'submit' because we couldn't build a back-end in under 24 hours so it just submits mock data. ",
        img3: "url(./images/hacksea3.png)",
        description3: "This page is where you can see other users' reported debris and if you click on the debris it opens a modal that includes more information about the debris like who submitted it, the description, and the type which is basically everything you submitted from your form. You can also comment on the debris to give what you think about it and communicate with others to plan possible debris cleaning.",
        site: "https://kylelingat.github.io/hack-for-the-sea/",
        gitHub: "https://github.com/kylelingat/hack-for-the-sea"
    },

    haccInfo: {
        title: "HACC4Edu Hackathon 1st Place",
        mainImg: "url(./images/hacc.png)",
        description: "For this projectss",
        site: "https://zakattack9.github.io/HACC4Edu/",
        gitHub: "https://github.com/kylelingat/HACC4Edu"
    },

    bluePlanetInfo: {
        title: "BluePlanet Foundation Project",
        mainImg: "url(./images/blueplanet.png)",
        description: "For this projectssssssss444ssssss",
        site: "http://infinite-power.s3-website-us-west-2.amazonaws.com/",
        gitHub: "https://github.com/AOE-Dylan/BluePlanet-Project"
    },

    marvelApiInfo: {
        title: "Marvel API Project",
        mainImg: "url(./images/marvelApi.png)",
        description: "For this projectssss3333sss",
        site: "https://kylelingat.github.io/marvel-api/",
        gitHub: "https://github.com/kylelingat/marvel-api"
    },

    sushiInfo: {
        title: "Sushi Website Mockup",
        mainImg: "url(./images/kunio.png)",
        description: "For this projectss12123sss",
        site: "https://kylelingat.github.io/sushiwebsite/",
        gitHub: "https://github.com/kylelingat/sushiwebsite"
    },
    constructionInfo: {
        title: "Construction Website Mockup",
        mainImg: "url(./images/construction.png)",
        description: "For this projectzxczxcssss",
        site: "https://kylelingat.github.io/construction-company-website/",
        gitHub: "https://github.com/kylelingat/construction-company-website"
    },
}

for (var key in projects) {
    var projectGridItem = document.createElement("div");
    projectGridItem.id = `${key}Container`
    projectGridItem.className = 'projectGridItem';
    $("#projectGridContainer").append(projectGridItem);

    var projectImageBackground = document.createElement("div");
    projectImageBackground.className = "projectImageBackground";
    $(projectGridItem).append(projectImageBackground);

    var projectImage = document.createElement("div");
    projectImage.className = "projectImage";
    $(projectImageBackground).append(projectImage)
    $(projectImage).css("background-image", projects[key].mainImg)

    var projectTitle = document.createElement("div");
    projectTitle.className = "projectTitle";
    var projectTitleText = document.createElement("h2")
    $(projectTitle).append(projectTitleText)
    $(projectTitleText).text(projects[key].title)

    $(projectGridItem).append(projectTitle)
}
function generateHTML(project) {
    if (project === "hackSea") {
        $(".contentContainer").empty();

        var projImageBackground = document.createElement("div");
        projImageBackground.id = "hackSeaImg1"
        projImageBackground.className = "projImageBackground";
        $('.contentContainer').append(projImageBackground);

        var projImg = document.createElement("div");
        projImg.className = "projImg";
        $(projImg).css("background-image", projects.hackSeaInfo.mainImg);
        $(projImageBackground).append(projImg)
        $('.contentContainer').append(projImageBackground);

        var buttonGrid = document.createElement("div");
        buttonGrid.className = "buttonGrid";
        $(".contentContainer").append(buttonGrid);
        var visitSiteButton = document.createElement("div")
        visitSiteButton.className = "visitSiteButton";
        var siteA = document.createElement("a");
        $(siteA).attr("target", "_blank");
        $(siteA).attr("href", projects.hackSeaInfo.site);
        $(siteA).text("Visit Site")
        $(visitSiteButton).append(siteA);
        var visitGithubButton = document.createElement("div")
        visitGithubButton.className = "visitGithubButton";
        var githubA = document.createElement("a");
        $(githubA).attr("target", "_blank");
        $(githubA).attr("href", projects.hackSeaInfo.gitHub);
        $(githubA).text("Visit Github")
        $(visitGithubButton).append(githubA);
        $('.buttonGrid').append(visitSiteButton);
        $('.buttonGrid').append(visitGithubButton);

        var projDesc = document.createElement("div");
        projDesc.className = "projDesc";
        var projDescText = document.createElement("h1");
        projDescText.className = "projDescText";
        $(projDescText).text(projects.hackSeaInfo.description)
        $(projDesc).append(projDescText);
        $('.contentContainer').append(projDesc);

        var projImageBackground2 = document.createElement("div");
        projImageBackground2.id = "hackSeaImg2"
        projImageBackground2.className = "projImageBackground";
        $('.contentContainer').append(projImageBackground2);

        var projImg2 = document.createElement("div");
        projImg2.className = "projImg";
        $(projImg2).css("background-image", projects.hackSeaInfo.img2);
        $(projImageBackground2).append(projImg2)
        $('.contentContainer').append(projImageBackground2);

        var projDesc2 = document.createElement("div");
        projDesc2.className = "projDesc";
        var projDescText2 = document.createElement("h1");
        projDescText2.className = "projDescText";
        $(projDescText2).text(projects.hackSeaInfo.description2);
        $(projDesc2).append(projDescText2);
        $('.contentContainer').append(projDesc2);










        var projImageBackground3 = document.createElement("div");
        projImageBackground3.id = "hackSeaImg3"
        projImageBackground3.className = "projImageBackground";
        $('.contentContainer').append(projImageBackground3);

        var projImg3 = document.createElement("div");
        projImg3.className = "projImg";
        $(projImg3).css("background-image", projects.hackSeaInfo.img3);
        $(projImageBackground3).append(projImg3)
        $('.contentContainer').append(projImageBackground3);

        var projDesc3 = document.createElement("div");
        projDesc3.className = "projDesc";
        var projDescText3 = document.createElement("h1");
        projDescText3.className = "projDescText";
        $(projDescText3).text(projects.hackSeaInfo.description3);
        $(projDesc3).append(projDescText3);
        $('.contentContainer').append(projDesc3);


        // var projImg = document.createElement("div");
        // projImg.className = "projImg";
        // $(projImg).css("background-image", projects.hackSeaInfo.mainImg);
        // $('.contentContainer').append(projImg)
    } else if (project === "hacc"){
      $(".contentContainer").empty();
      var projImg = document.createElement("div");
      projImg.className = 'projImg'
      $(projImg).css("background-image", projects.haccInfo.mainImg);
      $('.contentContainer').append(projImg);
    }
}


var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

$(".projectGridItem").click(function() {
    modal.style.display = "block";
    $('body').css("overflow", "hidden");
    var projName = $(this).find(".projectTitle").text();
    $("#projName").text(projName);
    if ($(this).attr("id") === "hackSeaInfoContainer") {
        generateHTML("hackSea");
    } else if ($(this).attr("id") === "haccInfoContainer"){
      $("#modalContentGrid").empty();
      generateHTML("hacc");
    }
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

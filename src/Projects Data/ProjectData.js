import hackSeaMain from '../images/hacksea.png'
import hackSea2 from '../images/hacksea2.png'
import hackSea3 from '../images/hacksea3.png'
import haccMain from '../images/hacc.png'
import bluePlanetMain from '../images/blueplanet.png'
import marvelApiMain from '../images/marvelApi.png' 

var projectData = {
    hackSeaInfo: {
        title: "Hack for the Sea Hackathon 2nd Place",
        mainImg: hackSeaMain,
        description: "This project was a hackathon project that placed second overall. The challenge was to design a website that improves debris reporting efficiency. I worked with a team of 5 (including me) and I took the role of the website designer and front-end developer. Most of the effort spent went through the front-end because we needed the visuals to 'wow' the judges. The whole website was built under 24 hours, I estimate that we spent 20 hours coding and 4 hours sleeping that day.",
        img2: hackSea2,
        description2: "This report debris page serves as a form for users to submit debris. This page improves reporting efficiency because it has better design and lets the user know what information to submit. The layout was made via CSS grid. The form doesn't actually 'submit' because we couldn't build a back-end in under 24 hours so it just submits mock data.",
        img3: hackSea3,
        description3: "This page is where you can see other users' reported debris and if you click on the debris it opens a modal that includes more information about the debris like who submitted it, the description, and the type which is basically everything you submitted from your form. You can also comment on the debris to give what you think about it and communicate with others to plan possible debris cleaning.",
        urls: {
          site: "https://kylelingat.github.io/hack-for-the-sea/",
          gitHub: "https://github.com/kylelingat/hack-for-the-sea"
      }
    },

    haccInfo: {
        title: "HACC4Edu Hackathon 1st Place",
        mainImg: haccMain,
        description: "The HACC4Edu hackathon was a 24 hour state hackathon. My team competed in the high school divison representing Waipahu High School. We came in up against private and charter schools but we managed to place first. We were tasked with improving algae debris reporting efficiency. We developed a website that improves the efficiency by a online forum and a heat map of algae debris.",
        urls: {
            site: "https://zakattack9.github.io/HACC4Edu/",
            gitHub: "https://github.com/kylelingat/HACC4Edu"
        }
    },

    bluePlanetInfo: {
        title: "BluePlanet Foundation Project",
        mainImg: bluePlanetMain,
        description: "This project was for school. Businesses came to our class and gave their pitches of problems they had. As students, we had to decide which business we're going to pick. We picked BluePlanet because they had a simple problem that we had a solution for. We decided on making an educational reflex-based game that improves clean energy and fossil fuels awareness.",
        urls: {
            site: "http://infinite-power.s3-website-us-west-2.amazonaws.com/",
            gitHub: "https://github.com/AOE-Dylan/BluePlanet-Project"
        }
    },

    marvelApiInfo: {
        title: "Marvel API Project",
        mainImg: marvelApiMain,
        description: "This was a personal project that I did. I wanted to play around with an API and as a big Marvel fan, I thoght that working with the MarvelAPI should be fun. Currently, all the website does is display MCU characters and if you click on the characters, it shows you their description is they have one. I'm most likely going to improve on this project and add more functionality such as displaying comics or other things in the API.",
        urls: {
            site: "https://kylelingat.github.io/marvel-api/",
            gitHub: "https://github.com/kylelingat/marvel-api"
        }
    },

    sushiInfo: {
        title: "Sushi Website Mockup",
        mainImg: "url(./images/kunio.png)",
        description: "For this projectss12123sss",
        urls: {
            site: "https://kylelingat.github.io/sushiwebsite/",
            gitHub: "https://github.com/kylelingat/sushiwebsite"
        }
    },
    constructionInfo: {
        title: "Construction Website Mockup",
        mainImg: "url(./images/construction.png)",
        description: "For this projectzxczxcssss",
        urls: {
            site: "https://kylelingat.github.io/construction-company-website/",
            gitHub: "https://github.com/kylelingat/construction-company-website"
        }
    },
}
export default projectData;
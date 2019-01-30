import hackSeaMain from '../images/hacksea.png'
import hackSea2 from '../images/hacksea2.png'
import hackSea3 from '../images/hacksea3.png'
import haccMain from '../images/hacc.png'
import hacc2 from '../images/hacc2.png'
import hacc3 from '../images/hacc3.png'
import bluePlanetMain from '../images/blueplanet.png'
import bluePlanet2 from '../images/blueplanet2.png'
import bluePlanet3 from '../images/blueplanet3.png'
import bluePlanet4 from '../images/blueplanet4.png'
import bluePlanet5 from '../images/blueplanet5.png'
import marvelApiMain from '../images/marvelApi.png'
import marvelApi2 from '../images/marvelApi2.png' 

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
        img2: hacc2,
        description2: "Next is the forum page. The forum page is where users can discuss algae cleaning. You can see on the right of the forum is a calendar that'll show when tides are low enough to be safe for cleaning. I would say this is a more efficient way of communicating compared to other mediums such as FaceBook Groups or iMessage.",
        img3: hacc3,
        description3: 'We integrated Google Maps into our project so we can visualize plot cleanup. The plots are individual areas that have different amount of algae. You can register your plot by clicking on a plot and clicking register. This is a great way to visualize on cleanup progress because not every plot progresses at the same rate. ',
        urls: {
            site: "https://zakattack9.github.io/HACC4Edu/",
            gitHub: "https://github.com/kylelingat/HACC4Edu"
        }
    },

    bluePlanetInfo: {
        title: "BluePlanet Foundation Project",
        mainImg: bluePlanetMain,
        description: "The BluePlanet Foundation is a community organization that seeks to help Hawaii's fossil fuel problems by providng clean energy. In my Junior year of High School, we we're given the opportunity to create applications for businesses that came to our school and pitched their app ideas. BluePlanet's pitch was that they wanted more awareness of clean energy use. My team and I decided on making an education reflex-based game.",
        img2: bluePlanet2,
        desc2: "The game is simple. You have two bars, one is your renewable energy bar and the latter is your pollution bar. Your goal is to fill up your renewable energy bar every round by clicking on renewable energy bubbles while avoiding polluition bubbles. Once you fill up your energy bar, you move to the next round and your energy bar resets. Clicking on pollution bubbles significantly fills up your polluition bar and it only decreases by a tiny amount each round; once your pollution bar fills up all the way, you lose the game. We tried to integrate as much real life aspects as we could. For example, fossil fuels do give a great amount of energy but also a great amount of pollution. So clicking on an oil rig bubble for example gives you a lot of energy, however it gives you a lot of pollution.",
        img3: bluePlanet4,
        desc3: "Here is an example of how we integrated the educational aspects into the game. After a round, a quiz appears and you have to answer a question related to pollution/clean energy. Answering correct will reward the user with an upgrade in-game that helps them succeed.",
        img4: bluePlanet3,
        desc4: "We also added a bunch of energy facts that the user can look into by pressing the information button",
        img5: bluePlanet5,
        desc5: "Again, we tried to add as much as the educational aspect as possible. Whenever you pause the game, you get a random fact about energy!",
        urls: {
            site: "http://infinite-power.s3-website-us-west-2.amazonaws.com/",
            gitHub: "https://github.com/AOE-Dylan/BluePlanet-Project"
        }
    },

    marvelApiInfo: {
        title: "Marvel API Project",
        mainImg: marvelApiMain,
        description: "This was a personal project that I did. I wanted to play around with an API and as a big Marvel fan, I thoght that working with the MarvelAPI should be fun. Currently, all the website does is display MCU characters and if you click on the characters, it shows you their description is they have one. I'm most likely going to improve on this project and add more functionality such as displaying comics or other things in the API. I'm almost looking foward to recreating this project with React, but we'll save that for another time.",
        img2: marvelApi2,
        desc2: 'Here is an example of what it would look like if you were to click on someone',
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
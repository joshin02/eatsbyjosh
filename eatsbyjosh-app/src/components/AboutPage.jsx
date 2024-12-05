import "./AboutStyle.css"
import Navigation from "./NavigationContent"

function About() {
    return (
        <div>
            <main>
            <div className="summary">
                <img id="me" src="/img/me.JPG" alt="picture of myself"/>
                <div className="summaryContent">
                <h1 className="about">About Me</h1>
                <p>
                    Welcome to Eats by Josh! I created this site to document and highlight all the different foods I cook and eat. I’m a self-taught cook learning from watching youtube, 
                    tiktoks, ig reels, and watching my 엄마 (mom) cook from afar LOL. I’m going to be as transparent as I can on this site, showing the highlights but also lowlights in my 
                    culinary journey! Thanks for checking out the site and if you ever decide to try making any of the recipes here, I would be super appreciative if you tagged me&nbsp; 
                    <a href="https://www.instagram.com/eatsby.josh/" class="igmention">@eatsbyjosh</a>&nbsp;on ig! 
                </p>
                </div>
            </div>
            <div>
                <h1 className="about">Site Navigation</h1>
                <Navigation/>
            </div>
            </main>
        </div>
    );
  }
  
  export default About;


import React from "react";
import "./aboutus.css";
import freddyV from "./images/freddyV.jpg";
import antonioF from "./images/antonioF.jpg";
import { BsTwitter } from "react-icons/bs";

function AboutUs() {
  return (
    <React.Fragment>
      <div className="about-container">
        <div className="about-header">A little about us...</div>
        <div className="person-card">
          <img className="person-picture" src={freddyV} alt="Freddys pic"></img>
          <p className="person-name">Freddy Valdez</p>
          <a
            className="about-twitter-link"
            href="https://twitter.com/FantasyYonko"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="about-twitter-logo"></BsTwitter> @FantasyYonko
          </a>
          <p className="person-bio">
            Hello World! Yes, I am a software developer. This very site, that I
            hope you enjoy, was designed by yours truely. I am currently going
            to school for a Bachelors in Software Development. My passion for
            this field came from Fantasy Football oddly enough. My hobbies are
            to leverage data, computers, and just a sprinkle of psychology to
            give me an edge in fantasy football. I've been told that Im a freak
            in the sheets... google sheets... come on now this site is rated W
            for Winners Only! You can probably guess that I'm a dad based on
            that "A" Grade dad joke. I am blessed with 2 beautiful girls, a
            loving wife, and 3 knucklehead dogs. I'm a Raiders fan through thick
            and thin, mostly thick, it's a toxic relationship that I love.
            <br></br>
            <br></br>
            My Goal: I have a very particular set of skills... skills that make
            me a nightmare for people like your fantasy opponent. I have playing
            fantasy football since freshman year in high school(2009). I play in
            5-10 leagues of all types every year. I want to give you the same
            process I use to make calculated risk to win it all.
          </p>
        </div>
        <div className="person-card">
          <img
            className="person-picture"
            src={antonioF}
            alt="Antonios pic"
          ></img>
          <p className="person-name">Antonio Fernandez</p>
          <a
            className="about-twitter-link"
            href="https://twitter.com/TrustingTonio"
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter className="about-twitter-logo"></BsTwitter>{" "}
            @TrustingTonio
          </a>
          <p className="person-bio">
            I graduated from the University of Arizona #BearDown and started my
            career moving to the DC metro area to work for a global media and
            financial data/ analytics conglomerate. Then, I took a role with one
            of the leading software providers in the world. In 2022, I decided
            to combine my ambition and passion to start Going For 2 Fantasy
            Football. I currently lives in Chandler, AZ with my son and wife. I
            loves spending time with my two dogs Bagheera(Black Lab) and
            Barnaby(Cockapoo). I grew up playing basketball, baseball, and
            soccer. I was part of the Arizona Olympic Development Program and
            state champion in soccer. I'm a lifelong 49ers fan and played
            running back in high school.
            <br></br>
            <br></br>
            My Goal: The average fantasy manager goes into the draft with an
            8.3% (1 in 12) chance of winning the league, so much like Going For
            2 at the end of a game, I want you to take educated risks that help
            skew the odds and bring you home a championship. Winning while
            keeping the grind of fantasy football fun and exciting is my motto.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AboutUs;

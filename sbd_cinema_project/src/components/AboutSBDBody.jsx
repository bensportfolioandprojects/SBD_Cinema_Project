import React from "react";

function AboutSBDBody() {
    return (
        <div className="aboutsbdbody--container">
        <div className="aboutsbdintro">
            <p>We are a group of 4 up and coming software engineers who built this website from the ground up.
            The group consists of Ben Phillips, Elias Sadek, Daniel Charles Conroy and Richard Edwin de Young.
            We are currently training under QA Ltd and will soon be working at the MET Office in Devon, England.
            </p>
        </div>
        <div  className="members">
            <h2> Members of the team:
                <ul>
           Ben Phillips (Scrum Master) - @BenPhillipsQAC - Ben@QACinemas.com<br/>
           Elias Sadek - @EliasSadekQAC - Elias@QACinemas.com<br/>
           Daniel Charles Conroy - @DanielCharlesConroyQAC - Daniel@QACinemas.com<br/>
           Richard Edwin de Young - @RichardEdwindeYoungQAC - Richard@QACinemas.com
                </ul>
           </h2>
        </div>
        <h3 className="sbdlink">
            Learn more about who we are and what we do: <a href ="www.SBDdesign.com">here</a>
        </h3>

        
        <h2 className="scrumtitle">The Scrum Process</h2>
        <div className="scruminfo">
            <p>During the production of this site, we used the Scrum method to organise not only our tasks but the team members also.
            Scrum methodology is a framework that assists companies in delivering products of the highest possible value but streamlining the development process.
            </p>
        </div>
        
        <div className="scrum-flex">
            <div className="scrumquote">
                As stated on the <a href="https://www.agilealliance.org/wp-content/uploads/2019/08/Scrumorg-Logo_tagline-TM.png">Scrum Website:</a><br/>
                "In a nutshell, Scrum requires a Scrum Master to foster an environment where:
                <ol>
                    <li>A Product Owner orders the work for a complex problem into a Product Backlog.</li>
                    <li>The Scrum Team turns a selection of the work into an Increment of value during a Sprint.</li>
                    <li>The Scrum Team and its stakeholders inspect the results and adjust for the next Sprint.</li>
                    <li> Repeat"</li>
                </ol>
            </div>
            <img src="https://cdn.worldvectorlogo.com/logos/scrumorg-1.svg" alt="scrumlogo" className="scrumlogo"/>
        </div>
        
            <p className="sprintinfo">
            We had two 5 day long sprints to produce the site. Throughout, the Scrum Master ran through daily sprint review meetings to go through what each member had finished and what each member needed to work on.<br/>
            We reached a point where some members had finished their slated work and so could help out with some of the heavier tasks. At the start of sprint 1, using planningpoker.com we assigned all user stories a value as to how difficult it would be to complete.
            We then allocated the tasks out based on a total amount of task points, ensuring that no one member had more work than another and the maximum output could be achieved.
            </p>
        
        

        <h3>If you wish to contact us with any enquiries or suggestions, please do so on our <a href="contactus.html">Contact Page</a></h3>
        </div>
    )
}

export default AboutSBDBody;
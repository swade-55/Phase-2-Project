import React from "react";

function About() {
    return (
        <div id="about">
            <h2>Labor Capacity Planner</h2>
            <p>In wholesale grocery, the backbone of any good day to day operation involves a combination of 2 factors: keeping good attendance and tracking associate related productivity metrics. In most instances, this type of data would reside in a Microsoft Excel spreadsheet. Another name for this would be Master Operating Plan or MOP for short. </p>
            <p>Examples of some productivity metrics would consist of uptime(the total length of time the associate was engaged in their primary job function), units per hour(total units that associate has selected per hour), attendance(number of days they attended work divided by number of days they were scheduled multiplied by 100). Each associate would have their individual variations of the above metrics displayed as part of their associate card. Wrapping all of it together, each metric would be totalled or averaged based on the relevance to each metric and then displayed towards the top of the spreadsheet. I like to call this section the "Executive Summary" tab. </p>
            <p>Touching on some of the limitations of Microsoft Excel, it has many different pros, but one of the bigger cons is the lack of reliability between updates made by different users. User A could make a change to a specific part while user B could make their own changes as well. Between transfers of files between the two users, there might be a slight chance that data can be inconsistent between transfers. Many times, there has to be a "master" copy of the spreadsheet stored in a shared drive to help mitigate the off chance that the file itself was corrupted. All of this unnecessary housekeeping can be avoided by rebuilding the same spreadsheet as a web application.</p>
            <div>
                <h3>Links</h3>
                <a href="https://github.com/swade-55/Phase-2-Project/tree/test-branch-1">GitHub</a>
                <br/>
                <a href="https://www.linkedin.com/in/samuel-wade-b45473a1/">LinkedIn</a>
            </div>
        </div>
    );
}

export default About;

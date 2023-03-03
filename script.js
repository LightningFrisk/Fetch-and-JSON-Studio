// TODO: add code here

//fetching data
//turning it into an array of ojbects using .json()
//make template interating thru the array 
//to a template showing the different astronauts

window.addEventListener ("load", (event) => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) 
    {
        response.json().then( function(json){
            const astronauts = document.getElementById("container");
            return 0;
            // astronauts.innerHTML = `
            // <div class="astronaut">
            // <div class="bio">
            //     <h3>Mae Jemison</h3>
            //     <ul>
            //         <li>Hours in space: 190</li>
            //         <li>Active: false</li>
            //         <li>Skills: Physician, Chemical Engineer</li>
            //     </ul>
            // </div>
            // <img class="avatar" src="images/mae-jemison.jpg">
            // </div>
            //     `;
        });
    });
});

// Accessing array of objects stuff 
// commands[i].commandType

//  EXAMPLE FROM BOOK
// response.json().then( function(json) {
//     const div = document.getElementById("weather-conditions");
//     // Add HTML that includes the JSON data
//     div.innerHTML = `
//        <ul>
//           <li>Temp ${json.temp}</li>
//           <li>Wind Speed ${json.windSpeed}</li>
//           <li>Status ${json.status}</li>
//           <li>Chance of Precip ${json.chanceOfPrecipitation}</li>
//        </ul>
//     `;
//  });
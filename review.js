// create onjects of each person
// have a random number generated. The number will be one through x when the number is called it will place number that object is taht matches with the random on the screen. 
// The arrow buttons when pressed and then add +1 or -1 to the number and then the page will change since the number will change
let pic = document.querySelector('.pic');
let reviewOrder = 1;
let job = document.querySelector('.job');
let namefl = document.querySelector('.name');
let descrip = document.querySelector('.description');

function order(type){
    switch(type){
        case 1:
            namefl.textContent =  Erik.name;
            job.textContent = Erik.occupation;
            descrip.textContent = Erik.description;
            pic.src = "review1.jpg"
            break;
        case 2:
            namefl.textContent =  Susan.name;
            job.textContent = Susan.occupation;
            descrip.textContent = Susan.description;
            pic.src = "review" + reviewOrder + '.jpg';
            break;
        case 3:
            namefl.textContent =  Jack.name;
            job.textContent = Jack.occupation;
            descrip.textContent = Jack.description;
            pic.src = "review" + reviewOrder + '.jpg';
            break;
        case 4:
            namefl.textContent =  Kevin.name;
            job.textContent = Kevin.occupation;
            descrip.textContent = Kevin.description;
            pic.src = "review" + reviewOrder + '.jpg';
            break;
        case 5:
            namefl.textContent =  Joe.name;
            job.textContent = Joe.occupation;
            descrip.textContent = Joe.description;
            pic.src = "review" + reviewOrder + '.jpg';
            break;
        default:
            namefl.textContent =  Erik.name;
            job.textContent = Erik.occupation;
            descrip.textContent = Erik.description;
            pic.src = "review1.jpg";
            break;
}

}
const Erik = {
name: "Erik Sabin",
occupation: "Field Tech Support",
description: "Erik has spent alot of time working on coding. It has been a dream of his since he was in highschool. \"how cool would it be too make a game one day!\" I thought to myself" +
"I will work hard one day to achieve my goals and live a fulfilling life!"

}

const Susan = {
name: "Susan Wocowski",
occupation: "Web Designer",
description: "Susan is a Web designer. She makes alot of money and she drives fast cars all day. She make things look good while looking good at the same time. Web designers cool people"
}
const Jack = {
name: "Jack guzbuski",
occupation: "Technical writer",
description: "Jack is a technical writer. He writes things about tech things all day log. He is a very charismatic person. He is so chill you would think you were talking to him in a freezer"
}
const Kevin = {
name: "Kevin Kloepfer",
occupation: "Plumber",
description: "Kevin is a plumber. He just recently got married and bought a house. He is a hard worker and will get things that need to be done, DONE!"
}
const Joe = {
name: "Joe Smoe",
occupation: "Garbage Man",
description: "Joe Smoe lives a simple life. Does he know he can make more money being something other than a garbage man? Yes, but he loves what he does aand works hard. In the end he is happy"
}


document.querySelector(".btnChange").addEventListener('click', function(){
    reviewOrder = Math.trunc(Math.random(1) * 5) + 1;
    order(reviewOrder);
    console.log(reviewOrder);

})

document.querySelector(".btnNext").addEventListener('click', function(){
   
    if(reviewOrder >= 0 && reviewOrder < 5){
    reviewOrder = reviewOrder + 1;
    order(reviewOrder);
    console.log(reviewOrder);
    }


})

document.querySelector(".btnBack").addEventListener('click', function(){
   
if(reviewOrder > 0 && reviewOrder < 6){
    reviewOrder = reviewOrder - 1;
    order(reviewOrder);
    console.log(reviewOrder);
    
}

    
})






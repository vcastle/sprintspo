// Please see documentation at https://docs.microsoft.com/aspnet/core/client—side/bundling—and—minification
// for details on configuring this project to bundle and minify static web assets.

// quotes
var quotes = [
    "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>",
    "\"Alone we can do so little, together we can do so much.\"<br>-  Helen Keller",
    "\"If everyone is moving forward together, then success takes care of itself.\"<br>-   Henry Ford",
    "\"Everything you’ve ever wanted is on the other side of fear.\"<br>-  George Addair",
    "\"I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.\"<br>-  Jimmy Dean",
    "\"Believe you can and you’re halfway there.\"<br>-  Theodore Roosevelt",
    "\"Too many of us are not living our dreams because we are living our fears.\"<br>-  Les Brown",    
    "\"Strive not to be a success, but rather to be of value.\"<br>-  Albert Einstein",
    "\"I am not a product of my circumstances. I am a product of my decisions.\"<br>-  Stephen Covey",
    "\"The most common way people give up their power is by thinking they don’t have any.\"<br>-  Alice Walker",
    "\"Remember that not getting what you want is sometimes a wonderful stroke of luck.\"<br>-  Dalai Lama",    
    "\"I would rather die of passion than of boredom.\"<br>-  Vincent van Gogh",
    "\"An office is a place where dreams come true.\"<br>- Michael Scott",
    "\"A person who never made a mistake never tried anything new.\"<br>-  Albert Einstein",
    "\"If you want to lift yourself up, lift up someone else.\"<br>-  Booker T. Washington",
    "\"If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.\"<br>-  Sheryl Sandberg",    
    "\"Everything has beauty, but not everyone can see.\"<br>-  Confucius",
    "\"The only person you are destined to become is the person you decide to be.\"<br>-  Ralph Waldo Emerson",
    "\"Nothing will work unless you do.\"<br>-  Maya Angelou",
    "\"What we achieve inwardly will change outer reality.\"<br>-  Plutarch",    
    "\"The Way Get Started Is To Quit Talking And Begin Doing.\"<br>-  Walt Disney",
    "\"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.\"<br>-  Winston Churchill",
    "\"Don’t Let Yesterday Take Up Too Much Of Today.\"<br>-  Will Rogers",
    "\"If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.\"<br>-  Steve Jobs",    
    "\"Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.\"<br>-  Og Mandino",
    "\"Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.\"<br>-  Johann Wolfgang Von Goethe",

]

// generates a new quote from array
function newQuote() {
    // console.log(quotes[0],'— me');
    const randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
    //change gradient
    document.body.style.backgroundImage = "url('https://source.unsplash.com/collection/2002837/1600x900')";

}

//date
function startDate() {
    const d = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
  }

  //time
  function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

//copy quote to clipboard
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


//pexels
// var client = new PexelsClient("<563492ad6f9170000100000192e7fa55845442a5a848d943857a5d52>");

// var results = client.SearchAsync("business").Result; 

// foreach (var image in results.Photos) {
//     Console.WriteLine(image.Src.Medium);
// };

////unsplash
// ES Modules syntax
// import Unsplash from 'unsplash-js';
 
// // require syntax
// const Unsplash = require('unsplash-js').default;
 
// const unsplash = new Unsplash({
//   applicationId: "{c3e93d31f84c83ffc2ce26875f09065273e8de451fae8c1ad42cd2034bd7630e}",
//   secret: "{a1d983208379f3fc5f120c75df8fa5629da378f1d3a9a926f33e68ee5ac74566}",
//   headers: {
//     "X-Custom-Header": "foo"
//   }
// });

// const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//   "public",
//   "read_user",
//   "write_user",
//   "read_photos",
//   "write_photos"
// ]);

// location.assign(authenticationUrl);

// // The OAuth code will be passed to your callback url as a querystring
 
// unsplash.auth.userAuthentication(query.code)
//   .then(toJson)
//   .then(json => {
//     unsplash.auth.setBearerToken(json.access_token);
//   });
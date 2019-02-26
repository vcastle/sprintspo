// Please see documentation at https://docs.microsoft.com/aspnet/core/client—side/bundling—and—minification
// for details on configuring this project to bundle and minify static web assets.

// quotes
var quotes = [
    'Alone we can do so little, together we can do so much. —Helen Keller',
    'If everyone is moving forward together, then success takes care of itself. —Henry Ford',
    'Everything you’ve ever wanted is on the other side of fear.— George Addair',
    'I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. —Jimmy Dean',
    'Believe you can and you’re halfway there. —Theodore Roosevelt',
    'Too many of us are not living our dreams because we are living our fears. —Les Brown',    
    'Strive not to be a success, but rather to be of value. —Albert Einstein',
    'I am not a product of my circumstances. I am a product of my decisions. —Stephen Covey',
    'The most common way people give up their power is by thinking they don’t have any. —Alice Walker',
    'Remember that not getting what you want is sometimes a wonderful stroke of luck. —Dalai Lama',    
    'I would rather die of passion than of boredom. —Vincent van Gogh',
    'A person who never made a mistake never tried anything new. ——Albert Einstein',
    'If you want to lift yourself up, lift up someone else. —Booker T. Washington',
    'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. —Sheryl Sandberg',    
    'Everything has beauty, but not everyone can see. —Confucius',
    'The only person you are destined to become is the person you decide to be. —Ralph Waldo Emerson',
    'Nothing will work unless you do. —Maya Angelou',
    'What we achieve inwardly will change outer reality. —Plutarch',    
    'The Way Get Started Is To Quit Talking And Begin Doing. —Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty. —Winston Churchill',
    'Don’t Let Yesterday Take Up Too Much Of Today. —Will Rogers',
    'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You. —Steve Jobs',    
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. —Og Mandino',
    'Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do. —Johann Wolfgang Von Goethe',

]

function newQuote() {
    // console.log(quotes[0],'— me');
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
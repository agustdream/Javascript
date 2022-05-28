var quotesArray = 
[ 
    {
        "author": "Isaac Marion",
        "quote": "I want to change my punctuation. I long for exclamation marks, but I'm drowning in ellipses."
    },

    {
        "author": "Isaac Marion",
        "quote": "In my mind I am eloquent; I can climb intricate scaffolds of words to reach the highest cathedral ceilings and paint my thoughts. But when I open my mouth, everything collapses."
    },

    {
        "author": "Isaac Marion",
        "quote": "You should always be taking pictures, if not with a camera then with your mind. Memories you capture on purpose are always more vivid than the ones you pick up by accident."
    },

    {
        "author": "Isaac Marion",
        "quote": "There is no ideal world for you to wait around for. The world is always just what it is now, and it's up to you how you respond to it."
    },

    {
        "author": "Isaac Marion",
        "quote": "What wonderful thing didn't start out scary?"
    },
    
    {
        "author": "Isaac Marion",
        "quote": "Writing isn't letters on paper. It's communication. It's memory."
    },

    {
        "author": "Isaac Marion",
        "quote": "I am Dead, but it's not so bad. I've learned to live with it."
    },

    {
        "author": "Isaac Marion",
        "quote": "It frustrates and fascinates me that we'll never know for sure, that despite the best efforts of historians and scientists and poets, there are some things we'll just never know. What the first song sounded like. How it felt to see the first photograph. Who kissed the first kiss, and if it was any good."
    },

    {
        "author": "Isaac Marion",
        "quote": "We are where we are, however we got here. What matters is where we go next."
    },
    
    {
        "author": "Isaac Marion",
        "quote": "My friend 'M' says the irony of being a zombie is that everything is funny, but you can't smile, because your lips have rotted off."
    },

    {
        "author": "Isaac Marion",
        "quote": "Once you've arrived at the end of the world, it hardly matters which route you took."
    },

    {
        "author": "Isaac Marion",
        "quote": "The past is made out of facts... I guess the future is just hope."
    },

    {
        "author": "Isaac Marion",
        "quote": "...wanting change is step one, but step two is taking it."
    },

    {
        "author": "Isaac Marion",
        "quote": "We smile, because this is how we save the world."
    },

    {
        "author": "Isaac Marion",
        "quote": "What a massive responsibility, being a moral creature."
    },

    {
        "author": "Isaac Marion",
        "quote": "There's no benchmark for how life's 'supposed' to happen. There is no ideal world for you to wait around for. The world is always just what it is now, it's up to you how you respond to it."
    },

    {
        "author": "Isaac Marion",
        "quote": "We're fumbling in the dark, but at least we're in motion."
    },

    {
        "author": "Isaac Marion",
        "quote": "There is a chasm between me and the world outside of me. A gap so wide my feelings can't cross it. By the time my screams reach the other side, they have dwindled into groans."
    },

    {
        "author": "Isaac Marion",
        "quote": "Music? Music is life! It's physical emotion - you can touch it! It's neon ecto-energy sucked out of spirits and switched into sound waves for your ears to swallow. Are you telling me, what, that it's boring? You don't have time for it?"
    },

    {
        "author": "Isaac Marion",
        "quote": "If there are rules, we're the ones making them. We can change them whenever we want to."
    },

    {
        "author": "Isaac Marion",
        "quote": "What's the point of trying to fix a world we're so briefly in?"
    },

    {
        "author": "Isaac Marion",
        "quote": "Even in my bravest moment, I am a coward."
    }

]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote(){
    var randomNumber = randomSelector(quotesArray.length);
    document.getElementById("quoteOutput").innerHTML = ' " ' + quotesArray[randomNumber].quote + ' " ';
    document.getElementById("authorOutput").innerHTML =  ' - ' + quotesArray[randomNumber].author + ' - ';
}

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "May be your weird is my normal. Who's to say?? - Unknown",
    "In order to be irreplaceable one must always br different.",
    "When you wake up in heaven you live in hell - BYS"
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote").textContent = quote;
}
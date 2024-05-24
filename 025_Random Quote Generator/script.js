function generate() {
    let quotes = {
      "- Steve Jobs" : '"The only way to do great work is to love what you do."',
      "- Abraham Lincoln" : '"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
      "- Theodore Roosevelt" : '"Believe you can and you\'re halfway there."',
      "- Winston Churchill" : '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
      "- Franklin D. Roosevelt" : '"The only limit to our realization of tomorrow will be our doubts of today."'
    }

    let authors = Object.keys(quotes);
    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
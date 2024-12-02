
var quotes = [
    {
      text: `"Resentment is like drinking poison and waiting for your enemies to die."`,
      author: `-- Nelson Mandela`
    },
    {
      text: `"The best revenge is massive success."`,
      author: `-- Frank Sinatra`
    },
    {
      text: `"It's not what happens to you, but how you react to it that matters."`,
      author: `-- Epictetus`
    },
    {
      text: `"Do not take life too seriously. You will not get out alive."`,
      author: `-- Elbert Hubbard`
    },
    {
      text: `"You miss 100% of the shots you don't take."`,
      author: `-- Wayne Gretzky`
    }
  ];
  
  function showRandomQuote() {
    var x = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteText").innerText = quotes[x].text;
    document.getElementById("authorText").innerText = quotes[x].author;
  }
  
  




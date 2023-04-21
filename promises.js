let favNumber = 7;
let baseURL = "http://numbersapi.com";

async function getNumberFact() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}

getNumberFact();

const favNumbers = [5, 12, 39];
async function getNumbersFacts() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}

getNumbersFacts();

async function getMultipleNumberFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}

getMultipleNumberFacts();


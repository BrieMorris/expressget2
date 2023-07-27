console.log('script sourced.');

function getQuotes() {
    axios.get('/quotes').then((response) => {
        console.log('Success', response);
        let quotesFromServer = response.data;
        renderToDom(quotesFromServer);
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    });
}

function renderToDom(quotes) {
    output.innerHTML = '';

    for (let quote of quotes) {
        output.innerHTML += `
        <p>"${quote.text} - ${quote.author}"</p>
        `
    }
}

function submitForm(event) {
    event.preventDefault();
    let quote = document.querySelector('#quoteInput').value;
    let author = document.querySelector('#authorInput').value;

    let quoteToAdd = {
        text: quote,
        author: author
    }
    console.log(quoteToAdd);

    axios.post('/quotes', quoteToAdd).then((response) => {
        console.log(response);
        document.querySelector('#quoteInput').value = '';
        document.querySelector('#authorInput').value = '';
        getQuotes();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong');
    });
}

let temperatures = [-2, 5, 80, 90, 100, 114, -20, 0, 3, 9]
t
let shoes = [
    { color: 'red', size: 8, type: 'running' },
    { color: 'gray', size: 7, type: 'sandle' },
    { color: 'yellow', size: 10, type: 'boot' },
    { color: 'green', size: 9, type: 'running' },
];

let belowFreezingTemps = temperatures.filter((obj) => obj < 32);
console.log(belowFreezingTemps);

let runningShoes = shoes.filter((obj) => obj.type === 'running');
console.log(runningShoes);

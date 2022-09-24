const countrySelection = document.querySelector("#inputCountry");
const stateSelection = document.querySelector("#inputState");

let usaStates = [
    'Alabama',
    'Alaszka',
    'Arizona',
    'Arkansas',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Dél - Karolina',
    'Dél - Dakota',
    'Észak - Karolina',
    'Észak - Dakota',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kalifornia',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New York',
    'Nyugat - Virginia',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'Tennessee',
    'Texas',
    'Utah',
    'Új - Mexikó',
    'Vermont',
    'Virginia',
    'Washington',
    'Wisconsin',
    'Wyoming'
]

let huCountries = [
    'Bács-Kiskun',
    'Baranya',
    'Békés',
    'Borsod-Abaúj-Zemplén',
    'Csongrád-Csanád',
    'Fejér',
    'Győr-Moson-Sopron',
    'Hajdú-Bihar',
    'Heves',
    'Jász-Nagykun-Szolnok',
    'Komárom-Esztergom',
    'Nógrád',
    'Pest',
    'Somogy',
    'Szabolcs-Szatmár-Bereg',
    'Tolna',
    'Vas',
    'Veszprém',
    'Zala'
]

countrySelection.addEventListener('change', () => {
    let listItems = ""
    if (countrySelection.value === 'USA') {
        usaStates.forEach(element => {
            listItems += "<option>" + element + "</option>"
        });
    } else if (countrySelection.value === 'Magyarország') {
        huCountries.forEach(element => {
            listItems += "<option>" + element + "</option>"
        });      
    } else {
        listItems = "<option>Select a Country</option>"
    }
    stateSelection.innerHTML = listItems;
});
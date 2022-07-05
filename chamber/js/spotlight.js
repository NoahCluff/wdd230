const requestURL = 'json/data.json';
const cards = document.querySelector("#spotlight");

async function getDirectory() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    const directory = selectDirectory(data);
    displayDirectory(directory)
  } else {
    throw Error(response.statusText);
  }
}

function randomSelect(data) {
  const randomindex = Math.floor(Math.random() * data.length)
  const spotlights = data[randomindex]
  data.splice(randomindex, 1)
  return spotlights
}

function selectDirectory(data) {
  const members = data.directory.filter(directory =>
    directory.membership == "Gold" || directory.membership == "Silver")
  let spotlightArray = [];
  for (let i = 0; i < 3; i++) {
    spotlightArray.push(randomSelect(members))
  }
  return spotlightArray
}

function displayDirectory(data) {
  // Create elements to add to the document
  data.forEach(directory => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let quote = document.createElement('p');
    let image = document.createElement('img');
    let membership = document.createElement('p');

    h3.textContent = `${directory.business}`;
    quote.textContent = `${directory.quote}`;
    phone.textContent = `Phone: ${directory.phone}`;
    website.textContent = `Website: ${directory.website}`;
    membership.textContent = `${directory.membership} Member`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', directory.image);
    image.setAttribute('alt', `Company logo of ${directory.name}, member of the Arco Chamber of Commerce.`);
    image.setAttribute('loading', 'lazy');
    
    card.appendChild(image);
    card.appendChild(h3);
    card.appendChild(quote);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(membership);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('#spotlight').appendChild(card);
  });
}
getDirectory()
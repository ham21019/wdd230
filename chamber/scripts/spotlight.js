const spotlight = document.querySelectorAll(".spotlight");

const fetchJSON = async () => {
  try {
    const jsonURL = "json/data.json";
    const req = new Request(jsonURL);
    const res = await fetch(req);
    const jsonObject = await res.json();
    const businesses = jsonObject["businesses"];

    // randomize array with shuffle function
    let spotbiz = shuffle(businesses);

    addSpot(spotbiz);
  } catch (error) {
    console.log(error);
  }
};

fetchJSON();

const addSpot = (cardObj) => {
  spotlight.forEach((element, index) => {
    element.innerHTML = `
      <h2>${cardObj[index].name}</h2>
      <img src="${cardObj[index].logo}" alt="Logo image for ${cardObj[index].name}.">
      <a href="${cardObj[index].url}">${cardObj[index].url}</a>`;
  });
};

// Source: stackoverflow.com
const shuffle = (bizArray) => {
    return bizArray
      .map((element) => ({
        element,
        sort: Math.random(),
      }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ element }) => element)
  
      .filter((array) => array.member == "Gold" || array.member == "Silver");
  };
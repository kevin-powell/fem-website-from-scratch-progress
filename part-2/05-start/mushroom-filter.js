const cards = document.querySelectorAll(".mushroom-guide .card");
const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");

const noResultsMessage = document.querySelector(".no-results-message");

const currentFilters = {
  season: "all",
  edible: "all",
};

seasonalFilter.addEventListener("change", updateFilter);
edibleFilter.addEventListener("change", updateFilter);

function updateFilter(e) {
  const filterType = e.target.name;

  currentFilters[filterType] = e.target.value;
  filterCards();
}

function filterCards() {
  let hasVisibleCards = false;

  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilters.season === season;

    const matchesEdible = currentFilters.edible === edible;

    if (
      (currentFilters.season === "all" || currentFilters.season === season) &&
      (currentFilters.edible === "all" || currentFilters.edible === edible)
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }
  });
  if (hasVisibleCards) {
    noResultsMessage.hidden = true;
  } else {
    noResultsMessage.hidden = false;
  }
}

function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();
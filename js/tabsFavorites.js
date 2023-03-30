function displayTabName(resp) {
    let data = resp.data;
    let currentTab = document.querySelector("#pills-current-city-tab");
    currentTab.innerHTML = data.name;
  }
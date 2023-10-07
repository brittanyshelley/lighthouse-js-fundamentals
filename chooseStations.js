const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];



const chooseStations = function (stations) {
  let goodStations = [];

  for (let i = 0; i < stations.length; i++) {
    let locations = stations[i];
    const [name, capacity, locType] = locations;
    // let name = locations[0];
    // let capacity = locations[1];
    // let locType = locations[2];


    if (capacity >= 20 && (locType === "school" || locType === "community centre")) {
        goodStations.push(name)
    }
  }
  return goodStations;
}

console.log(chooseStations(stations))
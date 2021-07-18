export function getLists() {
  return fetch('https://www.mocky.io/v2/5d565297300000680030a986')
    .then(response => response.json())
    .then(json => json)
    .catch(err => {
      console.log(err);
    });
}

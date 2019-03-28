// vanilla
export const data = [
  {
    id: 1,
    name: "Axe",
    message: "Axe likes this very much!"
  },
  {
    id: 2,
    name: "Terror Blade",
    message: "The self-righteous shall choke on their sanctimony"
  }
];
// payload is boolean - truthy to resolve promise
export const mockFetch = payload => {
  return new Promise((resolve, reject) => {
    if (payload) {
      setTimeout(() => {
        return resolve(data);
      }, 2000);
    } else {
      return reject({
        status: "FAILURE"
      });
    }
  });
};

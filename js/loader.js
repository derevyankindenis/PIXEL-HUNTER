const SERVER_URL = `https://es.dump.academy/pixel-hunter`;

export default class Loader {
  static loadData() {
    return fetch(`${SERVER_URL}/questions`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else if (response.status === 404) {
            return [];
          }
          throw new Error(`Произошла ошибка загрузки данных игры`);
        });
  }
}

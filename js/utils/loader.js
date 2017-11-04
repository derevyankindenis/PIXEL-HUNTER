const SERVER_URL = `https://es.dump.academy/pixel-hunter`;
export const DEFAULT_NAME = `user`;

export class Loader {
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

  static saveData(data, user = DEFAULT_NAME) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${SERVER_URL}/stats/:${user}`, requestSettings);
  }

  static loadResults(user = DEFAULT_NAME) {
    return fetch(`${SERVER_URL}/stats/:${user}`).then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      }
      throw new Error(`Произошла ошибка загрузки статистики`);
    });
  }

}

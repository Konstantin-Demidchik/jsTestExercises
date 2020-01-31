const asyncButton = document.getElementById('asyncButton');

const httpGet = (path) => {
    return new Promise((resolve, reject) => {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8080${path}`, true);

    xhr.onload = () => {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        let error = new Error(xhr.statusText);
        error.code = xhr.status;
        reject(error);
      }
    };

    xhr.onerror = () => {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

asyncButton.addEventListener('click', () => {
  Promise.all([
    httpGet('/first'),
    httpGet('/second')
  ]).then(results => {
    console.log('Оба ответа получены!');
    console.log('results', results);
  })
});

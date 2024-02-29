const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  fetchPromise
    .then((response) => response.json()) /*asychrnous/ error function*/
    .then((products) => {
        products.forEach(product => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  
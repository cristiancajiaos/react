const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // Yo quiero mi dinero!!
    reject('Mi amigo huyó');
  }, 2000);
});

myPromise.then(
  (myMoney) => {
    console.log(`Tengo mi dinero ${myMoney}`);
  }
).catch(
  (reason) => {
    console.warn(reason);
  }
).finally(() => {
  console.log('Pues a seguir con mi vida');
});
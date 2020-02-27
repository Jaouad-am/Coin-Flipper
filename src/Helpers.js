function choice(arr) {
  let randX = Math.floor(Math.random() * arr.length);
  return arr[randX];
}

export { choice };

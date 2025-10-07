for (let i = 0; i < 10; i++) {
  let line = "";
  for (let j = 0; j < i; j++) {
    line += j + " ";
  }
  console.log(line);
}
for (let i = 0; i < 10; i++) {
  const element = i;
  console.log(element);
  if (element === 5) {
    console.log("5 is best number ever!");
  }
}

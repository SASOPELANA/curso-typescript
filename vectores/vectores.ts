// vectores o arreglos en typescript

let vector: number[] = [1, 2, 3, 4, 5, 6];

let vector2: string[] = ["Html", "CSS", "JS", "TS"];

vector2[0] = "Golang";

for (let index = 0; index < vector2.length; index++) {
  const element = vector2[index];
  console.log(element);
}

export {};

function add(first: number): (second: number) => number;
function add(first: number, second: number): number;
function add(
  first: number,
  second?: number
): number | ((second: number) => number) {
  if (second === undefined) return (second: number) => add(first, second);
  return first + second;
}

const addTwo = add(2);
const six: number = addTwo(4);
const eight = add(4, 4);

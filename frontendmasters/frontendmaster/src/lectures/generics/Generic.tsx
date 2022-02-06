export type Link<T> = {
  value: T; // t defines here Type but it could be any name
  next?: Link<T>; //optional
};

const first: Link<string> = {
  value: "ozkan", // i defined it before as a string
  //value:42 will not work
};
const second: Link<number> = {
  value: 488, // i defined it before as a number
};

function createNode<T>(value: T): Link<T> {
  return { value };
}

const node = createNode("ozkan");

const node2 = createNode(2);

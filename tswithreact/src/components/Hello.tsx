import React from "react";

interface IHelloProps {
  name: string;
  desc?: string;
  age: number;
  onSubmithandler: (name: string) => void;
  //i can also choose it as optional
}

//react.FunctionComponent
export const Hello: React.FC<IHelloProps> = ({
  name,
  desc = "if there is no data",
  age,
  //  onSubmithandler,
}) => {
  //export const Hello = ({ name, desc, age }: IHelloProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>
        Hello I am {name}. I am {age} and {desc}
        {/*   {onSubmithandler(name)} */}
        <input type="text" onChange={handleChange} />
      </h1>
    </div>
  );
};

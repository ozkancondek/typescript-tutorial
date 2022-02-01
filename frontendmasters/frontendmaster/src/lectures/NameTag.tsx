import "./styles.css";
// import * as PropTypes from "prop-types"

//define type
type NameTagProps = {
  name: string;
};

//export const NameTag = (props: NameTagProps) => {
export const NameTag = ({ name }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        {/*  <p>{props.name}</p> */}
        <p>{name}</p>
      </section>
      <footer />
    </main>
  );
};

//normally i am using tjis method to in js to check proptypes
/* NameTag.proptypes = {
    name:PropTypes.string
}
 */

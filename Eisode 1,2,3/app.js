import React from "react";
import ReactDOM from "react-dom/client";
/////////////////////////////////////////////////////////////////
//////// Episiode 3: Laying the foundation /////////////
/////////////////////////////////////////////////////////////////

///----------------- Creating Elements in React -----------------///
////////////////////////////////////////////////////////////
/////// Using React Element /////////
// Creating thereact element using react core.

// React.createElement => creates react element which is Object => render method converts it into HTML element.
const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // It creates Object.
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // render converts object into HTML element.

// The above method for creating the react element is very complex and hard as we can make elements inside the HTML directely. To overcome this facebook developers created JSX.

/////////////// Using JSX: //////////////////
// JSX is not HTML in JavaScript!!! we can say JSX is HTML/XML like syntax. JSX is not React. //

//JSX => Babel converts/transpiles it into React.createElement => react.createElement creates react element which is Object => render() method converts it into HTML element.
const jsxHeading = (
  <h1 id="heading" className="Head">
    Namaste React using JSX
  </h1>
); // This created Object.
console.log(jsxHeading);

// const root1 = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); // render converts object into HTML element.

// JS Engine does not understands the JSX that is this: const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>. It simply throw the error saying the '<' unexpected tocken when you try to run this command inside console in browser. So how the code is still working and we are geting the output? It is because of parcel, parcel doing this for us, it transpiled the code before it reaches the JS engine. But parcel dont do that alone it  is Babel. It is babel's job to convert the code which react/Js engine/browser understands.
//In the background JSX converts the code into react element and it creates the object which is then converted into HTMl using render method. so JSX is nothing but the React element. this converting from JSX to React.createElement is done by babel.
// Remember JSX is not HTML, it  is HTML like syntax but not html.

///--------------------- React Component  --------------------///

// Everything in react is component. There are 2 types of components in react.
// 1. Class based component - Old way of writing component. It uses classes for defining component
// 2. Function based (functiojnal) component - New way of defining component. It uses functions for defining component.

// React functional component: It is just a normal JS function which returns a piece of JSX (i.e JSX code).
// When defining component write the first letter of variable in capital letter.

const elm = <span>React JSX element</span>;

// React component using JSx
const title = (
  <div>
    {elm}
    <h1 id="heading" className="Head">
      Namaste React using JSX
    </h1>
  </div>
);

//// React functional component
const Title = () => (
  <h1 id="heading" className="Head">
    Namaste React using functional component
  </h1>
);

const HeadingComponent = () => {
  return <h1> Namast React functional component</h1>;
};

const HeadingComponent1 = () => <h1> Namast React functional component</h1>; // This is same as above.

const number = 1000000;
// We can use the JS inside the React functional component that isn JSX by writiong curley braces {} and inside that we can write any JS expression like function variable. and we can wrap that  curley braces {} into any tag as well.
// We can render a functional component into another functional component like below writing inside <component _Name />. This is also known as component composition. You can call the functional component into theanother functional component by writing it inside {} insted of </> even if its functional component because at the end of the day  functional component is nothing but the JavaScript.
//We can also render the react element in JSX inside the functional component. react element in JSX is nothing but the normal JS. So we can render ity inside the curley braces directly.
const HeadingComponent2 = () => (
  <div id="container">
    {number}
    <h2>{number}</h2>
    <h2>{200 + 300}</h2>
    <h2>{console.log("kjsahdfkhlask")}</h2>
    {title}
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading"> Namast React in functional component</h1>
  </div>
); // This is alse same as above. () is there as to combin the whole content. We can add more element inside it. like <div>

// <Title />, <Title></Title>, {Title()} this all are same.

// const root2 = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />); // This is how we render a functional component on to the page.

/////////////////////////////////////////////////////////////////
//////// Episiode 1: Inception /////////////
/////////////////////////////////////////////////////////////////

// This is the way of creating the one element(tag) inside the HTML.
//In React.createElement(__, __, __) we give 3 argument. 1st is type of element that we want to creat, 2nd is attributesto that created tag and 3re is the content inside that tag or element.
/* 
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "ABC" }, // inside {} we can give attributes like class and id or anything
  "Hello world from react!"
);
console.log(heading); // return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render method converts the heading object that is react object into the HTML that is into h1 tag

*/

//////////////////////////////////////////////////////////////////////////
/**
 * // What  if we have nested elements (tags) inside each other like below. How do we create it inside the react?
 *
 * <div id="parent">
 *      <div id="child">
 *          <h2>I'm h2 tag</h2>
 *      </div>
 * </div>
 *
 *
 * React.createElement always creates the object.
 * ReactElement(Object) => HTML(Brower understands)
 */

/*
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h3", {}, "I'm an h3 tag")
  )
);

console.log(parent);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
 */

//////////////////////////////////////////////////////////////////////////
/**
 * // What  if we want to create 2 siblings inside child element like below. How do we create it inside the react?
 *
 * <div id="parent">
 *      <div id="child">
 *          <h2>I'm h2 tag</h2>
 *          <h3>I'm h3 tag</h3> // if we want to give siblings to the child element then we can write
 *                                 the 3re argument inside an array.
 *      </div>
 * </div>
 *
 * for that we have to convert the 3re agrument of React.createElement into an array.
 */

/*
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "I'm an h2 tag"),
    React.createElement("h3", {}, "I'm an h3 tag"),
  ])
);

console.log(parent1);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent1);
*/

//////////////////////////////////////////////////////////////////////////
/**
 * // What  if we want to create elements like below. How do we create it inside the react?
 *
 * <div id="parent">
 *      <div id="child">
 *          <h2>I'm h2 tag</h2>
 *          <h3>I'm h3 tag</h3>
 *      </div>
 *      <div id="child2">
 *          <h2>I'm h2 tag</h2>
 *          <h3>I'm h3 tag</h3>
 *      </div>
 * </div>
 *
 * for that we have to convert the 3re agrument of React.createElement into an array.
 */

/*
const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "I'm an h2 tag"),
    React.createElement("h3", {}, "I'm an h3 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h2", {}, "I'm an h2 tag"),
    React.createElement("h3", {}, "I'm an h3 tag"),
  ]),
]);

console.log(parent2);

const root3 = ReactDOM.createRoot(document.getElementById("root"));
root3.render(parent2);
*/

// But this looks messy right. and if we have number of childs inside child then it will be complicated. So for that there is JSX exists. We never use react.create Element() for creating the HTML tags. this is just for the core understanding about how we used to create the elemets inside react before JSX.

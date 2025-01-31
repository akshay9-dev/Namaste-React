/////////////////////////////////////////////////////////////////
//////// Episiode 1: Inception /////////////
/////////////////////////////////////////////////////////////////


// This is the way of creating the one element(tag) inside the HTML.
//In React.createElement(__, __, __) we give 3 argument. 1st is type of element that we want to creat, 2nd is attributesto that created tag and 3re is the content inside that tag or element.

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "ABC" }, // inside {} we can give attributes like class and id or anything
  "Hello world from react!"
);
console.log(heading); // return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // render method converts the heading object that is react object into the HTML that is into h1 tag

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


// But this looks messy right. and if we have number of childs inside child then it will be complicated. So for that there is JSX exists. We never use react.create Element() for creating the HTML tags. this is just for the core understanding about how we used to create the elemets inside react before JSX. 
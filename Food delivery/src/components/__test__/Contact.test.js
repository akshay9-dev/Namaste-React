import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

// Below you see how to write a test cases.
//test(" ",() => {}).. it takes 2 arguments one is string and 2nd is call back function
//screen.------(""). This will chech if particular thing is available/visible on screeen or not
//expext().toBeInTheDocument() it tells us that we expect that particular thing to be present in the document when page renders.

/* 
// This is a way of writing saaperate test cases but we can combine them as well

test("Should load contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load input name inside contact component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");

  //Assertion
  expect(inputName).toBeInTheDocument();
});

test("Should load 2 input boxes on the contact component", () => {
  render(<Contact />);


  // Querying
  const inputBokes = screen.getAllByRole("textbox");

  //Assertion
  expect(inputBokes.length).toBe(2);
});
*/


//// Combined way of writing test cases.
// NOTE : instead of "test" we can write "it" as well

describe("Contact Us page test cases", () => {

  // It will run before the test cases
// beforeAll(() => {
//   console.log("Before All")
// });

// It will run before the each test case
// beforeEact(() => {
//   console.log("Before Each")
// });


//it will run after all the test casses runs
// afterAll(() => {
//   console.log("After All")
// });


// It will run after each test case.
// AfterEact(() => {
//   console.log("After Each")
// });

  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    // Querying
    const inputBokes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBokes.length).toBe(2);
  });
});

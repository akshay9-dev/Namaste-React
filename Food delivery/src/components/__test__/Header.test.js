import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

it("should render header comnponent with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //we can get login button by multiple ways like below
  //   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" }); // when we have multiple button and we want to find just particular one then we can pass the parameters as well.
  //const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

it("should render header comnponent with cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartEmpty = screen.getByText("Cart🛒- (0 items)");

  expect(CartEmpty).toBeInTheDocument();
});

// check whether it has cart ot not
it("should render header comnponent with cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const Cart = screen.getByText(/Cart/);

  expect(Cart).toBeInTheDocument();
});

it("should change login button to logout on click ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton)

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});

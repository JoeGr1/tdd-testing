import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

test("it should have the correct initial value when set to 7", () => {
  render(<AwesomeCounter initialValue={7} />);
  const count = screen.queryByText(7);
  expect(count).toBeVisible();
});

test("it should hve a default intial value of 0", () => {
  render(<AwesomeCounter />);
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("it should increase the value correctly when add is cicked once", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.queryByText("Add");
  userEvent.click(addButton);
  const count = screen.queryByText(2);
  expect(count).toBeVisible();
});

test("it should increase the value correctly when add is cicked twice", () => {
  throw new Error();
});

test("it should decrease the value correctly when add is cicked once", () => {
  throw new Error();
});

test("it should decrease the value correctly when add is cicked twice", () => {
  throw new Error();
});

test("it should not allow a negative number when the inital value is 0 and remove is clicked once", () => {
  throw new Error();
});

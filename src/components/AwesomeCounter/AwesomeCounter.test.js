import { render, screen, act } from "@testing-library/react";
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
  act(() => {
    userEvent.click(addButton);
  });
  const count = screen.queryByText(2);
  expect(count).toBeVisible();
});

test("it should increase the value correctly when add is cicked twice", () => {
  render(<AwesomeCounter initialValue={1} />);
  const addButton = screen.queryByText("Add");
  act(() => {
    userEvent.click(addButton);
    userEvent.click(addButton);
  });
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});

test("it should decrease the value correctly when add is cicked once", () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.queryByText("Remove");
  act(() => {
    userEvent.click(removeButton);
  });
  const count = screen.queryByText(4);
  expect(count).toBeVisible();
});

test("it should decrease the value correctly when add is cicked twice", () => {
  render(<AwesomeCounter initialValue={5} />);
  const removeButton = screen.queryByText("Remove");
  act(() => {
    userEvent.click(removeButton);
    userEvent.click(removeButton);
  });
  const count = screen.queryByText(3);
  expect(count).toBeVisible();
});

test("it should not allow a negative number when the inital value is 0 and remove is clicked once", () => {
  render(<AwesomeCounter initialValue={0} />);
  const removeButton = screen.queryByText("Remove");
  act(() => {
    userEvent.click(removeButton);
  });
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

test("it should not allow a negative number when the inital value is 2 and remove is clicked 4 times", () => {
  render(<AwesomeCounter initialValue={2} />);
  const removeButton = screen.queryByText("Remove");
  act(() => {
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
  });
  const count = screen.queryByText(0);
  expect(count).toBeVisible();
});

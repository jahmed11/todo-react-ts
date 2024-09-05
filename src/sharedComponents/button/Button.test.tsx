import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom/extend-expect";

describe("Button Component", () => {
  it("should render with the correct text and class", () => {
    render(
      <Button variant="primary" onClick={() => {}}>
        Click Me
      </Button>
    );

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("button");
    expect(buttonElement).toHaveClass("button--primary");
  });

  it("should call onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button variant="danger" onClick={handleClick}>
        Click Me
      </Button>
    );

    const buttonElement = screen.getByText("Click Me");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(buttonElement).toHaveClass('button--danger');
  });

  it("should apply the correct type prop", () => {
    const { container } = render(
      <Button variant="primary" type="submit">
        Submit
      </Button>
    );
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

});



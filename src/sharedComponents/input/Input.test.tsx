import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";



describe("Input Component", () => {
  it("should render with the correct placeholder and value", () => {
    render(<Input value="wash dishes" placeholder="Enter text" onChange={jest.fn()} />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue("wash dishes");
  });

  it("should call onChange handler when text is entered", () => {
    const handleChange = jest.fn();
    const inputValue="new value" 
    render(<Input value="" placeholder="Enter text" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: inputValue} });
    expect(handleChange).toHaveBeenCalled();
  });

  it("should call onKeyDown handler when a key is pressed", () => {
    const handleKeyDown = jest.fn();
    render(
      <Input value="" onChange={jest.fn()} placeholder="Enter text" onKeyDown={handleKeyDown} />
    );

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.keyDown(inputElement, { key: "Enter", code: "Enter", charCode: 13 });

    expect(handleKeyDown).toHaveBeenCalledTimes(1);
    expect(handleKeyDown).toHaveBeenCalledWith(expect.objectContaining({ key: "Enter" }));
  });
});

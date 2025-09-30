import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { TimesProvider } from "../../context/TimesContex";

test("Renders the BookingForm heading", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={{ date: "", time: "", guests: 1, occasion: "" }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const headingElement = screen.getByRole("heading", {
    name: /table reservation form/i,
  });
  expect(headingElement).toBeInTheDocument();
});

test("BookingForm can be submitted by the user", () => {
  const mockSubmit = jest.fn();

  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: "2025-09-30",
          time: "18:00",
          guests: 2,
          occasion: "Birthday",
        }}
        onFormChange={() => {}}
        onFormSubmit={mockSubmit}
      />
    </TimesProvider>
  );

  const submitButton = screen.getByRole("button", {
    name: /submit reservation form/i,
  });

  fireEvent.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledTimes(1);
});

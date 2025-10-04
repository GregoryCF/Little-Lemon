import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../BookingForm";
import { TimesProvider } from "../../context/TimesContex";

const defaultFormValue = {
  date: "",
  time: "",
  guests: 1,
  occasion: "",
};

test("Renders the BookingForm heading", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={defaultFormValue}
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

test("Date input has required, min, and max attributes", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={defaultFormValue}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("min");
  expect(dateInput).toHaveAttribute("max");
});

test("Guests input has required, min=1, and max=10 attributes", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={defaultFormValue}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Occasion select is required", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={defaultFormValue}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});

test("Submit button is disabled when form is invalid", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: "", // invalid
          time: "",
          guests: 0, // invalid
          occasion: "",
        }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const submitButton = screen.getByRole("button", {
    name: /submit reservation form/i,
  });
  expect(submitButton).toBeDisabled();
});

test("Submit button is enabled when form is valid and BookingForm can be submitted by the user", () => {
  const mockSubmit = jest.fn();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formatted = tomorrow.toISOString().split("T")[0];

  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: formatted,
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

  expect(submitButton).toBeEnabled();
  expect(mockSubmit).toHaveBeenCalledTimes(1);
});

test("shows error for past date after blur", () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const pastDate = yesterday.toISOString().split("T")[0];

  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: pastDate,
          time: "18:00",
          guests: 2,
          occasion: "Birthday",
        }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.blur(dateInput);

  const error = screen.getByText(/date cannot be in the past/i);
  expect(error).toBeInTheDocument();
});

test("shows error for date beyond 6 months after blur", () => {
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 7);
  const invalidDate = futureDate.toISOString().split("T")[0];

  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: invalidDate,
          time: "18:00",
          guests: 2,
          occasion: "Birthday",
        }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const dateInput = screen.getByLabelText(/choose date/i);
  fireEvent.blur(dateInput);

  const error = screen.getByText(/date must be within the next 6 months/i);
  expect(error).toBeInTheDocument();
});

test("shows error for guests less than 1 after blur", () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formatted = tomorrow.toISOString().split("T")[0];

  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: formatted,
          time: "18:00",
          guests: 0,
          occasion: "Birthday",
        }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.blur(guestsInput);

  const error = screen.getByText(/guests must be between 1 and 10/i);
  expect(error).toBeInTheDocument();
});

test("shows error for guests more than 10 after blur", () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const formatted = tomorrow.toISOString().split("T")[0];

  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: formatted,
          time: "18:00",
          guests: 11,
          occasion: "Birthday",
        }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  const guestsInput = screen.getByLabelText(/number of guests/i);
  fireEvent.blur(guestsInput);

  const error = screen.getByText(/guests must be between 1 and 10/i);
  expect(error).toBeInTheDocument();
});

test("does not show error before blur", () => {
  render(
    <TimesProvider>
      <BookingForm
        formValue={{
          date: "",
          time: "18:00",
          guests: 0,
          occasion: "Birthday",
        }}
        onFormChange={() => {}}
        onFormSubmit={() => {}}
      />
    </TimesProvider>
  );

  expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
  expect(
    screen.queryByText(/guests must be between 1 and 10/i)
  ).not.toBeInTheDocument();
});

import { useEffect, useState } from "react";
import { useAvailableTimes } from "../hooks/useAvailableTimes";
import BookingSlot from "./BookingSlot";

const occasions = ["Birthday", "Anniversary"];

function BookingForm({ formValue, onFormChange, onFormSubmit }) {
  const { availableTimes, removeTime } = useAvailableTimes();
  const [isValid, setIsValid] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    date: false,
    guests: false,
  });

  const [errors, setErrors] = useState({
    date: "",
    guests: "",
  });

  useEffect(() => {
    const { date, time, guests, occasion } = formValue;
    const guestsNum = parseInt(guests, 10);
    const today = new Date();
    const selectedDate = new Date(date);

    let dateError = "";
    let guestsError = "";

    if (!date) {
      dateError = "Date is required.";
    } else if (selectedDate < today.setHours(0, 0, 0, 0)) {
      dateError = "Date cannot be in the past.";
    } else if (selectedDate > new Date(today.setMonth(today.getMonth() + 6))) {
      dateError = "Date must be within the next 6 months.";
    }

    if (!guestsNum || guestsNum < 1 || guestsNum > 10) {
      guestsError = "Guests must be between 1 and 10.";
    }

    setErrors({ date: dateError, guests: guestsError });

    const valid = !dateError && !guestsError && time && occasion;

    setIsValid(valid);
  }, [formValue]);

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    removeTime(formValue.time);
    onFormSubmit(formValue);
  };

  return (
    <form
      style={{ display: "grid", gap: 20 }}
      onSubmit={handleSubmit}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title">Table Reservation Form</h2>

      <div className="control-group">
        <label htmlFor="res-date">Choose date</label>
        <input
          name="date"
          id="res-date"
          type="date"
          value={formValue.date}
          onChange={onFormChange}
          onBlur={() => handleBlur("date")}
          required
          min={new Date().toISOString().split("T")[0]}
          max={
            new Date(new Date().setMonth(new Date().getMonth() + 6))
              .toISOString()
              .split("T")[0]
          }
        />
        {touchedFields.date && errors.date && (
          <span style={{ color: "red" }}>{errors.date}</span>
        )}
      </div>

      <div className="control-group">
        <label htmlFor="res-time">Choose time</label>
        <select
          name="time"
          id="res-time"
          value={formValue.time}
          onChange={onFormChange}
          required
        >
          {availableTimes?.map((time) => (
            <BookingSlot key={time} value={time} />
          ))}
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          id="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          required
          value={formValue.guests}
          onChange={onFormChange}
          onBlur={() => handleBlur("guests")}
          aria-describedby="guests-help"
        />
        <small id="guests-help">You can reserve for 1 to 10 guests.</small>
        {touchedFields.guests && errors.guests && (
          <span style={{ color: "red" }}>{errors.guests}</span>
        )}
      </div>

      <div className="control-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={formValue.occasion}
          onChange={onFormChange}
          required
        >
          {occasions.map((occasion) => (
            <option key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </div>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="Submit reservation form"
        disabled={!isValid}
      />
    </form>
  );
}

export default BookingForm;

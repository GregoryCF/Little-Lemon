import { useAvailableTimes } from "../hooks/useAvailableTimes";
import BookingSlot from "./BookingSlot";

const occasions = ["Birthday", "Anniversary"];

function BookingForm({ formValue, onFormChange, onFormSubmit }) {
  const { availableTimes, removeTime } = useAvailableTimes();

  const handleSubmit = (e) => {
    e.preventDefault();
    removeTime(formValue.time);
    onFormSubmit(formValue);
  };

  return (
    <form
      style={{ display: "grid", maxWidth: 200, gap: 20 }}
      onSubmit={handleSubmit}
      aria-labelledby="booking-form-title"
    >
      <h2 id="booking-form-title">Table Reservation Form</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        name="date"
        id="res-date"
        type="date"
        value={formValue.date}
        onChange={onFormChange}
        aria-required="true"
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        name="time"
        id="res-time"
        value={formValue.time}
        onChange={onFormChange}
        aria-required="true"
      >
        {availableTimes?.map((time) => (
          <BookingSlot key={time} value={time} />
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        name="guests"
        id="guests"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        value={formValue.guests}
        onChange={onFormChange}
        aria-required="true"
        aria-describedby="guests-help"
      />
      <small id="guests-help">You can reserve for 1 to 10 guests.</small>

      <label htmlFor="occasion">Occasion</label>
      <select
        name="occasion"
        id="occasion"
        value={formValue.occasion}
        onChange={onFormChange}
        aria-required="true"
      >
        {occasions.map((occasion) => (
          <option key={occasion} value={occasion}>
            {occasion}
          </option>
        ))}
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        aria-label="Submit reservation form"
      />
    </form>
  );
}

export default BookingForm;

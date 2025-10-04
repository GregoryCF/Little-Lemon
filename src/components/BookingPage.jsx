import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { submitAPI } from "../api/api";
import { useAvailableTimes } from "../hooks/useAvailableTimes";
import BookingForm from "./BookingForm";

function BookingPage() {
  const lastDateRef = useRef("");
  const navigate = useNavigate();
  const { availableTimes, setTimes } = useAvailableTimes();

  const [form, setForm] = useState({
    date: "",
    time: availableTimes?.[0],
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (formData) => {
    const isSuccess = submitAPI(formData);
    if (isSuccess) {
      localStorage.setItem("form", JSON.stringify(form));
      navigate("/success");
    }
  };

  useEffect(() => {
    if (form.date !== "" && form.date !== lastDateRef.current) {
      lastDateRef.current = form.date;
      setTimes(form.date);
    }
  }, [form.date, setTimes]);

  return (
    <main>
      <div className="container" style={{ paddingTop: 16, paddingBottom: 40 }}>
        <BookingForm
          formValue={form}
          onFormChange={handleChange}
          onFormSubmit={submitForm}
        />
      </div>
    </main>
  );
}

export default BookingPage;

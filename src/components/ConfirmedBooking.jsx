import { useEffect, useMemo, useState } from "react";
import { useMediaQuery } from "react-responsive";

function ConfirmedBooking() {
  const [data, setData] = useState();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1080px)",
  });

  const h2Style = useMemo(() => {
    if (isDesktopOrLaptop) {
      return { width: 480, margin: "0 auto 20px" };
    } else {
      return { margin: "0 0 20px" };
    }
  }, [isDesktopOrLaptop]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("form")));
  }, []);

  return (
    <main>
      <div
        className="container"
        style={{
          paddingTop: 16,
          paddingBottom: 40,
          height: isDesktopOrLaptop ? 300 : 400,
        }}
      >
        <h2 style={h2Style}>Confirmed Booking!</h2>
        {data && (
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                <td>{data.date}</td>
              </tr>
              <tr>
                <th>Time</th>
                <td>{data.time}</td>
              </tr>
              <tr>
                <th>Number of guests</th>
                <td>{data.guests}</td>
              </tr>
              <tr>
                <th>Occasion</th>
                <td>{data.occasion}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}

export default ConfirmedBooking;

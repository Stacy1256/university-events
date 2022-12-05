import { useState } from "react";
import humanizeHoldingTime from "../../../utils/date-utils";
import "../events/style.css";
import Tags from "../tags/tags";

const Events = ({ events, loading }) => {
  const [q, setQ] = useState("");
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="event-input"
        onChange={(e) => setQ(e.target.value.toLowerCase())}
      ></input>
      <ul className="event-list">
      {events.filter(event => event.title.toLowerCase().includes(q)).map((event) => (
        <li key = {event.id}>
        <div className="event-container">
          <p className="event-header-text" key={event.id}>
            {event.title}
          </p>
          <p className="event-date-text">
            {humanizeHoldingTime(
              new Date(event.startsAt),
              new Date(event.endsAt)
            )}
          </p>
          <hr></hr>
          {event.imageUrl && <img src={event.imageUrl} alt="event_image"/>}
          <p className="event-container-text" key={event.id}>
            {event.description}
          </p>
          <p className="event-container-text" key={event.id}>
            Кафедра: {event.department.name} ({event.department.faculty.name})
          </p>
          <Tags tags={event.tags} />
          <p></p>
        </div>
        </li>
      ))}
      </ul>
    </div>
  );
};
export default Events;

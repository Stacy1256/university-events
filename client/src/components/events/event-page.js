import Header from "../ui/header/header";
import "../events/style.css";
import { useEffect, useState } from "react";
import Events from "../ui/events/events";
import Modal from "react-modal";
import { ax, useAuth } from "../../api";
import { useNavigate } from "react-router-dom";
import Pagination from "../ui/pagination/pagination";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const [logged] = useAuth();
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "4px solid",
      borderColor: "blue",
    },
  };

  const openFilterModal = () => {
    setFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setFilterModalOpen(false);
  };
  const afterFilterModalClose = () => {
    console.log("Modal closed");
  };
  const addClick = () => {
    navigate("/Events/AddEvent");
  };

  useEffect(() => {
    const getEvents = () => {
      setLoading(true);
      ax
        .get("events")
        .then((response) => {
          const data = response.data;
          setEvents(data.items);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getEvents();
  }, []);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEVent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEVent, indexOfLastEvent);

  const applyButtonClick = () =>{
    const startDate = document.getElementById('start').value;
    const endDate = document.getElementById('end').value;
    ax
        .get("events", {params: {from: startDate, to: endDate}})
        .then((response) => {
          const data = response.data;
          setEvents(data.items);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    setFilterModalOpen(false);
  }
  return (
    <div>
      <Header />
      {logged && (
        <>
          <button className="header-button" onClick={addClick}>
            Додати подію
          </button>
        </>
      )}
      <img
        onClick={openFilterModal}
        className="filter-logo"
        src="./filter-logo.webp"
        alt="Filter"
      />
      <hr></hr>
      <Events events={currentEvents} loading={loading} />
      <Pagination
        eventsPerPage={eventsPerPage}
        totalEvents={events.length}
        paginate={setCurrentPage}
      />
      <Modal
        isOpen={filterModalOpen}
        onAfterOpen={afterFilterModalClose}
        onRequestClose={closeFilterModal}
        style={customStyles}
        contentLabel="Filter Modal"
      >
        <div>
          <p className="filter-header-text">Фільтри</p>
          <hr></hr>
          <p className="filter-text">Початок Події</p>
          <input name="start" id="start" type="datetime-local"></input>
          <p className="filter-text">Кінець Події</p>
          <input name="end" id="end" type="datetime-local"></input>
          <p></p>
          <button onClick={applyButtonClick} name="filter-button">
            Застосувати
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default EventPage;

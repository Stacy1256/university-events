import "../filters/style.css";

const Filters = ({modalStatus}) => {
  const applyButtonClick = () =>{
    modalStatus = false;
  }
  return (
    <div>
      <p className="filter-header-text">Фільтри</p>
      <hr></hr>
      <p className="filter-text">Початок Події</p>
        <input type='datetime-local'></input>
       <p className="filter-text">Кінець Події</p>
       <input type='datetime-local'></input>
       <p></p>
      <button onClick={applyButtonClick} name="filter-button">Застосувати</button>
    </div>
  );
};

export default Filters;

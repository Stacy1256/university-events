import '../pagination/style.css'

const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalEvents / eventsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <nav className="pagination-container">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className="pagination-button"
          onClick={() => {
            paginate(number);
            
          }}
        >
          {number}
        </button>
      ))}
    </nav>
  );
};
export default Pagination;

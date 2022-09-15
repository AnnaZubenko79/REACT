import React from 'react';

const Pagination = ({ currentPage, goPrev, goNext, totalItems, itemsPerPage }) => {
  const isPrevPageAvailable = currentPage > 1;
  const isNextPageAvalaible = currentPage === Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={!isPrevPageAvailable}>
        {isPrevPageAvailable && '←'}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button onClick={goNext} className="btn" disabled={isNextPageAvalaible}>
        {isNextPageAvalaible ? '' : '→'}
      </button>
    </div>
  );
};
export default Pagination;

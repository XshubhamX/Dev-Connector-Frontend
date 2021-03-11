import React from "react";

const Pagination = (props) => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <button class="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" onClick={props.clicked} value={1}>
            1
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" onClick={props.clicked} value={2}>
            2
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" onClick={props.clicked} value={3}>
            3
          </button>
        </li>
        <li class="page-item">
          <button class="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;

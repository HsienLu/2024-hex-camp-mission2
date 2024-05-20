function Pagination() {
  return (
    <nav aria-label="Page navigation example " className="d-flex justify-content-center mt-lg-11 mt-8">
      <ul className="pagination gap-3 mb-0">

        <li className="page-item active" style={{borderRadius: 
        '4px !important'}}>
          <a className="page-link" href="#">1</a>
        </li>
        <li className="page-item ">
          <a className="page-link " href="#">2</a>
        </li>
        <li className="page-item ">
          <a className="page-link " href="#">3</a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;

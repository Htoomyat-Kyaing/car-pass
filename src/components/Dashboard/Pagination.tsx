import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <div className="flex justify-end w-full">
      <ReactPaginate
        breakLabel={
          <div className="w-[44px] h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center text-xl text-[#FFCC00] select-none">
            {`...`}
          </div>
        }
        nextLabel={
          <div className="w-[44px] h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center text-xl text-[#FFCC00] select-none">
            {`>`}
          </div>
        }
        // onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={4}
        previousLabel={
          <div className="w-[44px] h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center text-xl text-[#FFCC00] select-none">
            {`<`}
          </div>
        }
        renderOnZeroPageCount={null}
        className="flex gap-2"
        pageLinkClassName="w-[44px] h-[46px] border-[1.5px] border-[#FFCC00] rounded flex items-center justify-center text-xl selected-none"
        activeClassName="bg-[#FFCC00] rounded"
      />
    </div>
  );
};

export default Pagination;

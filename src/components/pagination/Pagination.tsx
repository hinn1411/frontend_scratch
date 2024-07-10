interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const hasPrevPage = currentPage - 1 > 0;
  const hasNextPage = currentPage + 1 <= totalPages;
  const goBack = () => {
    if (hasPrevPage) {
      onPageChange(currentPage - 1);
    }
  };
  const goNext = () => {
    if (hasNextPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!hasPrevPage ? (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!hasPrevPage}
          >
            Previous
          </button>
        ) : (
          <button onClick={goBack}>Previous</button>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!hasNextPage ? (
          <button
            className="cursor-auto disabled:opacity-50"
            disabled={!hasNextPage}
          >
            Next
          </button>
        ) : (
          <button onClick={goNext}>Next</button>
        )}
      </nav>
    </div>
  );
};

export default Pagination;

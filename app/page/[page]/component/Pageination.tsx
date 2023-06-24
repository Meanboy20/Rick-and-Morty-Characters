type PaginationProps = {
  totalPages: number;
  currentPage: number;
};

export default function Pageination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const renderButtons = () => {
    const buttons = [];

    // Add the first page link
    buttons.push(renderPageLink(1));

    // Calculate the range of page numbers to display
    const maxVisibleButtons = 5;
    const rangeStart = Math.max(
      2,
      currentPage - Math.floor(maxVisibleButtons / 2)
    );
    const rangeEnd = Math.min(
      totalPages - 1,
      rangeStart + maxVisibleButtons - 1
    );

    // Add an ellipsis if needed
    if (rangeStart > 5) {
      buttons.push(<span key="ellipsis-prev">...</span>);
    }

    // Add the intermediate page links
    for (let i = rangeStart; i <= rangeEnd; i++) {
      buttons.push(renderPageLink(i));
    }

    // Add an ellipsis if needed
    if (rangeEnd < totalPages - 1) {
      buttons.push(<span key="ellipsis-next">...</span>);
    }

    // Add the last page link
    if (totalPages > 1) {
      buttons.push(renderPageLink(totalPages));
    }

    return buttons;
  };

  const renderPageLink = (page: number) => {
    return (
      <a
        key={page}
        href={`/page/${page}`}
        aria-current={currentPage === page ? "page" : undefined}
        className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
          currentPage === page ? "bg-indigo-600 text-white" : "text-gray-700"
        } focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        {page}
      </a>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <a
              href={`/page/${currentPage !== 1 ? currentPage - 1 : 1}`}
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            {renderButtons()}

            <a
              href={`/page/${currentPage !== 42 ? currentPage + 1 : 42}`}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 49/10

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center justify-center mb-4">
        <p className="text-xl my-2">Pages</p>
      <ul className="flex rounded-md border border-gray-300 divide-x divide-gray-300">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? "px-3 py-2 font-medium text-white bg-pink-700 cursor-pointer"
                : "px-3 py-2 font-medium text-gray-500 cursor-pointer hover:text-gray-700 hover:bg-gray-100"
            }
            onClick={() => onPageChange(page)}
          >
            <a>{page}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
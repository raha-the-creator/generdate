import React from "react";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize); // 49/10

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);

  return (
    <div className="w-1/4">
      <ul className="flex justify-between items-center list-none">
        {pages.map((page) => (
          <li
            key={page}
            className={
              page === currentPage ? "flex justify-center items-center w-8 h-8 cursor-pointer bg-gray-500 text-white rounded-full" : "flex justify-center items-center w-8 h-8 rounded-lg cursor-pointer "
            }
          >
            <a className="cursor-pointer" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
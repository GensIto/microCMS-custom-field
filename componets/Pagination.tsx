import Router from "next/router";
import Link from "next/link";

export const Pagination = ({ totalCount }: any) => {
  const PER_PAGE = 5;

  const range = (start: any, end: any) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/archive/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

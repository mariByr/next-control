'use client';

import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';
import './pagination.css'

type PaginationProps = {
    page: number,
    totalPages: number,

};

export const Pagination = ({page, totalPages, }: PaginationProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const windowSize = 10;

    const start = Math.max(1, page - windowSize);
    const end = Math.min(totalPages, page + windowSize);

    const pages = Array.from(
        {length: end - start + 1},
        (_, i) => start + i
    );

    const hasPrev = page > 1;
    const hasNext = page < totalPages;

    return (
        <div className="pagination">

            {/* PREV */}
            {hasPrev && (() => {
                const params = new URLSearchParams(searchParams);
                params.set('page', String(page - 1));

                return (
                    <Link href={`${pathname}?${params.toString()}`}>
                        Prev
                    </Link>
                );
            })()}

            {/* NUMBERS */}
            {pages.map((num) => {
                const params = new URLSearchParams(searchParams);
                params.set('page', String(num));


                return (
                    <Link
                        key={num}
                        className={`page-link ${num === page ? 'active' : ''}`}
                        href={`${pathname}?${params.toString()}`}
                    >
                        {num}
                    </Link>
                );
            })}

            {/* NEXT */}
            {hasNext && (() => {
                const params = new URLSearchParams(searchParams);
                params.set('page', String(page + 1));

                return (
                    <Link href={`${pathname}?${params.toString()}`}>
                        Next
                    </Link>
                );
            })()}

        </div>
    );
};

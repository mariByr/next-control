
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import './search.css'

export const SearchComponent = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const searchFromUrl = searchParams.get('search') || '';

    const [q, setQ] = useState(searchFromUrl);

// для сихронізації
    useEffect(() => {
        setQ(searchFromUrl);
    }, [searchFromUrl]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (q) {
            params.set('search', q);
            params.delete('genreId')
        } else {
            params.delete('search');
        }

        params.set('page', '1'); // скидаємо сторінку

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <form  className={'search-form'} onSubmit={handleSubmit}>
            <input id={'search-input'}
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search..."
            />
            <button className={'button-submit'} type="submit">Search</button>
        </form>
    );
};

'use client';

import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState } from 'react';

export const SearchComponent = () => {
    const router = useRouter();
 const pathname = usePathname();
    const searchParams = useSearchParams();

    const search = searchParams.get('search') || '';

    const [q, setQ] = useState(search);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (q) {
            params.set('search', q);
        } else {
            params.delete('search');
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                key={search}
                value={q}
                onChange={(e) => setQ(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    );
};

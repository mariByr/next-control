
'use client';

import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import './search.css'

export default function SearchInput() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [value, setValue] = useState(searchParams.get('search') || '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams.toString());

        if (value.trim()) {
            params.set('search', value.trim());
        } else {
            params.delete('search');
        }

        router.push(`/movies?${params.toString()}`);
    };

    return (
        <form  className={'search-form'} onSubmit={handleSubmit}>
            <input id={'search-input'}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter a name ..."
            />
            <button className={'button-submit'} type="submit">Search</button>
        </form>
    );
}

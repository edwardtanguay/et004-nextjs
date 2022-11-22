import React from 'react';
import Link from 'next/link';

function Header() {
	return (
		<header className="p-5 bg-blue-500">
			<Link className="mr-2 px-2 py-1 bg-white text-blue-500 rounded-lg" href="/">Home</Link>
			<Link className="mr-2 px-2 py-1 bg-white text-blue-500 rounded-lg" href="/nouns">Nouns</Link>
		</header>
	);
}

export default Header;

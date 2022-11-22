import React from 'react';
import axios from 'axios';
import { Noun } from '../../typings';
import Link from 'next/link';
import * as tools from '../../tools';

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

async function NounsList() {
	const rawNouns: Noun[] = (await axios.get(url)).data;
	const nouns: Noun[] = tools.randomize(rawNouns); 
	return (
		<>
			{nouns.map((noun: Noun) => {
				return (
					<div className="noun">
						<Link href={`/nouns/${noun.singular}`} >{noun.singular}</Link>
					</div>
				);
			})}
		</>
	);
}

export default NounsList;

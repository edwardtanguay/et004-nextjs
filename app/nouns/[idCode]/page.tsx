import React from 'react';
import axios from 'axios';
import { Noun } from '../../../typings';

const url = 'https://edwardtanguay.vercel.app/share/germanNouns.json';

type Params = {
	params: {
		idCode: string;
	};
};

async function Noun({ params: { idCode } }: Params) {
	const nouns: Noun[] = (await axios.get(url)).data;
	const rawNoun: Noun | undefined = nouns.find((m) => m.singular === idCode);
	let noun: Noun =
		rawNoun === undefined
			? {
					article: '',
					singular: '',
					plural: ''
			  }
			: rawNoun;

	return (
		<div>
			{noun.article} {noun.singular}{' '} ({noun.plural})
		</div>
	);
}

export default Noun;

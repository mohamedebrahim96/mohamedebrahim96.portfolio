import React from 'react';
import { FaCode } from 'react-icons/fa';
import { AiOutlineApi, AiOutlineCloudServer } from 'react-icons/ai';

import ResumeCard from './ResumeCard';
import Resume from './Resume';

const resumeCards = [
	{
		title: 'Android Development',
		description: 'I can develop android apps with clean architecture.',
		icon: () => <AiOutlineApi className='text-green-lighter' />
	},
	{
		title: 'iOS Development',
		description: 'I developed many iOS applications on app store.',
		icon: () => <FaCode className='text-green-lighter' />
	},
	{
		title: 'UIUX Design',
		description: 'I care about the design of my apps so that will be easy to users to understand.',
		icon: () => <AiOutlineCloudServer className='text-green-lighter' />
	}
];

const Introduce = () => {
	return (
		<div className='flex flex-wrap justify-center xm:p-12 bg-gray0'>
			<div className='flex flex-col order-first order-last w-full p-4 md:order-first md:w-1/2'>
				{resumeCards.map((card, i) => {
					return (
						<ResumeCard key={i} card={card} /> )}
					)
				}
			</div>
			<Resume />
		</div>
	);
};

export default Introduce;

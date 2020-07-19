import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
	return (
		<div className='flex flex-wrap items-center justify-center p-6 bg-transparent sm:justify-between gap-8'>
			<div className='flex flex-wrap gap-10'>
				<img className='max-w-vs' src='/images/snio-logo.svg' />
			</div>
			<div>
				<ul className='flex md:gap-10 gap-5'>
					<li className='flex items-center text-xs text-gray2 gap-2'>
						<FaLinkedin className='inline-block text-white'/>
						<a className='hover:text-green-lighter' href='#'>
							LinkedIn
						</a>
					</li>
					<li className='flex items-center text-xs text-gray2 gap-2'>
						<FaGithub className='inline-block text-white'/>
						<a className='hover:text-green-lighter' href='#'>
							GitHub
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

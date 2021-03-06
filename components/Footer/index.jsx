import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { MdPhonelinkRing } from 'react-icons/md';

const Footer = () => {
	return (
		<>
			<div className='flex flex-wrap items-center justify-center p-8 xm:justify-between sm:p-12 bg-gray0'>
				<div className='flex flex-col items-center order-last mt-6 xm:mt-0 xm:order-first space-y-3'>
					<a href='https://github.com/mohamedebrahim96' className='block'>
						<img className='max-w-vs' src='/images/snio-logo.svg' />
					</a>
					<ul className='flex space-x-4'>
						<li>
							<a href='https://github.com/mohamedebrahim96' target='_blank'>
								<FaGithub />
							</a>
						</li>
						<li>
							<a href='https://www.linkedin.com/in/mohamedebrahim96' target='_blank'>
								<FaLinkedinIn />
							</a>
						</li>
						<li>
							<a href='https://t.me/mohamedebrahim96' target='_blank'>
								<FaTelegramPlane />
							</a>
						</li>
					</ul>
				</div>
				<div className='flex flex-col items-center xm:items-start'>
					<span className='block mb-3 text-gray2 text-tiny'>
						Information
					</span>
					<span className='block mb-1 text-sm text-gray2'>
						Want to hire me?
					</span>
					<ul className='flex flex-col items-center xm:items-start'>
						<li className='flex items-center sm:text-xl space-x-2'>
							<FaEnvelope className='inline-block'/>
							<a href='mailto:ebrahimm131@gmail.com' target='_blank'>ebrahimm131@gmail.com</a>
						</li>
						<li className='flex items-center sm:text-xl space-x-2'>
							<MdPhonelinkRing />
							<a href='tel:20-127-86-95-406' target='_blank'>+20-127-86-95-406</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;

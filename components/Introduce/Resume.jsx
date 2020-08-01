import React from 'react';

const Resume = () => {
	return (
		<div className='p-4 md:w-1/2'>
			<span className='text-xs text-gray2'>Introduce</span>
			<h2 className='text-3xl'>Hi! My name is <span className='border-b-1'>Mohamed Ebrahim</span></h2>
			<p className='my-5 text-justify text-xm text-gray2'>
			I'm a software engineer who is passionate about building android or iOS applications with <span className='text-green-lighter'>Kotlin</span> and <span className='text-green-lighter'>Swift</span>.
			Creating technology to elevate people, and building community. Some technologies I enjoy working with include <span className='text-green-lighter'>Machine Learning</span> using Tensorflow, pytorch and openCV. I'm certified android developer from Google and Udacity.  I love making simple things with great impact. I spend most of my time writing code or reading about interesting things.
			</p>
		</div>
	);
};

export default Resume;

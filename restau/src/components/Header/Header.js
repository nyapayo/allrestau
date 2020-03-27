import React, { useEffect } from 'react';
import './Header.css';

function Header(props) {
	useEffect(() => {

		function draw(canvasId) {
			let canvas = document.querySelector('#'+canvasId);
			const ctx = canvas.getContext('2d');

			ctx.lineJoin = "miter";
			ctx.lineCap = "square";

			ctx.moveTo(5, 25);
			ctx.lineTo(5, 5);
			ctx.lineTo(50, 5);
			ctx.strokeStyle = '#2196F3';
			ctx.stroke();

			let bloc2 = ctx.createLinearGradient(70, 45, 115, 45);
			bloc2.addColorStop(0, '#2196F3');
			bloc2.addColorStop(1, '#e91e63');
			ctx.moveTo(70, 45);
			ctx.lineTo(115, 45);
			ctx.lineTo(115, 25);
			ctx.strokeStyle = bloc2;
			ctx.stroke();

			let titleGradient = ctx.createLinearGradient(5, 5, 100, 45);
			titleGradient.addColorStop(0, '#2196F3');
			titleGradient.addColorStop(1, '#e91e63');

			ctx.font = '23px Arial';
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';

			ctx.fillStyle = titleGradient;

			ctx.fillText('Allrestau', canvas.width/2, canvas.height/2);
		}

		draw('canvas1');

		return () => {

		}
	});
	return (
		<header className='header'>
			<div>
				<canvas id='canvas1' width='120' height='50' style={{border: '1px solid white', backgroundColor: 'white'}}></canvas>
			</div>
		</header>
	);
}

export default Header;
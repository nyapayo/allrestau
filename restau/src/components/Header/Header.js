import React, { useEffect } from 'react';
import './Header.css';

function Header(props) {
	useEffect(() => {

		function draw(canvasId) {
			let canvas = document.querySelector('#'+canvasId);
			const ctx = canvas.getContext('2d');

			ctx.lineJoin = "miter";
			ctx.lineCap = "square";

			let bloc1 = ctx.createLinearGradient(25, 25, 30, 25);
			bloc1.addColorStop(0, '#2196F3');
			bloc1.addColorStop(1, '#e91e63');

			ctx.strokeStyle = bloc1;
			ctx.moveTo(5, 25);
			ctx.lineTo(5, 5);
			ctx.lineTo(60, 5);
			ctx.stroke();

			let bloc2 = ctx.createLinearGradient(70, 5, 115, 45);
			bloc2.addColorStop(0, '#e91e63');
			bloc2.addColorStop(1, '#2196F3');

			ctx.strokeStyle = bloc2;
			ctx.moveTo(60, 45);
			ctx.lineTo(115, 45);
			ctx.lineTo(115, 25);
			ctx.stroke();

			let titleGradient = ctx.createLinearGradient(5, 5, 110, 45);
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
			<div className='logo'>
				<canvas id='canvas1' width='120' height='50' style={{border: '1px solid white', backgroundColor: 'white'}}></canvas>
			</div>
			<div className='slogan w3-wide w3-hide-small'>
				Partageons ensemble!
			</div>
		</header>
	);
}

export default Header;
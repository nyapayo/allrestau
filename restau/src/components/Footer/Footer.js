import React, { useEffect } from 'react';
import './Footer.css';

const Footer = props => {
	useEffect(() => {

		// Hide / Show footer on scroll
		(() => {
			let prevScrollpos = window.pageYOffset;
			window.onscroll = (e) => {
				let currentScrollPos = window.pageYOffset;
				  if (prevScrollpos > currentScrollPos) {
				    document.getElementById("app-footer").style.bottom = "0";
				  } else {
				    document.getElementById("app-footer").style.bottom = "-100px";
				  }
				  prevScrollpos = currentScrollPos;
			}
		})();
		return () => {

		}
	});
	return (
		<footer className='footer' id='app-footer'>
			<p className='w3-opacity'>
				&copy; Allrestau 2020. 
				Tel: <a href='tel:+237-676-615-300'>00237676615300</a>. 
				Email: <a href='mailto:siakajunior1997@gmail.com'>allrestau@support.com</a>
			</p>
		</footer>
	);
}

export default Footer;
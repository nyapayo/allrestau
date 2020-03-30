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
				    document.getElementById("app-footer").style.bottom = "-50px";
				  }
				  prevScrollpos = currentScrollPos;
			}
		})();
		return () => {

		}
	});
	return (
		<footer className='footer' id='app-footer'>
			&copy; Allrestau 2020. Tous droits reservés.
		</footer>
	);
}

export default Footer;
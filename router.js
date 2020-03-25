const express = require('express');

const router = express.Router();

router.route('/').get((req, res, next) => {
	res.writeHead(200, {
		'content-type': 'text/html'
	});
	res.write('<a href=\'/download\' download>Download</a>');
	res.end();
});

router.get('/data', (req, res, next) => {
	res.set('Content-Type', 'application/json');
	res.json({
		name: 'siaka nyapayo eric junior', 
		email: 'siakajunior1997@gmail.com',
		tel: '00237676615300',
		idnumber: 1163684458, 
		card: {
			number: '4413-4700-9036-3894', 
			bank: 'Afriland', 
			type: 'visa',
			expDate: '22/12'
		}, 
		cars: ['merco', 'audi', 'fefe', 'lambo', 'bm', 'porsche'], 
		jeans: ['dior', 'dsquared2', 'classic champoin'], 
		't-shirts': ['JR Paris', 'givenchy', 'dior', 'burberry'],
		shoes: ['nike vapormax', 'nike air jordan', 'sandales diesel'],
		computer: {
			post1: {
				tour: 'hp pavillon p6367',
				ecran: 'ag neovo 22\" 1080p',
				clavier: 'speedlink gamers',
				souris: 'Logitech'
			}
		}
	});
});

router.get('/download', (req, res, next) => {
	next();
},(req, res, next) => {
	try {
		res.download('Ninho - Bali [M.I.L.S 3.0].mp3', err => {
			if (err) {
				if (res.headersSent) {

				}
				// pass control to the error middleware gestion erreur
				next('Sorry! could not send data!')
			} else {
				// increment download count
			}
		});
	} catch(err) {
		next('Could not get specified file.');
	}
});

module.exports = router;
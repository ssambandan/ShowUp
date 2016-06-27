var check = ['sachi', 'parveen', 'ridhaa', 'adnaan'];
var name = 'adnaan';

function return_name (element, index) {
	return (element == name); 
}
console.log (check.findIndex(return_name));
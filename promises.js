const getMessageSlowly = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('Server is running.')
		}, 2000);
	});
};

// call with .then
const app1 = () => {
	console.log('getting message...');
	getMessageSlowly()
		.then((message) => {
			console.log(`The message was: ${message}`);
		})
};

// call with async/await


app1();
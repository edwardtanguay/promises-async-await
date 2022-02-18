const getId = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			const id = Math.floor(Math.random() * 2) + 1;
			resolve(id)
		}, 2000);
	});
};

// call with .then
const app1 = () => {
	console.log('getting id...');
	getId()
		.then((id) => {
			console.log(`The id is: ${id}`);
		})
};

// call with async/await


app1();
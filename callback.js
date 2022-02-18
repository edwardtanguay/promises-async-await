const getId = (callback) => {
	setTimeout(() => {
		const id = Math.floor(Math.random() * 3); // 0, 1, 2
		if (id === 0) {
			throw new Error("id not found");
		} else {
			callback(id);
		}
	}, 1000);
};

const app = () => {
	console.log('getting id...');
	try {
		getId(id => {
			console.log(`ID is ${id}`);
		});
	}
	catch (err) {
		console.log(`ERROR: ${err.message}`);
		/*
		"As far as I know, it is not possible to catch exceptions thrown in JavaScript callbacks (at least, not in any straightforward manner)." 
		"If you can use Promises and async/await, it can be solved."
		https://stackoverflow.com/questions/3677783/is-it-possible-to-catch-exceptions-thrown-in-a-javascript-async-callback
	*/
	}
};
app();
const getId = () => {
	const id = Math.floor(Math.random() * 3); // 0, 1, 2
	if (id === 0) {
		throw new Error('id not found');
	} else {
		return id;
	}
}

try {
	const id = getId();
	console.log(id);
}
catch (err) {
	console.log(err.message);
}
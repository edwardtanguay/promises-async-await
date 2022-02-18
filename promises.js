const getId = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const id = Math.floor(Math.random() * 3);
			id === 0 ? reject('id not found') : resolve(id);
		}, 1000);
	});
};

const getEmployee = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			switch (id) {
				case 1:
					resolve({
						id,
						name: "Sancho Rodrigez"
					});
				case 2:
					resolve({
						id,
						name: "Wolfram Randomlich"
					});
				default:
					reject(`employee not found with id ${id}`);
			}
		}, 1000);
	})
}

// call with .then
const app1 = () => {
	console.log('getting id...');
	getId()
		.then(id => {
			console.log(`The id is: ${id}`);
			console.log('getting employee...');
			getEmployee(3)
				.then(employee => {
					console.log(`Employee is: ${employee.name}`);
				})
				.catch(error => {
					console.log(`ERROR: ${error}`);
				});
		})
		.catch(error => {
			console.log(`ERROR: ${error}`);
		})
};

// call with async/await


app1();
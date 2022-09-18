$(() => {
	$('#find').click(findUser);
});

const findUser = (evt) => {
	evt.preventDefault();
	const userInfo = {};
	const userID = $.getJSON({
		url: `https://jsonplaceholder.typicode.com/users/${$(
			'#user-id'
		).val()}`,
		contentType: 'application/json; charset=utf-8',
	}).done((data) => {
		$.getJSON({
			url: `https://jsonplaceholder.typicode.com/posts?userId=${$(
				'#user-id'
			).val()}`,
			contentType: 'application/json; charset=utf-8',
		}).done((posts) => {
			posts.userInfo = data;
			displayUserInfo(posts);
		});
	});
};

const displayUserInfo = (data) => {
	let listItem = '';
	data.forEach(
		(el) =>
			(listItem += `<dt style="color: hsl(240, 96%, 72%); font-size: 1.5em;">${el.title}</dt><dd>${el.body}</dd>`)
	);

	$('#username').text('Username: ' + data.userInfo.username);
	$('#email').text('Email: ' + data.userInfo.email);
	$('#address').text('Address: ' + data.userInfo.address.street);
	$('#posts').html(listItem);
};

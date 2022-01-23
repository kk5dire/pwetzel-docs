export default {
	'/categories/': [
		{
			text: 'Fun',
			children: [
				'/categories/fun/command-name1.md',
			],
		},
		{
			text: 'Actions',
			children: [
				'/categories/actions/command-name2.md',
			],
		},
		{
			text: 'Economy',
			children: [
				'/categories/economy/command-name3.md',
			],
		},
	],
	'/': [
		{
			text: 'Welcome',
			children: [
				'/',
			],
		},
		{
			text: 'Commands',
			children: [
				'/categories/',
				'/categories/economy/command-name3.html',
			],
		},
	],
};

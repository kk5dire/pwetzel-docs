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
			text: 'Pwetzel Bot',
			children: [
				'/',
			],
		},
		{
			text: 'Commands',
			children: [
				'/categories/',
			],
		},
		{
			text: 'API',
			children: [
				'/api/',
				'/api/authorization.md',
				'/api/ratelimits.md',
				'/api/endpoints.md',
			],
		},
	],
};

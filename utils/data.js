const data = {
	skills: {
		languages: [
			{
				img: '/svgs/html5.svg',
				text: 'HTML',
			},
			{ img: '/svgs/css3.svg', text: 'CSS' },
			{ img: '/svgs/sass.svg', text: 'Sass' },
			{ img: '/svgs/bootstrap.svg', text: 'Bootstrap' },
			{ img: '/svgs/tailwind.svg', text: 'Tailwind' },

			{ img: '/svgs/js.svg', text: 'Javascript' },
			{ img: '/svgs/react.svg', text: 'React' },
			{ img: '/svgs/next-js.svg', text: 'NextJs' },
			{ img: '/svgs/php.svg', text: 'PHP' },
			{ img: '/svgs/mysql.svg', text: 'MYSQL' },
			{ img: '/svgs/c.svg', text: 'C' },
		],
		quirks: [
			{
				text: 'Responsive Design',
				desc: 'Creating responsive sites across all screen sizes',
			},
			{
				text: 'Problem Solving',
				desc: 'Solve problems cleanly and efficiently',
			},
			{
				text: 'Fast learner',
				desc: 'Fast rate of learning new skills enabling easier and faster adaptation',
			},
			{
				text: 'Versatile',
				desc: 'High flexibilty and competence',
			},
		],
	},
	works: [
		{
			image: '/imgs/shopify.png',
			name: 'Shopify',
			desc: 'An ecommerce site for looking up and buying of goods',
			link: 'https://shopify-pp.vercel.app/',
			langs: ['NextJs', 'CSS'],
		},
		{
			image: '/imgs/tmdb.png',
			name: 'The Movie DB',
			desc: 'A site for getting infomation on movies',
			link: 'https://movies-app-pp.netlify.app/',
			langs: ['React', 'CSS'],
		},

		{
			image: '/imgs/clipboard.png',
			name: 'Clipboard',
			desc: 'A landing page of a clipboard app',
			link: 'https://adetuyi.github.io/Clipboard-landing-fmc/',
			langs: ['HTML', 'CSS'],
		},
		{
			image: '/imgs/crowdfunding.png',
			name: 'Crowdfunding',
			desc: 'A landing page of a monitor riser',
			link: 'https://adetuyi.github.io/Crowdfunding-fmc/',
			langs: ['HTML', 'CSS'],
		},
		{
			image: '/imgs/qApp2.png',
			name: 'Quiz App',
			desc: 'An interactive, timed JavaScript quiz that stores a high score leaderboard in local storage',
			link: 'https://adetuyi.github.io/quiz-app/',
			langs: ['HTML', 'CSS', 'Tailwind', 'Javascript'],
		},
		{
			image: '/imgs/rps.png',
			name: 'Rock Paper Scissors',
			desc: 'Play a game of rock paper scissors',
			link: 'https://adetuyi.github.io/Rock-paper-scissors-fmc/',
			langs: ['HTML', 'CSS', 'Javascript'],
		},
		{
			image: '/imgs/pcomponent.png',
			name: 'Pricing Component',
			desc: 'Choose your subscription plan',
			link: 'https://adetuyi.github.io/pricing-component',
			langs: ['HTML', 'CSS', 'Tailwind', 'Javascript'],
		},
	],
};
export default data;

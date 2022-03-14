const data = {
	skills: {
		technologies: [
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
			{ img: '/svgs/next-js.svg', text: 'Next' },
			{ img: '/svgs/node.svg', text: 'Node' },
			{ img: '/svgs/express.svg', text: 'Express' },
			{ img: '/svgs/ts.svg', text: 'Typescript' },
			{ img: '/svgs/redux.svg', text: 'Redux' },
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
			image: '/imgs/inv.png',
			mImage: '/imgs/minv.png',
			name: 'Invoice App',
			desc: "Create an invoice with a set time to pay. Dont't forget to mark as paid once you pay",
			link: 'https://invoice-app-pp.herokuapp.com/',
			langs: ['Node', 'Express', 'HTML', 'CSS'],
		},
		{
			image: '/imgs/tmdb.png',
			mImage: '/imgs/mtmdb.png',
			name: 'The Movie DB',
			desc: 'A site for getting infomation on movies',
			link: 'https://movies-app-pp.netlify.app/',
			langs: ['React', 'CSS'],
		},
		{
			image: '/imgs/rps.png',
			name: 'Rock Paper Scissors',
			desc: 'Play a game of rock paper scissors',
			link: 'https://adetuyi.github.io/Rock-paper-scissors-fmc/',
			langs: ['HTML', 'CSS', 'Javascript'],
		},
		{
			image: '/imgs/clipboard.png',
			name: 'Clipboard',
			desc: 'A landing page of a clipboard app',
			link: 'https://adetuyi.github.io/Clipboard-landing-fmc/',
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
			image: '/imgs/pcomponent.png',
			name: 'Pricing Component',
			desc: 'Choose your subscription plan with an interactive slider',
			link: 'https://adetuyi.github.io/pricing-component',
			langs: ['HTML', 'CSS', 'Tailwind', 'Javascript'],
		},
		{
			image: '/imgs/tip.png',
			name: 'Tip Calculator',
			desc: 'Calculate how much tip an individual gets for a given sum',
			link: 'https://adetuyi.github.io/Tip-calculator-fmc/',
			langs: ['HTML', 'CSS', 'Javascript'],
		},

		/*{
			image: '/imgs/crowdfunding.png',
			name: 'Crowdfunding',
			desc: 'A landing page of a monitor riser',
			link: 'https://adetuyi.github.io/Crowdfunding-fmc/',
			langs: ['HTML', 'CSS'],
		},*/
	],
};
export default data;

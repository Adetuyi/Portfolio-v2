export const callbackFunc = (entries, observerTwo) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observerTwo.unobserve(entry.target);
		}
	});
};

export const callbackFunc = (entries, targetRef) => {
	const [entry] = entries;
	if (entry.isIntersecting) {
		targetRef.current.classList.remove('bg-light');
	} else {
		targetRef.current.classList.add('bg-light');
	}
};
export const callbackFuncTwo = (entries, observerTwo) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observerTwo.unobserve(entry.target);
		}
	});
};

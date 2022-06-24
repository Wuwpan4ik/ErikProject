(function () {
	var observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			console.log(entry)
			let entrySquare = entry.target.querySelector('.action__animate');
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
			}

			if (entry.isIntersecting) {
				entrySquare.classList.add('action-animation');
				return;
			}

			entrySquare.classList.remove('action-animation');
		});
	});

	document.querySelectorAll('.scroll__function').forEach((i) => {
		if (i) {
			observer.observe(i);
		}
	});
})();
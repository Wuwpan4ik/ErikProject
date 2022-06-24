(function () {
	var observer = new IntersectionObserver(entries => {
		// Проходит по каждому элементу
		entries.forEach(entry => {
			console.log(entry)
			// Добавляет класс action-animation в блок action__animate при скролле
			let entrySquare = entry.target.querySelector('.action__animate');
			if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
				return;
			}

			if (entry.isIntersecting) {
				entrySquare.classList.add('action-animation');
				return;
			}
	// Убирает класс action-animation в блок action__animate при скролле
			entrySquare.classList.remove('action-animation');
		});
	});
// 	Проходит по всем блокам scroll__function и отсылает в функцию сверху
	document.querySelectorAll('.scroll__function').forEach((i) => {
		if (i) {
			observer.observe(i);
		}
	});
})();

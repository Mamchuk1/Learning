// Добавляем span всем элементам li
for  ( let li of tree.querySelectorAll('li')) {
	let span = document.createElement('span');
	span.classList.add('show');
	li.prepend(span);
	span.append(span.nextSibling)
}

	// Проверка на span

tree.onclick = function (event) {
	console.log(event.target.tagName);
	if (event.target.tagName != 'SPAN') return;

	// Сворачивание элементов

	let childrenContainer = event.target.parentNode.querySelector('ul');

	// Если нет вложенных детей

	if(!childrenContainer) return;

	childrenContainer.hidden = !childrenContainer.hidden;

	// Определение, есть ли дальше вложенность
	
	if (childrenContainer.hidden) {
		event.target.classList.add('hide');
		event.target.classList.remove('show');
	}
	else {
		event.target.classList.add('show');
		event.target.classList.remove('hide');
	}
}
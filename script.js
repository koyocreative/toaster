const toastModule = ( function() {

	function setResponse(response) {
		this.response = response;
	}

	function render(name, type, timeout = 3000) {

		const toast = document.createElement('div');
		toast.classList.add(`toast`);
		toast.classList.add(`toast-${type}`);
		toast.innerHTML = type;

		toast.addEventListener('load', function() { console.log('fck') });

		eatToast( this.response.appendChild(toast) , timeout);
	}


	function eatToast(element, timeout) {
		setTimeout(function() {
			element.remove();
		}, timeout);
	}



	return { setResponse, render }

})();

toastModule.setResponse(document.querySelector('#response'));

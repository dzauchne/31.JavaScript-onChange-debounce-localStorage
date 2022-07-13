
// 1) Создать блок, в котором будет находится инпут. При событии focus на инпуте в консоль должна приходить запись "Фокус". А по прошествии 5 секунд должно происходить событие blur.

 const enter__field__input = document.querySelector('.enter-field__input');

 enter__field__input.addEventListener("focus", function (e) {
	console.log('Фокус!');
	setTimeout(() => {
		enter__field__input.blur();
		}, 5000);
	
		enter__field__input.addEventListener("blur", function (e) {
			console.log('Снятие фокуса!');
			
	});
	

});




// 2) Добавить событие focus на родительский блок, при фокусе у блока должна появляться рамка синго цвета

const enter__field = document.querySelector('.enter-field');

enter__field.addEventListener("focus", function (e) {
	console.log('form');
 	enter__field.style.border = "3px solid blue"
    
});



// 3) Создать объект с параметрами телефона. И этот объект поместить в localStorage. Также создать переменные  своего имени, фамилии, добавить их в loacalStorage, после чего удалить оттуда имя

const phone = {
	model: 'Nokia',
	color: "silver",
	price: 300,
	numOfSim:2,
}

localStorage.setItem('phone', JSON.stringify(phone));

const name = "Darya";
localStorage.setItem('userName', name);
console.log(localStorage.getItem('userNameKey'));
const surname = "Zauchner";
localStorage.setItem('userSurname', surname);
console.log(localStorage.getItem('userSurname'));

localStorage.removeItem('userNameKey');



















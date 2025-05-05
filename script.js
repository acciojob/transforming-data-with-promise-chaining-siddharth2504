//your JS code here. If required.
let input = document.querySelector("#ip")
let button = document.querySelector("#btn")
let div = document.querySelector("#output")

button.addEventListener("click", () => {
	new Promise((res, rej) => {
		setTimeout(() => {
			div.innerText = `Result: ${input.value}`
			res(Number(input.value))
		}, 2000)
	})
	.then(value => {
		return new Promise((res, rej) => {
			setTimeout(() => {
			    div.innerText = `Result: ${value*2}`
			    res(value*2)
		    }, 1000)
		})
	})
	.then(value => {
		return new Promise((res, rej) => {
			setTimeout(() => {
			    div.innerText = `Result: ${value-3}`
			    res(value-2)
		    }, 1000)
		})
	})
	.then(value => {
		return new Promise((res, rej) => {
			setTimeout(() => {
			    div.innerText = `Result: ${value/2}`
			    res(value/2)
		    }, 1000)
		})
	})
	.then(value => {
		setTimeout(() => {
			div.innerText = `Result: ${value+10}`
		}, 1000)
	})
})








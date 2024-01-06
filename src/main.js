import App from './App.svelte';
import Nav from './Nav.svelte'

let vars = {
	name: "world",
	site: "Roblox Scripts"
}

const app = new App({
	target: document.getElementById('main'),
	props: {
		vars
	}
});

const nav = new Nav({
	target: document.getElementById('nav'),
	props: {
		vars
	}
})

export default app;
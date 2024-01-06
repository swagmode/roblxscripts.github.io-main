<script>

	import Router from 'svelte-spa-router'

	import Home from './routes/Home.svelte';
	import Games from "./routes/Games.svelte";
	import Exploits from './routes/Exploits.svelte';
	import Discord from './routes/Discord.svelte';

	import NotFound from './routes/NotFound.svelte';
	import Loading from './routes/Loading.svelte';
  	import GameMenu from './routes/GameMenu.svelte';
	import ExploitsMenu from './routes/ExploitsMenu.svelte';

	let routes = {
		'/': Home,
		'/games': Games,
		'/games/:id': GameMenu,
		'/exploits/:id': ExploitsMenu,
		'/exploits': Exploits,
		'/discord': Discord,
		'*': NotFound
	}
	// Test

</script>

<!-- <svelte:head>
	<title>{vars.site} - Home</title>
	<html lang="en" />
</svelte:head> -->

<main>
	<Router {routes}/>
</main>




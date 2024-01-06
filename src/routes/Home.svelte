<script>
	import {fly} from 'svelte/transition'
	
	let title = "Roblox Script_"
	setInterval(() => {
		if(title == 'Roblox Scripts') {
			title = "Roblox Script_"
		} else if(title == 'Roblox Script_') title = "Roblox Scripts"
	}, 500)
</script>

<svelte:head>
	<title>Home</title>
	<html lang="en" />
</svelte:head>

<main in:fly="{{duration: 500}}">

	<h1 class="nosel">{title}</h1>
	<div class="searchBar">
		<i class="fa fa-search"></i>
		<input type="text" id="search" name="search" placeholder="Search scripts..">
	</div>
	
</main>

<style>
	
	main {
		display: flex;
		flex-direction: column;
		text-align: center;
		padding: 1em;
		align-items: center;
	}

	.searchBar {
		display: flex;
		background-color: rgba(255, 255, 255, 0.538);
		width: 20em;
		margin: 0;
		margin-top: 1em;
		justify-content: space-between;
		border-radius: 15px;
		align-items: center;
	}

	i {
		margin-right: 10px;
		margin-left: 15px;
	}

	#search {
		background-color: transparent;
		height: 2.5em;
		margin: 0;
		border: none;
		border-radius: 15px;
		color: #171617;
	}


	h1 {
		background: linear-gradient(to right, #f96da5 20%, #a786fb 40%, #da86fb 60%, #f76196 80%, #f96da5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 300% auto;
		font-size: 3.5em;
		font-weight: 300;
		margin: 1em;
		margin-bottom: 0px;
		font-family: 'Rowdies', cursive;
		animation: gradient 5s ease 2s infinite alternate;
	}

	

</style>
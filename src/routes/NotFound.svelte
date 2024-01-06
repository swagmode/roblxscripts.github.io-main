<script>
	import { scale } from "svelte/transition";
</script>

<main>

	<div class="box">
		<h1 in:scale={{duration: 800}}>404 Not Found</h1>
		<h3 in:scale={{duration: 800}}>Cannot find that route..</h3>
	</div>

</main>

<style>

	.box {
		margin-top: 4em;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

    main {
		text-align: center;
	}

	h1 {
		color: var(--primary);
		text-transform: uppercase;
		font-size: 2em;
		margin: 0;
	}

	h3 {
		color: var(--primary-hover);
		font-size: 1.2em;
	}

</style>
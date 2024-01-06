<script>
    import { blur } from "svelte/transition";
</script>

<svelte:head>
	<title>📃 Discord Server</title>
	<html lang="en" />
</svelte:head>

<discord in:blur="{{duration: 500}}">
    <h1>Discord</h1>
</discord>

<style>

</style>
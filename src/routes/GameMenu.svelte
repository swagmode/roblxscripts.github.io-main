<script>
    import { fade } from "svelte/transition";
    import {replace} from 'svelte-spa-router'
    import { onMount } from "svelte";

    import NotFound from "./NotFound.svelte";
    import Loading from "./Loading.svelte";
    export let params = {};

    const go_back = () => {
        replace('/games')
    }

    let games;
    let game;

    onMount(async () => {
        const response = await fetch('/games.json')
        let json = await response.json()
        games = json.games

        game = games.filter(e => e.id.toLowerCase() == params.id.toLowerCase())
        if(game.length < 1) {
            game = null
        } else {
            game = game[0]
        }
        
    })

    

</script>

<game in:fade="{{duration: 500}}">

    {#if game}

        <h1>{game.name}</h1>
        <div class="info">
            <p>{game.description}</p>
        </div>

        <div class="images">
            <img src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/optimized/4X/3/1/a/31abf09c25a484bf6365a39f8001df68087779a5_2_690x388.jpeg" alt="">
        </div>

        
    {:else if game == null}
        <NotFound/>
    {:else}
        <Loading/>
    {/if}


    <button on:click={go_back} id="goBack" class="goBack"><i class="fa-solid fa-arrow-left"></i></button>

</game>

<style>

    game {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .info {
        width: 80%;
    }

    .images {
        border: 1px solid #fff;
    }

    h1 {
        margin: 0;
        margin-top: 1em;
    }

</style>
<script>
    import {fade, slide} from 'svelte/transition';
    import {replace} from 'svelte-spa-router';
    import { onMount } from 'svelte';
    import Loading from './Loading.svelte';

    import { copy } from 'svelte-copy';

    import Highlight from "svelte-highlight";
    import lua from "svelte-highlight/languages/lua";
    import github from "svelte-highlight/styles/github-dark-dimmed";

    let games = []
    
    const go_back = () => {
        replace('/')
    }

    onMount(async() => {
        let response = await fetch('/games.json')
        let json = await response.json()

        games = json.games
    })

    let sel_game;
    let show_modal = false;
</script>

<svelte:head>
	<title>🎮 Games</title>
	<html lang="en" />
    {@html github}
</svelte:head>

<games in:fade="{{duration: 250}}">

    <button on:click={go_back} id="goBack" class="goBack"><i class="fa-solid fa-arrow-left"></i></button>
    
    <h1 class="nosel">Games</h1>

    {#if show_modal}
        <dialog open in:fade="{{duration: 500}}" out:fade="{{duration: 500}}">
            <article>
            <header>
                <span>{sel_game.name}</span>
                <button on:click={() => show_modal = false}><a aria-label="Close" class="close"></a></button>
            </header>
            {#each sel_game.scripts as script}
                <div class="scripts">
                    <p>{script.name}</p>
                    <div class="code">
                        <Highlight class="CodeBlock" language={lua} code={script.code} />
                        <button use:copy={script.code}><i class="fa-regular fa-copy"></i></button>
                    </div>
                </div>
            {/each}
            <p>
                {sel_game.code_description ? sel_game.code_description : ''}
            </p>
            </article>
        </dialog>
    {/if}

    <div in:fade={{duration: 500}} class="games_list">
        
        {#each games as game}
            <div in:fade={{duration: 500}} id="games">

                <div id="info">
                    <span>{game.name}</span>
                </div>
                <div id="photo">
                    <a href="/#/games/{game.id}">
                        <img src="{game.image}" alt="">
                    </a>
                </div>
                <div class="buttons">
                    <button on:click={() => {
                        sel_game = game;
                        show_modal = true
                    }}><span>Copy</span></button>

                    <button on:click={() => {
                        window.location = `/#/games/${game.id}`
                    }}><span>Open</span></button>
                </div>

            </div>

        {:else}
            <Loading/>
        {/each}

    </div>

</games>

<style>

    article {
        padding-bottom: 20px;
    }

    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 15px;
        margin-bottom: 20px;
    }
    header button {
        width : 10%;
        background-color: transparent;
        border: none;
        padding: 0px;
        margin: 0px;
    }

    games {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-x: scroll;
    }

    .code {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .code button {
        width: 10%;
        margin: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        padding: 14px;
        background-color: var(--secondary);
    }
    .code button:hover {
        background-color: var(--primary);
    }

    .CodeBlock {
        width: 90%;
        margin: 0;
    }

    pre {
        margin: 0;
    }

    .scripts {
        margin-bottom: 10px;
    }

    .games_list {
        text-align: center;
        width: 75%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
        align-items: center;
    }

    #games {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        background-color: #1c252cc5;
        margin: 1em;
        color: #ffffffbe;
        border-radius: 15px;
        transition: all .2s ease-in-out;
        width: 225px;
        padding: 15px;
    }

    #games:hover {
        transform: scale(1.05);
        border: 1px dashed slateblue;
    }

    #games img {
        /* border-top-left-radius: 15px;
        border-top-right-radius: 15px; */
        border-radius: 15px;
        margin-bottom: 5px;
    }

    #games #info {
        margin-bottom: 10px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .buttons span {
        font-size: 80%;
        color: white;
        font-weight: 600;
    }

    .buttons button {
        padding: 5px;
        margin: 0px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3px;
        border: none;
    }

    h1 {
		background: linear-gradient(to right, #f96da5 20%, #a786fb 40%, #da86fb 60%, #f76196 80%, #f96da5 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-size: 300% auto;
		font-size: 3em;
		font-weight: 700;
		margin: 0.5em;
		animation: gradient 5s ease 2s infinite alternate;
	}

	@keyframes gradient {
		to {
			background-position: 300% center;
		}
	}
    
</style>
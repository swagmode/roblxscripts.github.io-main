<script>
    export let vars;

    import {push, pop, replace} from 'svelte-spa-router';

    const go_back = () => {
        replace('/')
    }

</script>

<nav class="nosel">

    <ul>
      <li><bold>{vars.site}</bold></li>
    </ul>
    <ul>

      <li><a href="#/games"><i class="fa-regular fa-game-console-handheld"></i> <span>Games</span></a></li>

      <li><a href='#/exploits'><i class="fa-solid fa-wrench"></i> <span>Exploits</span></a></li>

      <li><a href="#/discord" style='margin-left: 1em; color: lightblue'> <i class="fa-brands fa-discord"></i></a></li>
    </ul>

  </nav>

<style>
    nav {
        padding-left: 1em;
        padding-right: 1em;
        background-color: var(--background-color);
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-image: linear-gradient(to right, #f96da5 20%, #a786fb 40%, #da86fb 60%, #f76196 80%, #f96da5 100%) 1;
    }


    a:visited {
        color: var(--primary);
    }

    i {
        margin: 5px;
    }

    @media only screen and (max-width: 600px) {
        span {
            display: none;
        }
    }

</style>
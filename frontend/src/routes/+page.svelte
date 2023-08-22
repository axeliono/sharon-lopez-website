<script lang="ts">
	import Navbar from "$lib/Navbar.svelte";
	import { darkModeChecked } from "$lib/stores"

    const setTheme = () => {
        return ($darkModeChecked ? "dark" : "light");
        
    }
</script>
<div data-theme="{setTheme}">
    <Navbar/>
</div>

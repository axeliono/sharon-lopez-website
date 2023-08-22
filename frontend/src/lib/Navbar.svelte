<script lang="ts">
   let menuOpen = false;
   import { darkModeChecked } from "$lib/stores.js";
    let checked: boolean = $darkModeChecked;
   const openMenu = () => {
    menuOpen = !menuOpen
   }

   const changeMode = () => {
    darkModeChecked.update((value: boolean) => value = !value)
    console.log($darkModeChecked);
   }

</script>
<div class="navbar bg-base-100">
    <a class="btn btn-ghost normal-case text-xl">Sharon Lopez LPC</a>
    <ul class="menu menu-vertical lg:menu-horizontal">
        <li><a>Counseling</a></li>
        <li><a>About Me</a></li>
        <li><a>Appointments</a></li>
    </ul>
    <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" class="toggle toggle-success" on:change={changeMode} {checked}/>
        </label>
    </div>
</div>
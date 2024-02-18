<script lang="ts">
	import Homepage from './Homepage/+page.svelte';
</script>

<main class="font-garamond">
	<div class="drawer drawer-end">
		<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
		<div class="drawer-content flex flex-col">
			<!-- Navbar -->
			<nav class="w-full navbar bg-base-100 sticky top-0 border-b-2">
				<div class="flex-1 px-2 mx-2 text-2xl">
					<a href="#home" class="no-underline">Living In The Bonus</a>
				</div>
				<div class="flex-none hidden lg:block">
					<ul class="menu menu-horizontal">
						<!-- Navbar menu content here -->
						<li><a href="#about">About Me</a></li>
						<li><a href="#books">Books</a></li>
						<li><a href="#services">Services</a></li>
					</ul>
				</div>
				<div class="flex-none lg:hidden">
					<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							class="inline-block w-6 h-6 stroke-current"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/></svg
						>
					</label>
				</div>
			</nav>
			<Homepage data />
		</div>
		<div class="drawer-side">
			<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay" />
			<ul class="menu p-4 w-80 min-h-full bg-base-200 z-50">
				<!-- Sidebar content here -->
				<li><a href="#about">About Me</a></li>
				<li><a href="#books">Books</a></li>
				<li><a href="#services">Services</a></li>
			</ul>
		</div>
	</div>
</main>

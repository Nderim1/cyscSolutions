<script>
	import logo from '$lib/images/icon_white_v3.svg';
	import { onMount } from 'svelte';
	import { debounce } from 'lodash-es';

	let isOpen = false;
	let isMobile = false;

	const toggleNav = () => {
		isOpen = !isOpen;
	};

	const handleResize = debounce(() => {
		isMobile = window.innerWidth < 468;
	}, 200);

	onMount(() => {
		isMobile = window.innerWidth < 468;
		window.addEventListener('resize', handleResize);
	});
</script>

<div
	class={`navbar-wrapper fixed top-0 left-0 w-full backdrop-blur-md z-10 ${
		isOpen ? 'h-44' : 'h-16'
	}`}
>
	<nav class={` shadow sticky top-0 bg-transparent backdrop-blur-md z-10`}>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex items-center w-full md:place-content-around">
					<a href="/"><img src={logo} alt="CyberScript Solutions" /></a>
					<div class="hidden sm:block">
						<ul class="ml-10 flex items-baseline space-x-4">
							<li><a href="#home" class="white hover:no-underline hover:text-gray-700">Home</a></li>
							<li>
								<a href="#solutions" class="white hover:no-underline hover:text-gray-700"
									>Solutions Eri</a
								>
							</li>
							<li>
								<a href="#about" class="white hover:no-underline hover:text-gray-700">About</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="-mr-2 flex sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md white"
						aria-controls="mobile-menu"
						aria-expanded={isOpen}
						on:click={toggleNav}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="h-6 w-6"
							class:hidden={isOpen}
							class:block={!isOpen}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<svg
							class="h-6 w-6"
							class:hidden={!isOpen}
							class:block={!isOpen}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div
			class={`sm:hidden absolute top-16 inset-x-0 bg-transparent   ${isOpen ? 'block' : 'hidden'}`}
			id="mobile-menu"
		>
			<div class="px-2 pt-2 pb-3 space-y-1">
				<a href="#" class="white hover:text-gray-700 block">Home</a>
				<a href="#" class="white hover:text-gray-700 block">Solutions eri</a>
				<a href="#" class="white hover:text-gray-700 block">About</a>

				<a href="#" class="white hover:text-gray-700 block">Contact</a>
			</div>
		</div>
	</nav>
</div>

<style>
	/* header {
		z-index: 99;
		position: sticky;
		top: 0;
		padding: 12px;
		justify-content: space-between;
	}
	.header_container {
		width: 60%;
		display: flex;
		margin-left: auto;
		margin-right: auto;
		justify-content: space-between;
	}

	.corner {
		width: 5em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	} */

	/* .corner img {
		width: 6em;
		height: 2em;
		object-fit: contain;
	} */

	/* nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	} */

	/* ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	} */
</style>

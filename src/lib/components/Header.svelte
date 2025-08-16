<script>
	import logo from '$lib/images/icon_white_v3.svg';
	import { onMount, onDestroy } from 'svelte';
	import { debounce } from 'lodash-es';

	let isOpen = false;
	let isMobile = false;
	let isSolutionsOpen = false;

	const navItems = [
		{ href: '/', text: 'Startseite' },
		{
			text: 'Lösungen',
			children: [
				{ href: '/legal', text: 'für ⚖️ Juristische Praxen' },
				{ href: '/finance', text: 'für 💰 Finanz- & Versicherungswesen' },
				{ href: '/real-estate', text: 'für 🏢 Immobilienagenturen' },
				{ href: '/manufacturing', text: 'für 🏭 Produktion & Fertigung' }
			]
		},
		{ href: '/#portfolio', text: 'Portfolio' },
		{ href: '/#about', text: 'Über uns' },
		{ href: '/#contact', text: 'Kontakt', isButton: true }
	];

	const toggleNav = () => {
		isOpen = !isOpen;
	};

	const toggleSolutions = () => {
		console.log('toggleSolutions', isSolutionsOpen);
		isSolutionsOpen = !isSolutionsOpen;
	};

	const handleClickOutside = (event) => {
		if (isSolutionsOpen && event.target.id !== 'solutions') {
			isSolutionsOpen = false;
		}
	};

	onMount(() => {
		const handleResize = debounce(() => {
			isMobile = window.innerWidth < 468;
		}, 200);

		isMobile = window.innerWidth < 468;
		window.addEventListener('resize', handleResize);
		window.addEventListener('click', handleClickOutside);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div
	class={`navbar-wrapper fixed top-0 left-0 w-full backdrop-blur-md z-10 ${
		isOpen ? 'h-44' : 'h-16'
	}`}
>
	<nav
		class={`shadow sticky top-0 bg-base-200/60 border-b border-base-300/40 backdrop-blur-md z-10`}
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex items-center w-full md:place-content-around">
					<a href="/" aria-label="Topalli CyScript GbR Startseite">
						<img src={logo} alt="Topalli CyScript GbR Logo - Webentwicklung und IT-Beratung" />
						<h1 class="sr-only">Topalli CyScript GbR</h1>
					</a>
					<div class="hidden sm:block">
						<ul class="ml-10 flex items-baseline space-x-4 text-slate-200">
							{#each navItems as item}
								<li class="relative">
									{#if item.children}
										<button
											id="solutions"
											on:click={toggleSolutions}
											class="hover:no-underline hover:text-cyan-300 flex items-center"
										>
											{item.text}
											<svg
												class="w-4 h-4 ml-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												><path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M19 9l-7 7-7-7"
												/></svg
											>
										</button>
										{#if isSolutionsOpen}
											<ul
												class="absolute left-0 mt-2 w-[21rem] bg-base-200/90 backdrop-blur rounded-md shadow-lg z-20"
											>
												{#each item.children as child}
													<li>
														<a
															href={child.href}
															class="block px-4 py-2 text-slate-200 hover:bg-base-300/60 hover:no-underline"
															>{child.text}</a
														>
													</li>
												{/each}
											</ul>
										{/if}
									{:else if item.isButton}
										<a
											href={item.href}
											class="btn btn-primary btn-sm text-base-100 hover:no-underline rounded-sm"
											>{item.text}</a
										>
									{:else}
										<a href={item.href} class="hover:no-underline hover:text-cyan-300"
											>{item.text}</a
										>
									{/if}
								</li>
							{/each}
						</ul>
					</div>
				</div>
				<div class="-mr-2 flex sm:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 rounded-md text-slate-200"
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
			class={`sm:hidden absolute top-16 inset-x-0 bg-base-100/80 border-b border-base-300/40 backdrop-blur ${
				isOpen ? 'block' : 'hidden'
			}`}
			id="mobile-menu"
		>
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each navItems as item}
					{#if item.children}
						<div class="relative">
							<button
								id="solutions"
								on:click={toggleSolutions}
								class="w-full text-left hover:text-cyan-300 flex items-center"
							>
								{item.text}
								<svg
									class="w-4 h-4 ml-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/></svg
								>
							</button>
							{#if isSolutionsOpen}
								<div class="pl-4">
									{#each item.children as child}
										<a href={child.href} class="block hover:text-cyan-300">{child.text}</a>
									{/each}
								</div>
							{/if}
						</div>
					{:else}
						<a href={item.href} class="block hover:text-cyan-300">{item.text}</a>
					{/if}
				{/each}
			</div>
		</div>
	</nav>
</div>

<style>
	/* No custom styles needed for now */
</style>

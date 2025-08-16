<script>
	export let icon;
	export let title;
	export let description;
	export let longDescription;
	export let features;
	import { onMount } from 'svelte';
	import { fly, slide } from 'svelte/transition';

	let ready = false;
	let openIndex = null;

	const toggleFeature = (index) => {
		openIndex = openIndex === index ? null : index;
	};

	onMount(() => {
		ready = true;
	});
</script>

{#if ready}
	<div class="container mx-auto px-4 py-24 text-slate-200">
		<div class="max-w-4xl mx-auto">
			<header in:fly={{ y: 20, duration: 500, delay: 300 }} class="text-center mb-12">
				<h1 class="text-5xl font-bold mb-4">
					<span class="mr-4">{icon}</span>{title}
				</h1>
				<p class="text-xl text-slate-400">{description}</p>
			</header>

			<section in:fly={{ y: 20, duration: 500, delay: 400 }} class="mb-12">
				<p class="text-lg text-slate-300 leading-relaxed whitespace-pre-line">
					{longDescription}
				</p>
			</section>

			<main>
				<ul class="space-y-4">
					{#each features as feature, i}
						<li
							in:fly={{ y: 20, duration: 500, delay: 600 + i * 100 }}
							class="bg-base-200/40 rounded-lg shadow-lg border border-base-300/20 overflow-hidden transition-all duration-300"
						>
							<button
								on:click={() => toggleFeature(i)}
								class="w-full text-left p-6 flex justify-between items-center hover:bg-base-300/20 transition-colors"
							>
								<h3 class="text-lg font-semibold text-slate-200">{feature.title}</h3>
								<svg
									class="w-6 h-6 text-slate-400 transition-transform duration-300 transform"
									class:rotate-180={openIndex === i}
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
							{#if openIndex === i}
								<div transition:slide={{ duration: 300 }} class="px-6 pb-6 text-slate-400">
									<p>{feature.details}</p>
								</div>
							{/if}
						</li>
					{/each}
				</ul>
			</main>

			<footer class="text-center mt-16">
				<a
					in:fly={{ y: 20, duration: 500, delay: 1000 }}
					href="#contact"
					class="btn btn-primary btn-lg text-base-100 hover:no-underline rounded-sm"
				>
					Kontakt aufnehmen
				</a>
			</footer>
		</div>
	</div>
{/if}

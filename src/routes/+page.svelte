<script>
	import Divider from '../lib/components/divider.svelte';
	import ball from '$lib/images/network_ball.png';

	import Custom from '../lib/components/Custom.svelte';
	import Web from '../lib/components/Web.svelte';
	import Mobile from '../lib/components/Mobile.svelte';

	let sectionToShow = 'custom';

	const changeSection = (section) => {
		sectionToShow = section;
	};
</script>

<svelte:head>
	<title>CyberScript</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<div class="bg-[url('$lib/images/dark_mode_bg.svg')] bg-cover bg-center bg-no-repeat h-screen">
		<section
			id="home"
			class="flex flex-col-reverse items-center content-center ml-auto mr-auto h-full justify-evenly md:justify-between md:w-11/12 md:flex-row lg:w-5/6 xl:w-2/3"
		>
			<div class="w-96 p-5 sm:p-auto">
				<h2 class="text-left text-2xl">
					Transform Your Production Process with <strong class="font-extrabold">
						CyberScript Solutions</strong
					>
				</h2>
				<Divider />
				<p>
					From automation and monitoring to custom software development, we have the expertise and
					experience to help you achieve your goals faster and more efficiently.
				</p>
				<Divider />
				<button class="w-28 bg-indigo-400 rounded-sm text-black p-1 hover:text-white"
					>Contact us!</button
				>
			</div>
			<div class="w-48 h-48 md:w-96 md:h-96">
				<img class="rotate" src={ball} alt="" />
			</div>
		</section>
	</div>
	<section class="flex w-full justify-center pt-16 -mt-16" id="solutions">
		<div class="tabs">
			<button
				class="tab tab-lg tab-bordered {sectionToShow === 'custom' ? 'tab-active' : ''}"
				on:click={() => changeSection('custom')}>Custom</button
			>
			<button
				class="tab tab-lg tab-bordered {sectionToShow === 'web' ? 'tab-active' : ''}"
				on:click={() => changeSection('web')}>Web</button
			>
			<button
				class="tab tab-lg tab-bordered {sectionToShow === 'mobile' ? 'tab-active' : ''}"
				on:click={() => changeSection('mobile')}>Mobile</button
			>
		</div>
	</section>
	{#if sectionToShow === 'custom'}
		<!-- content here -->
		<Custom />
	{:else if sectionToShow === 'web'}
		<Web />
	{:else}
		<!-- else content here -->
		<Mobile />
	{/if}
	<section class="flex w-full justify-center" id="about">
		<span>About</span>
	</section>
</div>

<style>
	@keyframes rotating {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	.rotate {
		-webkit-animation: rotating 25s linear infinite;
	}
</style>

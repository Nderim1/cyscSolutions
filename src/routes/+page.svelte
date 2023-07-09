<script>
	import Divider from '../lib/components/divider.svelte';
	import ball from '$lib/images/network_ball.png';

	import Custom from '../lib/components/Custom.svelte';
	import Web from '../lib/components/Web.svelte';
	import Mobile from '../lib/components/Mobile.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import About from '../lib/components/About.svelte';

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
			class="flex flex-col-reverse items-center content-center pt-28 ml-auto mr-auto h-full justify-evenly md:justify-between md:w-11/12 md:flex-row lg:w-5/6 xl:w-2/3 md:pt-0"
		>
			<div class="w-96 p-5 sm:p-auto">
				<h2 class="text-left text-2xl">
					Elevate Your Online Presence: Tailored digital solutions for your business by <br
					/><strong class="font-extrabold text-indigo-600"> CyberScript Solutions</strong>
				</h2>
				<Divider />
				<p>
					we combine cutting-edge technology with captivating design to create digital experiences
					that captivate, engage, and drive results. <br /> Our mission is to help businesses thrive
					in the digital landscape.
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
	<section class="flex w-full justify-center pt-24 -mt-16 flex-col" id="solutions">
		<span class="text-center">Solutions</span>
		<Custom />
	</section>
	<section class="flex w-full justify-center pt-32 -mt-16  flex-col gap-10" id="about">
		<span class="text-center">About</span>
		<About />
	</section>
	<section class="flex w-full justify-center p-10 flex-col items-center pt-32" id="about">
		<span>Contact us</span>
		<br />
		<div>
			<Contact />
		</div>
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

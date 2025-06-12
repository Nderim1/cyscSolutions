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
	<meta name="description" content="Deutsche Webseite" />
</svelte:head>

<div>
	<div class="bg-[url('$lib/images/dark_mode_bg.svg')] bg-cover bg-center bg-no-repeat h-screen">
		<section
			id="home"
			class="flex flex-col-reverse items-center content-center pt-28 ml-auto mr-auto h-full justify-evenly md:justify-between md:w-11/12 md:flex-row lg:w-5/6 xl:w-2/3 md:pt-0"
		>
			<div class="w-96 p-5 sm:p-auto">
				<h2 class="text-left text-2xl">
					Steigern Sie Ihre Online-Präsenz: Maßgeschneiderte digitale Lösungen für Ihr Unternehmen von <br
					/><strong class="font-extrabold text-indigo-600"> CyberScript Solutions</strong>
				</h2>
				<Divider />
				<p>
					Wir verbinden modernste Technologie mit fesselndem Design, um digitale Erlebnisse zu schaffen,
					die begeistern, fesseln und Ergebnisse liefern. <br /> Unsere Mission ist es, Unternehmen zu helfen,
					in der digitalen Welt zu wachsen.
				</p>
				<Divider />
				<a
					href="#contact"
					class="btn btn-accent w-32 rounded-sm text-black p-1 hover:text-white hover:no-underline"
					>Kontaktieren Sie uns!</a
				>
			</div>
			<div class="w-[35rem] h-[35rem]">
				<img class="rotate" src={ball} alt="" />
			</div>
		</section>
	</div>
	<section class="flex w-full justify-center pt-24 -mt-16 flex-col" id="solutions">
		<span class="text-center">Lösungen</span>
		<Custom />
	</section>
	<section class="flex w-full justify-center pt-32 -mt-16  flex-col gap-10" id="about">
		<span class="text-center">Über uns</span>
		<About />
	</section>
	<section class="flex w-full justify-center p-10 flex-col items-center pt-32" id="contact">
		<span>Kontakt</span>
		<br />
		<div>
			<Contact />
		</div>
	</section>
</div>

<style>
	@keyframes rotating {
		from {
			transform: rotate(0deg);
			-webkit-transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
			-webkit-transform: rotate(360deg);
		}
	}

	.rotate {
		animation: rotating 25s linear infinite;
		-webkit-animation: rotating 25s linear infinite;
	}
</style>

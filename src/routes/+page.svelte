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
	<title>CyScript Solutions – Webentwicklung, App Entwicklung & IT Beratung</title>
	<meta name="description" content="CyScript Solutions bietet professionelle Webentwicklung, App Entwicklung, IT-Beratung und digitale Lösungen für Unternehmen. Wir helfen Ihnen, Ihre Online-Präsenz zu stärken und Ihr Geschäft digital erfolgreich zu machen." />
	<meta name="keywords" content="CyScript, Webentwicklung, App Entwicklung, IT Beratung, Digitale Lösungen, Webdesign, SEO, Online-Präsenz, Softwareentwicklung, Digitalisierung, Unternehmen, Agentur, responsive Design, Svelte, Deutschland" />
	<meta name="author" content="CyScript Solutions" />
	<link rel="canonical" href="https://www.cyscript.de/" />
	<!-- Open Graph Meta Tags -->
	<meta property="og:title" content="CyScript Solutions – Webentwicklung, App Entwicklung & IT Beratung" />
	<meta property="og:description" content="Professionelle digitale Lösungen, Webentwicklung und Beratung für Unternehmen. Jetzt Online-Präsenz steigern mit CyScript Solutions!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.cyscript.de/" />
	<meta property="og:image" content="https://www.cyscript.de/og-image.jpg" />
	<meta property="og:site_name" content="CyScript Solutions" />
	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="CyScript Solutions – Webentwicklung, App Entwicklung & IT Beratung" />
	<meta name="twitter:description" content="Digitale Lösungen, Webentwicklung, App Entwicklung & IT Beratung für Unternehmen. Jetzt Kontakt aufnehmen!" />
	<meta name="twitter:image" content="https://www.cyscript.de/og-image.jpg" />
	<meta name="twitter:site" content="@cyscript" />
</svelte:head>

<div>
	<div class="bg-[url('$lib/images/dark_mode_bg.svg')] bg-cover bg-center bg-no-repeat h-screen">
		<section
			id="home"
			class="flex flex-col-reverse items-center content-center pt-28 ml-auto mr-auto h-full justify-evenly md:justify-between md:w-11/12 md:flex-row lg:w-5/6 xl:w-2/3 md:pt-0"
		>
			<div class="w-96 p-5 sm:p-auto">
				<h1 class="text-left text-2xl">
					Steigern Sie Ihre Online-Präsenz: Maßgeschneiderte digitale Lösungen für Ihr Unternehmen von <br />
					<strong class="font-extrabold text-indigo-600">CyScript Solutions</strong>
				</h1>
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
			<div class="network-ball-container w-[35rem] h-[35rem] flex items-center justify-center">
				<img class="rotate network-ball-img" src={ball} alt="Netzwerk-Ball – CyScript Solutions, moderne IT und Webentwicklung" />
			</div>
		</section>
	</div>
	<section class="flex w-full justify-center pt-24 -mt-16 flex-col" id="solutions">
		<h2 class="text-center text-2xl font-bold mb-4">Lösungen</h2>
		<Custom />
	</section>
	<section class="flex w-full justify-center pt-32 -mt-16  flex-col gap-10" id="about">
		<h2 class="text-center text-2xl font-bold mb-4">Über uns</h2>
		<About />
	</section>
	<section class="flex w-full justify-center p-10 flex-col items-center pt-32" id="contact">
		<h2 class="text-center text-2xl font-bold mb-4">Kontakt</h2>
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

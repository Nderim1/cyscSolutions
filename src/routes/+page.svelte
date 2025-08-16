<script>
	import ball from '$lib/images/network_ball.png';

	import Custom from '../lib/components/Custom.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import About from '../lib/components/About.svelte';
	import Portfolio from '../lib/components/Portfolio.svelte';

	let sectionToShow = 'custom';

	const changeSection = (section) => {
		sectionToShow = section;
	};
</script>

<svelte:head>
	<title>Topalli CyScript GbR – Webentwicklung, App Entwicklung & IT Beratung</title>
	<meta
		name="description"
		content="Topalli CyScript GbR bietet professionelle Webentwicklung, App Entwicklung, IT-Beratung und digitale Lösungen für Unternehmen. Wir helfen Ihnen, Ihre Online-Präsenz zu stärken und Ihr Geschäft digital erfolgreich zu machen."
	/>
	<meta
		name="keywords"
		content="Topalli CyScript GbR, Individuelle Webanwendungen, KI Anwendungen, Automatisierung, Workflows, Integrationen, API, Backend, SEO, Online-Präsenz, Softwareentwicklung, Digitalisierung, Unternehmen, Agentur, Svelte, Deutschland"
	/>
	<meta name="author" content="Topalli CyScript GbR" />
	<link rel="canonical" href="https://www.cyscript.de/" />
	<!-- Open Graph Meta Tags -->
	<meta
		property="og:title"
		content="Topalli CyScript GbR – Webentwicklung, App Entwicklung & IT Beratung"
	/>
	<meta
		property="og:description"
		content="Professionelle digitale Lösungen, Webentwicklung und Beratung für Unternehmen. Jetzt Online-Präsenz steigern mit Topalli CyScript GbR!"
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.cyscript.de/" />
	<meta property="og:image" content="https://www.cyscript.de/og-image.jpg" />
	<meta property="og:site_name" content="Topalli CyScript GbR" />
	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Topalli CyScript GbR – Webentwicklung, App Entwicklung & IT Beratung"
	/>
	<meta
		name="twitter:description"
		content="Digitale Lösungen, Webentwicklung, App Entwicklung & IT Beratung für Unternehmen. Jetzt Kontakt aufnehmen!"
	/>
	<meta name="twitter:image" content="https://www.cyscript.de/og-image.jpg" />
	<meta name="twitter:site" content="@topalli_cyscript" />
</svelte:head>

<div>
	<div
		class="bg-[url('$lib/images/dark_mode_bg.svg')] bg-cover bg-center bg-no-repeat h-full md:h-screen"
	>
		<section
			id="home"
			class="flex flex-col-reverse items-center content-center pt-28 ml-auto mr-auto h-full justify-evenly md:justify-between md:w-11/12 md:flex-row lg:w-5/6 xl:w-2/3 md:pt-0"
		>
			<div class="max-w-2xl p-5 sm:p-0">
				<div
					class="inline-flex items-center gap-2 rounded-full border border-base-300/50 bg-base-100/40 px-3 py-1 text-xs text-slate-300"
				>
					<span class="inline-block w-2 h-2 rounded-full bg-cyan-400" aria-hidden="true" />
					Webanwendungen
					<span class="inline-block w-2 h-2 rounded-full bg-cyan-600" aria-hidden="true" />
					Workflows
					<span class="inline-block w-2 h-2 rounded-full bg-cyan-800" aria-hidden="true" /> KI
				</div>
				<h1 class="mt-4 text-left text-4xl md:text-6xl font-extrabold leading-tight">
					<span
						class="bg-gradient-to-r from-cyan-300 via-teal-300 to-cyan-200 bg-clip-text text-transparent md:text-[clamp(3rem,_2.5vh,_1.25rem)]"
					>
						Individuelle Webanwendungen & KI‑Workflows,
					</span>
					<br />
					<span class="text-slate-200  md:text-[clamp(2.5rem,_2.5vh,_1.125rem)]"
						>die echte Geschäftsprobleme lösen</span
					>
				</h1>
				<p
					class="mt-5 text-slate-300 max-w-xl text-[clamp(0.875rem,_2.5vh,_1.125rem)] md:text-lg leading-relaxed"
				>
					Entwicklung von maßgeschneiderten Webanwendungen, Integrationen und KI-Workflows, die
					Prozesse automatisieren, Entscheidungen beschleunigen und messbare Ergebnisse liefern.
				</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<a
						href="#contact"
						class="btn btn-primary btn-lg rounded-sm text-base-100 hover:no-underline"
						>Projekt starten</a
					>
					<!-- <a
						href="#portfolio"
						class="btn btn-ghost rounded-sm text-cyan-300 hover:text-cyan-200 hover:no-underline"
						>Portfolio ansehen</a
					> -->
				</div>
				<ul class="mt-6 flex flex-wrap gap-4 text-sm text-slate-400">
					<li class="inline-flex items-center gap-2">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							><path
								d="M5 13l4 4L19 7"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
						Neuesten KI-Technologien
					</li>
					<li class="inline-flex items-center gap-2">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							><path
								d="M5 13l4 4L19 7"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
						Experten auf dem Gebiet
					</li>
					<li class="inline-flex items-center gap-2">
						<svg
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							><path
								d="M5 13l4 4L19 7"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/></svg
						>
						Responsiv & schnell
					</li>
				</ul>
			</div>
			<div
				class="relative w-[22rem] h-[22rem] md:w-[28rem] md:h-[28rem] lg:w-[35rem] lg:h-[35rem] flex items-center justify-center z-1"
			>
				<div
					class="absolute -inset-6 rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-400/10 to-transparent blur-2xl z-1"
				/>
				<div
					class="relative rounded-full ring-1 ring-cyan-400/20 bg-base-200/10 backdrop-blur-sm p-8 z-1"
				>
					<img
						class="rotate network-ball-img w-[18rem] md:w-[24rem] lg:w-[30rem] h-auto"
						src={ball}
						alt="Netzwerk-Ball – Topalli CyScript GbR, moderne IT und Webentwicklung"
					/>
				</div>
			</div>
		</section>
	</div>
	<section class="flex w-full justify-center pt-24 -mt-16 flex-col reveal" id="solutions">
		<h2 class="text-center text-2xl font-bold mb-4">Lösungen</h2>
		<Custom />
	</section>

	<section class="flex w-full justify-center pt-32 -mt-16 flex-col gap-10 reveal" id="portfolio">
		<h2 class="text-center text-2xl font-bold mb-4">Portfolio</h2>
		<Portfolio />
	</section>
	<section class="flex w-full justify-center pt-32 -mt-16  flex-col gap-10 reveal" id="about">
		<h2 class="text-center text-2xl font-bold mb-4">Agentur</h2>
		<About />
	</section>
	<section class="flex w-full justify-center p-10 flex-col items-center pt-32 reveal" id="contact">
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

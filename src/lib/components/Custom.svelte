<script>
	import Step from './step.svelte';
	import step1Img from '$lib/images/step1.svg';
	import step2Img from '$lib/images/step2.svg';
	import step3Img from '$lib/images/step3.svg';
	import step4Img from '$lib/images/step4.svg';

	const stepsData1 = [
		{
			img: step1Img,
			title: 'Individuelle Webanwendungen',
			description:
				'Wir entwickeln maßgeschneiderte Webanwendungen, die exakt zu Ihren Prozessen passen: Portale, Dashboards, interne Tools und Backoffice-Lösungen — robust, skalierbar und sicher.'
		},
		{
			img: step2Img,
			title: 'Integrationen & Workflows',
			description:
				'Wir verbinden Systeme und automatisieren Abläufe: APIs, Webhooks, Daten-Sync, ETL und Ende‑zu‑Ende‑Workflows, die Zeit sparen, Fehler reduzieren und Transparenz schaffen.'
		},
		{
			img: step3Img,
			title: 'Mobile & Cross‑Platform',
			description:
				'Native iOS/Android oder Cross‑Platform. Fokus auf Performance, Offline‑Fähigkeit, sichere Authentifizierung und reibungslose Integration in Ihre vorhandene Systemlandschaft.'
		},
		{
			img: step4Img,
			title: 'KI‑Anwendungen & Automatisierung',
			description:
				'Wir bauen KI‑Lösungen, die echte Arbeit übernehmen: Dokumentverarbeitung, Klassifikation, Empfehlung, RAG‑Wissenssuche und Agent‑Workflows — weit über einfache Chatbots hinaus.'
		}
	];
</script>

<section>
	<h3 class="sr-only">Unsere Lösungen im Überblick</h3>

<div class="flex items-center content-center ml-auto mr-auto h-full md:w-11/12 lg:w-5/6 xl:w-2/3">
	<div>
		{#each stepsData1 as step, index}
			{@const isEven = index % 2 === 0}
			<Step stepData={step} {isEven} />
		{/each}
	</div>
</div>
</section>

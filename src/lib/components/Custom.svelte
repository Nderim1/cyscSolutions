<script>
	import Step from './step.svelte';
	import step1Img from '$lib/images/step1.svg';
	import step2Img from '$lib/images/step2.svg';
	import step3Img from '$lib/images/step3.svg';
	import step4Img from '$lib/images/step4.svg';

	const stepsData1 = [
		{
			img: step1Img,
			title: 'Webdesign',
			description:
				'Mit großer Sorgfalt und einem tiefen Verständnis für Nutzerverhalten erstellen wir Designs, die nicht nur beeindrucken, sondern auch die Bindung fördern. Lassen Sie uns Ihre Vision in ein atemberaubendes Design verwandeln, das Ihre Marke repräsentiert und Ihre Zielgruppe anspricht.'
		},
		{
			img: step2Img,
			title: 'Webentwicklung',
			description:
				'Bei Topalli CyScript GbR sind wir spezialisiert auf die Entwicklung robuster und benutzerfreundlicher Websites, die Ihre Online-Präsenz stärken. Von einfachen Unternehmenswebsites bis hin zu komplexen E-Commerce-Plattformen passen wir unsere Webentwicklungslösungen an Ihre spezifischen Anforderungen an.'
		},
		{
			img: step3Img,
			title: 'Mobile Entwicklung',
			description:
				'In der mobilen Welt ist eine Präsenz auf Smartphones und Tablets unerlässlich. Ob Sie eine native iOS- oder Android-App oder eine plattformübergreifende Lösung benötigen – wir verfügen über das Know-how, um Ihr App-Konzept zum Leben zu erwecken. Unser Fokus liegt darauf, nahtlose Benutzererlebnisse zu schaffen, die das volle Potenzial der Mobiltechnologie nutzen.'
		},
		{
			img: step4Img,
			title: 'Künstliche Intelligenz (KI)',
			description:
				"Mit unseren KI-Services bringen wir Ihr Unternehmen auf das nächste Level: Wir entwickeln intelligente Automatisierungen und maßgeschneiderte KI-Anwendungen, die Ihre Geschäftsprozesse effizienter gestalten und wertvolle Ressourcen sparen. Ob smarte Chatbots, automatisierte Datenanalysen oder individuelle KI-Lösungen – wir integrieren innovative Technologien, um Ihre Wettbewerbsfähigkeit nachhaltig zu stärken und neue digitale Chancen zu erschließen. Lassen Sie sich von uns zur optimalen KI-Strategie beraten!"
		}
	];
</script>

<section>
	<h3 class="sr-only">Unsere Lösungen im Überblick</h3>

<div class="flex items-center content-center ml-auto mr-auto h-full md:w-11/12 lg:w-5/6 xl:w-2/3">
	<div>
		{#each stepsData1 as step, index}
			{@const isEven = index % 2 === 0}
			<Step stepData={step} {isEven} {index} />
		{/each}
	</div>
</div>
</section>

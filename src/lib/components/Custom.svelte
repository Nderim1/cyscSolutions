<script>
	import Step from './step.svelte';
	import step1Img from '$lib/images/step1.svg';
	import step2Img from '$lib/images/step2.svg';
	import step3Img from '$lib/images/step3.svg';
	import step4Img from '$lib/images/step4.svg';
	import step5Img from '$lib/images/step5.svg';
	// const stepsData = [
	// 	{
	// 		img: step1Img,
	// 		title: 'identify pain points',
	// 		description:
	// 			'we begin by conducting an in-depth analysis of your business’s production processes to identify current challenges and areas for improvement. This involves talking with key employees, reviewing documentation and observing any repetitive or slow production processes.'
	// 	},
	// 	{
	// 		img: step2Img,
	// 		title: 'define scope and requirements',
	// 		description:
	// 			"in this step we work with you to define the scope and the requirements of the projects. This involves determining your business's goals, budget, timeline and priorities, and other project constraints."
	// 	},
	// 	{
	// 		img: step3Img,
	// 		title: 'development of a custom software solution',
	// 		description:
	// 			'using the information gathered during the two phases above, we develop a custom software solution that addresses and solves the problems identified. This may involve building new software from scratch, modifying existing software, or integrating multiple software solutions.'
	// 	},
	// 	{
	// 		img: step4Img,
	// 		title: 'integration, training and support',
	// 		description:
	// 			'once the software solution has been deployed and integrated with the current systems, we provide training and support for your employees that uses the software. This would ensure that the software is used in the most effective way possible.'
	// 	},
	// 	{
	// 		img: step5Img,
	// 		title: 'monitor and optimize',
	// 		description:
	// 			'we continuously monitor and optimize the software solution to ensure that it is meeting your business needs and performing as expected. This would involve conducting regular audits, collecting feedback from users, and making updates and refinements as needed.'
	// 	}
	// ];

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
				'Bei CyberScript Solutions sind wir spezialisiert auf die Entwicklung robuster und benutzerfreundlicher Websites, die Ihre Online-Präsenz stärken. Von einfachen Unternehmenswebsites bis hin zu komplexen E-Commerce-Plattformen passen wir unsere Webentwicklungslösungen an Ihre spezifischen Anforderungen an.'
		},
		{
			img: step3Img,
			title: 'Mobile Entwicklung',
			description:
				'In der mobilen Welt ist eine Präsenz auf Smartphones und Tablets unerlässlich. Ob Sie eine native iOS- oder Android-App oder eine plattformübergreifende Lösung benötigen – wir verfügen über das Know-how, um Ihr App-Konzept zum Leben zu erwecken. Unser Fokus liegt darauf, nahtlose Benutzererlebnisse zu schaffen, die das volle Potenzial der Mobiltechnologie nutzen.'
		},
		{
			img: step4Img,
			title: 'Marketing',
			description:
				"In der heutigen wettbewerbsintensiven digitalen Landschaft sind effektive Marketingstrategien entscheidend, um sich von der Masse abzuheben. Wir setzen auf einen datengesteuerten Ansatz und nutzen SEO, Social-Media-Marketing, Content-Erstellung und bezahlte Werbung, um Ihre Online-Sichtbarkeit zu maximieren und messbare Ergebnisse zu erzielen. Lassen Sie uns eine maßgeschneiderte Marketingstrategie entwickeln, die Ihren Zielen entspricht und Ihrem Unternehmen zum Erfolg verhilft."
		}
	];
</script>

<div class="flex items-center content-center ml-auto mr-auto h-full md:w-11/12 lg:w-5/6 xl:w-2/3">
	<div>
		{#each stepsData1 as step, index}
			{@const isEven = index % 2 === 0}
			<Step stepData={step} {isEven} {index} />
		{/each}
	</div>
</div>

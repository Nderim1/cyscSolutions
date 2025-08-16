<script>
	import IndustryPage from '$lib/components/IndustryPage.svelte';

	const pageData = {
		icon: '⚖️',
		title: 'Juristische Praxen',
		description: 'Wir helfen Kanzleien und Notariaten, ihre Prozesse zu digitalisieren und effizienter zu gestalten:',
		longDescription: `In der heutigen digitalen Welt stehen Kanzleien und Notariate vor der Herausforderung, ihre traditionellen Arbeitsweisen zu modernisieren, um wettbewerbsfähig zu bleiben. Wir bei CyScript verstehen die spezifischen Anforderungen der Rechtsbranche und bieten maßgeschneiderte KI-Lösungen, die nicht nur die Effizienz steigern, sondern auch höchste Sicherheitsstandards erfüllen. Unsere Werkzeuge sind darauf ausgelegt, Ihre vertraulichen Daten zu schützen und gleichzeitig den Zugriff auf wichtige Informationen zu beschleunigen.`,
		features: [
			{
				title: 'Sichere Dokumentenanalyse & Vertragsprüfung',
				details: 'Unsere KI analysiert Verträge und juristische Dokumente in Sekundenschnelle auf Risiken, relevante Klauseln und Abweichungen von Standards. Die Verarbeitung erfolgt auf Ihren Systemen, sodass keine sensiblen Daten das Haus verlassen.'
			},
			{
				title: 'Intelligente Fall- und Wissensverwaltung',
				details: 'Finden Sie sofort relevante Präzedenzfälle, Gesetze und interne Dokumente. Unsere semantische Suche versteht juristische Fachsprache und liefert präzise Ergebnisse, die Ihre Recherchezeit drastisch reduzieren.'
			},
			{
				title: 'Mandanten-Chatbots',
				details: 'Entlasten Sie Ihr Team von Routineanfragen. Unsere Chatbots können Termine koordinieren, Erstinformationen bereitstellen und häufig gestellte Fragen 24/7 beantworten, was die Mandantenzufriedenheit erhöht.'
			}
		]
	};
</script>

<IndustryPage {...pageData} />

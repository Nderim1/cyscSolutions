<script>
	import IndustryPage from '$lib/components/IndustryPage.svelte';

	const pageData = {
		icon: '🏭',
		title: 'Produktion & Fertigung',
		description: 'Wir entwickeln maßgeschneiderte Lösungen für produzierende Unternehmen, um Kosten zu senken und Prozesse zu optimieren:',
		longDescription: `In der Fertigungsindustrie sind Effizienz und Präzision entscheidend für den Erfolg. Stillstandszeiten, Lieferkettenprobleme und Qualitätsschwankungen können erhebliche Kosten verursachen. Wir bieten intelligente Lösungen, die Ihnen helfen, Ihre Produktionsprozesse zu überwachen, vorausschauende Wartung zu betreiben und Ihre Lieferkette zu optimieren. Mit unseren maßgeschneiderten Dashboards haben Sie jederzeit den vollen Überblick und können datengestützte Entscheidungen treffen.`,
		features: [
			{
				title: 'Predictive Maintenance',
				details: 'Analysieren Sie Sensordaten Ihrer Maschinen, um Ausfälle vorherzusagen, bevor sie auftreten. Planen Sie Wartungsarbeiten proaktiv, reduzieren Sie ungeplante Stillstände und verlängern Sie die Lebensdauer Ihrer Anlagen.'
			},
			{
				title: 'Automatisierte Lager- und Lieferkettenüberwachung',
				details: 'Optimieren Sie Ihre Bestände und Lieferketten durch intelligente Überwachung. Unsere Systeme prognostizieren den Bedarf, erkennen Engpässe frühzeitig und schlagen Bestellungen automatisch vor.'
			},
			{
				title: 'Individuelle Dashboards für Produktions- und Qualitätskontrolle',
				details: 'Visualisieren Sie Ihre Produktionsdaten in Echtzeit. Überwachen Sie Kennzahlen wie OEE (Overall Equipment Effectiveness), Ausschussquoten und Zykluszeiten, um die Qualität zu sichern und die Effizienz zu steigern.'
			}
		]
	};
</script>

<IndustryPage {...pageData} />

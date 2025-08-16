<script>
	import IndustryPage from '$lib/components/IndustryPage.svelte';

	const pageData = {
		icon: '💰',
		title: 'Finanz- & Versicherungswesen',
		description: 'Wir unterstützen Banken und Versicherer bei der sicheren und effizienten Digitalisierung:',
		longDescription: `Die Finanz- und Versicherungsbranche ist stark reguliert und datenintensiv. Die Digitalisierung bietet enorme Chancen, erfordert aber auch höchste Sorgfalt im Umgang mit sensiblen Informationen. Wir entwickeln KI-gestützte Systeme, die Ihnen helfen, regulatorische Anforderungen zu erfüllen, Risiken zu minimieren und gleichzeitig die Effizienz Ihrer Abläufe zu maximieren. Unsere Lösungen sind darauf ausgelegt, Ihnen einen klaren Wettbewerbsvorteil zu verschaffen.`,
		features: [
			{
				title: 'Automatisierte Dokumentenverarbeitung',
				details: 'Beschleunigen Sie die Bearbeitung von Verträgen, Schadensmeldungen und KYC-Dokumenten. Unsere KI extrahiert und validiert relevante Daten automatisch, was die manuelle Arbeit reduziert und die Fehlerquote senkt.'
			},
			{
				title: 'Compliance- & Risikoüberwachung',
				details: 'Überwachen Sie Transaktionen und Kundenaktivitäten in Echtzeit, um verdächtige Muster zu erkennen und regulatorische Anforderungen (z.B. GwG) zu erfüllen. Unsere Systeme lernen kontinuierlich dazu und passen sich neuen Bedrohungen an.'
			},
			{
				title: 'Kunden-Assistenten',
				details: 'Bieten Sie Ihren Kunden rund um die Uhr Unterstützung bei Standardanfragen, Produktberatungen und Antragsprozessen. Dies steigert die Kundenzufriedenheit und entlastet Ihre Service-Mitarbeiter.'
			}
		]
	};
</script>

<IndustryPage {...pageData} />

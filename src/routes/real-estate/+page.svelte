<script>
	import IndustryPage from '$lib/components/IndustryPage.svelte';

	const pageData = {
		icon: '🏢',
		title: 'Immobilienagenturen',
		description: 'Wir machen Immobiliengeschäfte effizienter und kundenfreundlicher:',
		longDescription: `Der Immobilienmarkt ist schnelllebig und wettbewerbsintensiv. Um erfolgreich zu sein, müssen Agenturen in der Lage sein, schnell auf Anfragen zu reagieren und ihren Kunden einen erstklassigen Service zu bieten. Unsere KI-Lösungen helfen Ihnen, Routineaufgaben zu automatisieren, damit Sie sich auf das Wesentliche konzentrieren können: den Aufbau von Kundenbeziehungen und den Abschluss von Geschäften. Von der ersten Anfrage bis zum Vertragsabschluss – wir machen Ihre Prozesse intelligenter.`,
		features: [
			{
				title: 'Virtuelle Assistenten für Anfragen und Besichtigungstermine',
				details: 'Qualifizieren Sie Anfragen automatisch vor und lassen Sie Besichtigungstermine rund um die Uhr buchen. Unser Assistent beantwortet erste Fragen und stellt sicher, dass Sie nur mit ernsthaften Interessenten sprechen.'
			},
			{
				title: 'Automatisierte Vertrags- und Dokumentenerstellung',
				details: 'Erstellen Sie Mietverträge, Exposés und andere Dokumente im Handumdrehen. Unsere KI füllt Vorlagen automatisch mit den korrekten Daten, was Zeit spart und Fehler vermeidet.'
			},
			{
				title: 'Prognosen & Marktanalysen',
				details: 'Nutzen Sie datengestützte Analysen, um den optimalen Verkaufspreis oder Mietzins für eine Immobilie zu ermitteln. Wir analysieren Marktdaten, Lage und Ausstattung, um Ihnen eine fundierte Entscheidungsgrundlage zu liefern.'
			}
		]
	};
</script>

<IndustryPage {...pageData} />

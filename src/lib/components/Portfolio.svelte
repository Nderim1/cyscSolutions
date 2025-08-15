<script>
  import devImg from '$lib/images/dev.png';
  import monitorImg from '$lib/images/monitor_illustration.png';
  import trainingImg from '$lib/images/training_illustration.png';

  const cases = [
    {
      title: 'Performance-optimierte Unternehmensseite',
      desc:
        'Migration auf moderne SvelteKit-Architektur, Lighthouse 95+, statische Auslieferung via CDN. Ergebnis: +38% Conversions.',
      image: devImg,
      tags: ['SvelteKit', 'Tailwind', 'SEO'],
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M4 6h16M4 12h10M4 18h7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`
    },
    {
      title: 'KI-gestützte Support-Automatisierung',
      desc:
        'Eingangsqualifizierung, Ticket‑Routing und Antwortvorschläge mit KI. Ergebnis: 40% weniger Supportaufwand.',
      image: trainingImg,
      tags: ['KI', 'Automatisierung', 'Integrationen'],
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`
    },
    {
      title: 'Headless CMS & E‑Commerce',
      desc:
        'Headless-Setup mit API-First Ansatz, schnelle Produktpflege, responsives UI und Checkout-Optimierung.',
      image: monitorImg,
      tags: ['Headless', 'CMS', 'E‑Commerce'],
      icon: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M8 20h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>`
    }
  ];
</script>

<div class="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
  <div class="flex items-center justify-end mb-6">
    <a href="#contact" class="btn btn-ghost text-cyan-300 hover:text-cyan-200 hover:no-underline">Projekt anfragen →</a>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each cases as c}
      <article class="card bg-base-200/60 border border-base-300/40 card-hover">
        <figure class="aspect-[16/9] overflow-hidden">
          <img src={c.image} alt={c.title} class="w-full h-full object-cover" loading="lazy" />
        </figure>
        <div class="card-body">
          <div class="flex items-center gap-2 text-cyan-300" aria-hidden="true">{@html c.icon}</div>
          <h3 class="card-title text-slate-100">{c.title}</h3>
          <p class="text-slate-300">{c.desc}</p>
          <div class="mt-2 flex flex-wrap gap-2">
            {#each c.tags as t}
              <span class="badge badge-ghost text-slate-300 border-base-300/60">{t}</span>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  /* Cards use a translucent base with subtle borders to maintain clarity on dark backgrounds */
</style>

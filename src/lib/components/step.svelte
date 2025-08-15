<script>
	export let stepData;
	export let isEven;
</script>

<section class="flex w-full items-center flex-col text-center sm:text-left sm:even:flex-row-reverse sm:odd:flex-row mt-20 mb-20 p-10 sm:p-0">
    <img src={stepData.img} alt={stepData.title} class="w-48 h-48" loading="lazy" decoding="async" />
    <div class={`mt-10 sm:mt-0 ${isEven ? 'sm:ml-16' : 'sm:mr-16'}`}>
        <span class="text-sm text-indigo-400">service</span>
        <h2 class="font-extrabold text-xl flex items-center gap-2">
            <span class="inline-block w-2 h-2 rounded-full bg-cyan-400" aria-hidden="true"></span>
            {stepData.title}
        </h2>
        <div class="text-left">{stepData.description}</div>
    </div>
</section>

<style>
</style>

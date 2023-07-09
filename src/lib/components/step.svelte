<script>
	import firstStep from '$lib/images/pain_point_1.png';
	export let stepData;
	export let isEven;
	export let index;
</script>

<div
	class="flex w-full items-center flex-col text-center sm:text-left sm:even:flex-row-reverse sm:odd:flex-row mt-20 mb-20 p-10 sm:p-0"
>
	<img src={stepData.img} alt="" class="w-48 h-48" />
	<div class="mt-10 sm:mt-0 {`${isEven ? 'sm:ml-16' : 'sm:mr-1ml-16'}`}">
		<span class="text-sm text-indigo-400">service</span>
		<h2 class="font-extrabold text-xl">{stepData.title}</h2>
		<div class="text-left">{stepData.description}</div>
	</div>
</div>

<style>
</style>

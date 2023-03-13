<script>
	import firstStep from '$lib/images/pain_point_1.png';
	export let stepData;
	export let isEven;
	export let index;
</script>

<div class="flex w-full items-center even:flex-row-reverse mt-20 mb-20">
	<img src={stepData.img} alt="" class="w-48 h-48" />
	<div class={`${isEven ? 'ml-16' : 'mr-1ml-16'}`}>
		<span class="text-sm text-indigo-400">step {index + 1}</span>
		<h2 class="font-extrabold text-xl">{stepData.title}</h2>
		<div>{stepData.description}</div>
	</div>
</div>

<style>
</style>

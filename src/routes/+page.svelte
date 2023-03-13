<script>
	import Divider from '../lib/components/divider.svelte';
	import Step from '../lib/components/step.svelte';
	import ball from '$lib/images/network_ball.png';
	import step1Img from '$lib/images/step1.svg';
	import step2Img from '$lib/images/step2.svg';
	import step3Img from '$lib/images/step3.svg';
	import step4Img from '$lib/images/step4.svg';
	import step5Img from '$lib/images/step5.svg';

	const stepsData = [
		{
			img: step1Img,
			title: 'identify pain points',
			description:
				'we begin by conducting an in-depth analysis of your business’s production processes to identify current challenges and areas for improvement. This involves talking with key employees, reviewing documentation and observing any repetitive or slow production processes.'
		},
		{
			img: step2Img,
			title: 'define scope and requirements',
			description:
				"in this step we work with you to define the scope and the requirements of the projects. This involves determining your business's goals, budget, timeline and priorities, and other project constraints."
		},
		{
			img: step3Img,
			title: 'development of a custom software solution',
			description:
				'using the information gathered during the two phases above, we develop a custom software solution that addresses and solves the problems identified. This may involve building new software from scratch, modifying existing software, or integrating multiple software solutions.'
		},
		{
			img: step4Img,
			title: 'integration, training and support',
			description:
				'once the software solution has been deployed and integrated with the current systems, we provide training and support for your employees that uses the software. This would ensure that the software is used in the most effective way possible.'
		},
		{
			img: step5Img,
			title: 'monitor and optimize',
			description:
				'we continuously monitor and optimize the software solution to ensure that it is meeting your business needs and performing as expected. This would involve conducting regular audits, collecting feedback from users, and making updates and refinements as needed.'
		}
	];
</script>

<svelte:head>
	<title>CyberScript</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	<div class="bg-[url('$lib/images/dark_mode_bg.svg')] bg-cover bg-center bg-no-repeat h-screen">
		<section
			id="home"
			class="flex flex-col-reverse items-center content-center ml-auto mr-auto h-full justify-evenly md:justify-between md:w-11/12 md:flex-row lg:w-5/6 xl:w-2/3"
		>
			<div class="w-96 p-5 sm:p-auto">
				<h2 class="text-left text-2xl">
					Transform Your Production Process with <strong class="font-extrabold">
						CyberScript Solutions</strong
					>
				</h2>
				<Divider />
				<p>
					From automation and monitoring to custom software development, we have the expertise and
					experience to help you achieve your goals faster and more efficiently.
				</p>
				<Divider />
				<button class="w-28 bg-indigo-400 rounded-sm text-black p-1 hover:text-white"
					>Contact us!</button
				>
			</div>
			<div class="w-48 h-48 md:w-96 md:h-96">
				<img class="rotate" src={ball} alt="" />
			</div>
		</section>
	</div>
	<div class="flex items-center content-center ml-auto mr-auto h-full md:w-11/12 lg:w-5/6 xl:w-2/3">
		<div>
			{#each stepsData as step, index}
				{@const isEven = index % 2 === 0}
				<Step stepData={step} {isEven} {index} />
			{/each}
		</div>
	</div>
</div>

<style>
	@keyframes rotating {
		from {
			-webkit-transform: rotate(0deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	.rotate {
		-webkit-animation: rotating 25s linear infinite;
	}
</style>

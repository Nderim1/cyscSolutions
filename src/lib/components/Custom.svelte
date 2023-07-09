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
			title: 'Web Design',
			description:
				'With careful attention to detail and a deep understanding of user behavior, we create designs that not only impress but also drive engagement. Let us transform your vision into a stunning design that represents your brand and resonates with your target audience.'
		},
		{
			img: step2Img,
			title: 'Web Development',
			description:
				'At CyberScript Solutions, we specialize in building robust and user-friendly websites that elevate your online presence. From simple brochure websites to complex e-commerce platforms, we tailor our web development solutions to meet your specific needs.'
		},
		{
			img: step3Img,
			title: 'Mobile Development',
			description:
				'In the mobile-driven world, having a presence on smartphones and tablets is essential. Whether you need a native iOS or Android app or a cross-platform solution, we have the expertise to bring your app concept to life. We focus on delivering seamless user experiences that leverage the full potential of mobile technology.'
		},
		{
			img: step4Img,
			title: 'Marketing',
			description:
				"In today's competitive digital landscape, effective marketing strategies are vital to stand out from the crowd. We employ a data-driven approach, leveraging SEO, social media marketing, content creation, and paid advertising to maximize your online visibility and drive measurable results. Let us create a tailored marketing strategy that aligns with your goals and helps your business thrive."
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

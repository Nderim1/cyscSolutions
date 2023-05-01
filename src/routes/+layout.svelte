<script>
	import Header from './Header.svelte';
	import './styles.css';
	import Footer from './Footer.svelte';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	.Plugin_icon__1 {
		height: 100px;
		width: 50px;
		transform-box: fill-box;
		transform-origin: 50% 50%;
	}
	/* .Double_Down {
		animation: 0.5s linear 0s 1 normal forwards running Double_Down;
		transform-box: fill-box;
		transform-origin: 50% 50%;
	}

	@keyframes Double_Down {
		0% {
			transform: translateY(0px);
			opacity: 0.25;
		}
		20% {
			opacity: 0.25;
		}
		50% {
			transform: translateY(25px);
			opacity: 1;
		}
		80% {
			transform: translateY(15px);
			opacity: 0.75;
		}
		100% {
			transform: translateY(10px);
			opacity: 0.25;
		}
	} */

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>

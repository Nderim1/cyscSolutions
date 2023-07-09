<script>
	const headers = new Headers();
	headers.append('Content-Type', 'application/json');

	let feedback = '';
	$: name = '';
	$: email = '';
	$: message = '';

	const sendEmail = async (event) => {
		event.preventDefault(); // Prevent the form from submitting

		if (!name || !email || !message) {
			return (feedback = 'Please fill all the fields');
		}

		const body = {
			name,
			email,
			message
		};
		const options = {
			method: 'POST',
			headers,
			mode: 'cors',
			body: JSON.stringify(body)
		};

		try {
			let response = await fetch('https://eov7gxt9ly4ks9m.m.pipedream.net', options);
			console.log(response);
			if (response.status === 200) {
				feedback = 'Email was sent successfully!';
			} else {
				throw new Error();
			}
		} catch (error) {
			feedback = 'Something went wrong. Please refresh and try again.';
		}
	};

	// const form = document.getElementById("contactForm");
	// form.addEventListener("submit", sendEmail);
</script>

<form id="contactForm" class="flex flex-col w-96">
	<div class="form-control w-full mb-4">
		<label class="label" for="name">
			<span class="label-text">Name:</span>
		</label>
		<input
			id="name"
			value={name}
			required
			on:change={(e) => (name = e.target.value)}
			type="text"
			placeholder="Yours or your business' name"
			class="input input-bordered input-primary w-full"
		/>
	</div>

	<div class="form-control w-full mb-4">
		<label class="label" for="email">
			<span class="label-text">Email:</span>
		</label>
		<input
			id="email"
			type="email"
			value={email}
			required
			on:change={(e) => (email = e.target.value)}
			placeholder="Yours or your business' email"
			class="input input-bordered input-primary w-full"
		/>
	</div>

	<div class="form-control w-full mb-4">
		<label class="label" for="message">
			<span class="label-text">How can we help you?</span>
		</label>
		<textarea
			id="message"
			value={message}
			required
			on:change={(e) => (message = e.target.value)}
			class="textarea textarea-primary"
			placeholder="Hi, I need help with my old and slow website..."
		/>
	</div>

	<button type="submit" class="btn btn-primary mt-6" on:click={sendEmail}>Send Email</button>
	<span id="feedback">{feedback}</span>
</form>

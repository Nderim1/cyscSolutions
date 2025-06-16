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
			return (feedback = 'Bitte füllen Sie alle Felder aus');
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
				feedback = 'E-Mail wurde erfolgreich gesendet!';
			} else {
				throw new Error();
			}
		} catch (error) {
			feedback = 'Etwas ist schiefgelaufen. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut.';
		}
	};

	// const form = document.getElementById("contactForm");
	// form.addEventListener("submit", sendEmail);
</script>

<section>
	<h3 class="sr-only">Kontaktformular</h3>
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
			placeholder="Ihr Name oder Firmenname"
			class="input input-bordered input-primary w-full"
		/>
	</div>

	<div class="form-control w-full mb-4">
		<label class="label" for="email">
			<span class="label-text">E-Mail:</span>
		</label>
		<input
			id="email"
			type="email"
			value={email}
			required
			on:change={(e) => (email = e.target.value)}
			placeholder="Ihre E-Mail-Adresse"
			class="input input-bordered input-primary w-full"
		/>
	</div>

	<div class="form-control w-full mb-4">
		<label class="label" for="message">
			<span class="label-text">Wie können wir Ihnen helfen?</span>
		</label>
		<textarea
			id="message"
			value={message}
			required
			on:change={(e) => (message = e.target.value)}
			class="textarea textarea-primary"
			placeholder="Hallo, ich brauche Hilfe mit meiner alten und langsamen Website..."
		/>
	</div>

	<button type="submit" class="btn btn-primary mt-6" on:click={sendEmail}>Nachricht senden</button>
	<span id="feedback">{feedback}</span>
</form>
<p class="mt-4 text-center">Oder schreiben Sie uns direkt an <a href="mailto:info@cyscript.de" class="underline text-primary hover:text-accent">info@cyscript.de</a></p>
</section>

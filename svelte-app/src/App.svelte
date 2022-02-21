<script>
	export let name;
	let players = [] 
	let connectToExtension = async () => {
		let extension = "js.neutralino.dbextension"
		let event = "eventToExtension"
		let data = {
			testValue: 10
		}

		await window.Neutralino.extensions.dispatch(extension, event, data)
		await window.Neutralino.events.on('eventFromExtension', (event) => {
			// const data = JSON.parse(JSON.stringify(event.detail))
			// console.log(data)
			players = JSON.parse(JSON.stringify(event.detail))
		})
	}

	connectToExtension()
</script>

<main>
	<h1>Hello {name} Ursante Santiago!</h1>
	{#each players as player}
		<div>Name: {player.name} Age: {player.age}</div>
	{/each}
	<h1>Operating System: {window.NL_OS}</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Michael'
	}
});

window.Neutralino.init()

export default app;
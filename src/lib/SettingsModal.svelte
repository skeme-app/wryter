<script>
	import {
		Dialog,
		DialogOverlay,
		DialogTitle,
		DialogDescription
	} from '@rgossiaux/svelte-headlessui';
	/**
	 * @type {boolean}
	 */
	export let isOpen;

	/**
	 * @type {Function}
	 */

	export let close;
</script>

{#if isOpen}
	<div class="w-screen h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] z-10" />
{/if}

<Dialog
	class="absolute flex flex-col w-2/3 h-3/4 top-1/2 -translate-x-1/2 z-20 -translate-y-1/2 rounded-2xl shadow-2xl p-12 left-1/2 bg-white"
	open={isOpen}
	on:close={() => close()}
>
	<DialogTitle class="text-2xl font-medium">Einstellungen</DialogTitle>
	<div class="flex">
		<div>s</div>
		<div>a</div>
	</div>
</Dialog>

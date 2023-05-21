<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let problem = '';
	import Acute from './Acute.svelte';
	import Chronic from './Chronic.svelte';
</script>

<div class="p-4 prose card m-4">
	When did this chest pain start
	<ListBox>
		<ListBoxItem bind:group={problem} name="problem" value="Acute">Just</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="Chronic">
			For a while already
		</ListBoxItem>
	</ListBox>
	{#if problem == 'Acute'}
		<Acute />
	{:else if problem == 'Chronic'}
		<Chronic />
	{/if}
</div>

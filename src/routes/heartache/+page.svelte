<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import Cardiac from './Cardiac.svelte';
	let problem = '';
</script>

<div class="p-4 prose card m-4">
	<h1>Tell me more about what you are feeling</h1>
	<ListBox>
		<ListBoxItem bind:group={problem} name="problem" value="cardiac">crushing/squeezing pain</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="respiratory">pain worse with deep breathing</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="GIT">burning pain</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="others">none of the above</ListBoxItem>
	</ListBox>

	{#if problem == 'cardiac'}
	<Cardiac />
{/if}
</div>

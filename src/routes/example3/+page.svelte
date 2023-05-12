<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import Heartache from './Heartache.svelte';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	const data = writable({ problem: '' });
	setContext('data', data);
</script>

<div class="p-4 prose card m-4">
	<h1>What is your problem?</h1>
	<ListBox>
		<ListBoxItem bind:group={$data.problem} name="problem" value="headache">headache</ListBoxItem>
		<ListBoxItem bind:group={$data.problem} name="problem" value="tummyache">tummyache</ListBoxItem>
		<ListBoxItem bind:group={$data.problem} name="problem" value="heartache">heartache</ListBoxItem>
	</ListBox>
	<p>Your problem is {$data.problem}!</p>
		<Heartache />
</div>

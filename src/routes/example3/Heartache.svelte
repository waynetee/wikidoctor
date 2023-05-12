<script>
	import { getContext } from 'svelte';
	import Heartache from './Heartache.svelte';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	const data=getContext('data')
	$: console.log($data)
</script>

<div class="p-4 prose card m-4">
	<h2>You have a {$data.problem}!</h2>
</div>

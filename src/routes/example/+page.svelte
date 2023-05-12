<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let problem = '';
</script>

<div class="p-4 prose card m-4">
	<h1>What is your problem?</h1>
	<ListBox>
		<ListBoxItem bind:group={problem} name="problem" value="headache">headache</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="tummyache">tummyache</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="heartache">heartache</ListBoxItem>
	</ListBox>
	<p>Your problem is {problem}!</p>
</div>

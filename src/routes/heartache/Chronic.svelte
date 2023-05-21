<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let problem = '';
</script>

<div class="p-4 prose card m-4">
	When did this chest pain start
	<ListBox>
		<ListBoxItem bind:group={problem} name="problem" value="Acute">
			Just
		</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="Chronic">
			For a while already
		</ListBoxItem>
	</ListBox>
	{#if problem == 'Acute'}
	<Acute />
{/if}
</div>

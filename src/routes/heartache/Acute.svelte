<script>
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	let problem = '';
</script>

<div class="p-4 prose card m-4">
	Tell me more
	<ListBox>
		<ListBoxItem bind:group={problem} name="problem" value="AMI">
			chest pain, shortness of breath, sweating alot
		</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="Aortic dissection">
			tearing pain, travelling to the back, cannot keep still
		</ListBoxItem>
		<ListBoxItem bind:group={problem} name="problem" value="Arrythmias">
			Feel my heart beating very fast/irregularly
		</ListBoxItem>
	</ListBox>
	{#if problem == 'AMI'}
		<h3> You have a heart attack! Here is what you should do: </h3>
		<ul class="list">
			<li>Ix: </li>
			<li>ECG stat </li>
			<li>Trend 2 sets of Trop-I </li>
			<li>Load DAPT: aspirin 300mg + 75mg ticagrelor </li>
			<li>  </li>
			<li>  </li>
			<li>Activate cath lab for emergent PCI </li>
		 </ul>
		
	{:else if problem == 'Aortic dissection'}
		You probably have an aortic dissection!

		Keep NBM
		O2 2L NP
		CT aortogram
		Permissive hypotension
		FBC RP GXM 
		
		If Stanford A
		- Call CTVS for repair

		If Stanford B
		- Medical management

	{/if}
</div>

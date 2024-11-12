<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import { goto } from '$app/navigation';

	onMount(() => goto('/dashboard', { replaceState: false }));
</script>

<div>empty</div>

<script lang="ts">
	import HighlightTitle from '$lib/highlightTitle.svelte';
	import { collections } from '$lib/faq/FaqDefs';
	import Collection from '$lib/faq/Collection.svelte';
	import Question from '$lib/faq/Question.svelte';
</script>

<div class="w-[full] px-5 pt-10">
	<HighlightTitle pretext="よくある" highlight="質問" posttext="" />
	{#each collections as collection}
		<h1>{collection.title}</h1>
		{#each collection.questions as question}
			<Question {question} />
		{/each}
	{/each}
</div>

<script lang="ts">
	import type { PageServerData } from './$types';

	import Article from '$lib/news/Article.svelte';
	import { json } from '@sveltejs/kit';

	export let data: PageServerData;
	let extracted: any;

	$: if (!extracted) {
		extracted = data.articleData;

		extracted.forEach((article: Article) => {
			article.tags = JSON.parse(article.tags[0]);
		});
	}
</script>

<div class="my-10 w-2/3 mx-auto">
	{#if extracted}
		{#each extracted as article}
			<Article data={article} />
		{/each}
	{/if}
</div>
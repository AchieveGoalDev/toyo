<script lang="ts">
	import type { Tag, TagArray } from "$lib/news/TagDefs";
	import type { Article } from "./ArticleDef";

	export let articleData: Article;
</script>

<article class="mb-12">
	{#if articleData}
		<h2 class="text-3xl font-bold text-rose-800">{articleData.title}</h2>
		<hr />
		<div class="flex flex-row flex-wrap">
			{#each articleData.tags as tag}
				{#if tag.isSelected}
					<div
						class={`mr-2 ${tag.color} font-bold text-white px-2 py-1 rounded-full my-2`}
					>
						{tag.text}
					</div>
				{/if}
			{/each}
		</div>

		<div class="my-10">
			{@html articleData.htmlContent}
		</div>

		<div>
			<span>{articleData.creationDate.toLocaleDateString("ja-JP")}</span>
		</div>
	{/if}
</article>

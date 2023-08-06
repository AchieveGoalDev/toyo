<script lang="ts">
    import Tag from "./Tag.svelte";
    import type { Article } from "./ArticleDef";

    export let articleData: Article;
</script>

<div class="shadow-md bg-white">
    <h2>
        {articleData.title}
    </h2>
    <p>{articleData.creationDate.toLocaleDateString("ja-JP")}</p>
    <div class="flex flex-row">
        {#each articleData.tags as tag}
            <Tag {tag} toUpdate={false} />
        {/each}
    </div>
    <img src={articleData.imageUrl} alt="" />
</div>

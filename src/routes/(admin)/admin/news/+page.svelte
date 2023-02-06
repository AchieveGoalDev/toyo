<script lang="ts">
	import TipTap from '$lib/news/TipTap.svelte';
	import type { ActionData } from './$types';
	import type { TagArray } from '$lib/news/TagDefs';
	import { fly } from 'svelte/transition';

	import TagBox from '$lib/news/TagBox.svelte';
	import { newsTags } from '$lib/news/TagDefs';
	import { campusTags } from '$lib/news/TagDefs';

	export let form: ActionData;

	let collated: string;
	let content: string = '';
	let collate: boolean = true;

	$: if (collate) {
		collated = JSON.stringify([...campusTags, ...newsTags]);
		collate = false;
	}
</script>

<div class="w-2/3 my-10 mx-auto">
	<form action="?/post" method="POST">
		<div class="border-2 border-slate-500 rounded-sm bg-white">
			<div class="flex flex-row w-[100%] place-content-around p-3">
				<div>
					<label class="w-full" for="title"> Post Title </label>
					<input class="border-2 border-black w-full bg-slate-200" type="text" name="title" />
				</div>
			</div>
			<TagBox checkText={'タグを追加'} tags={newsTags} bind:collate />
			<TagBox checkText={'キャンパスを追加'} tags={campusTags} bind:collate />
			<TipTap bind:content />
		</div>
		<div class="w-full flex flex-row mt-5">
			<button
				type="submit"
				class=" font-bold p-2 border-slate-600 border-2 w-[250px] hover:bg-black hover:text-white rounded-sm mx-auto font-weight-bold transition ease-in-out duration-300"
				>決定</button
			>
			<button
				on:click={(e) => e.preventDefault()}
				class="font-bold p-2 border-slate-600 border-2 w-[250px] hover:bg-black hover:text-white rounded-sm mx-auto font-weight-bold transition ease-in-out duration-300"
				>確認 ></button
			>
		</div>
		<input type="text" name="content" style="display:none;" value={content} />
		<input type="text" name="tags" style="display:none;" value={collated} />
	</form>
</div>

{#if form?.incomplete}
	<p class="text-red-700">Something went wrong bruh</p>
{/if}

<script lang="ts">
	import HamburgerLink from './HamburgerLink.svelte';
	import { slide, fade } from 'svelte/transition';
    import { links } from '$lib/navbar/LinkDefs'

	export let isExpanded: boolean = false;

</script>

<nav class="bg-rose-700 min-h-[60px] w-full justify-content-center content-center shadow-md">
	<div class="flex flex-row flex-auto w-full place-content-between p-2">
		<div class="flex flex-row">
			<div class="pl-4">
				<div class="bg-white rounded-full p-1 shadow-md min-w-[55px]">
					<img src="/TAENavLogo.svg" alt="東洋アチーブイングリッシュのロゴ:" />
				</div>
			</div>
			<div
				class="flex-col ml-5 text-white text-lg sm:text-xl font-bold content-center justify-center text-center"
			>
				<h2>Toyo Achieve English</h2>
				<h2 class="text:xl sm:text-2xl text-2xl">英語講座</h2>
			</div>
		</div>
		<div class="pr-4 my-auto">
			<button
				style:display={'grid'}
				style:place-items={'center'}
				on:click={() => {
					isExpanded = !isExpanded;
				}}
			>
				{#if !isExpanded}
					<img
						style:grid-row={'1'}
						style:grid-column={'1'}
						transition:fade={{ duration: 150 }}
						src="/Icons/menu.svg"
						alt="ナビゲーションメニューの展開アイコン"
						class="h-[35px] w-[35px]"
					/>
				{:else if isExpanded}
					<img
						style:grid-row={'1'}
						style:grid-column={'1'}
						transition:fade={{ duration: 150 }}
						src="/Icons/close.svg"
						alt="ナビゲーションメニューの展開アイコン"
						class="h-[35px] w-[35px]"
					/>
				{/if}
			</button>
		</div>
	</div>
	{#if isExpanded}
		<div transition:slide={{ duration: 500 }} class="text-white text-center font-bold">
			{#each links as link}
				<HamburgerLink linkData={link} />
			{/each}
			<div class="text-right flex flex-row h-[60px] content-center place-content-around">
				<div
					class="flex flex-row my-auto content-center bg-green-700 p-2 rounded-lg transition-all active:bg-green-600"
				>
					<img src="/Icons/call.svg" class="h-[20px] mr-1" alt="電話のアイコン"/>
					<a href="tel:0353022239">03-5302-2239</a>
				</div>
				<div
					class="flex flex-row my-auto content-center bg-sky-800 p-2 rounded-lg transition-all active:bg-sky-600"
				>
					<img src="/Icons/mail.svg" class="h-[20px] mr-1" alt="メールのアイコン"/>
					<a href="mailto:info@achieve-english.jp">info@achieve-english.jp</a>
				</div>
			</div>
		</div>
	{/if}
</nav>

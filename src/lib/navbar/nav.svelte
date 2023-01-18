<script lang="ts">
	import { page } from '$app/stores';
	import { buildTween } from '$lib/tweens/buildTween.js';
	import Link from '$lib/navbar/nav-button.svelte';
	import Mail from '$lib/navbar/sliding-icon-nav.svelte';
	import { scrollHeight } from '$lib/store/windowData';
	import type { ScrollY, NavbarData } from './NavTypes.svelte';

	let tweenHeights = [64, 80];
	let tweenColors = ['rgb(255,255,255)', 'rgb(190, 18, 60)'];
	let barShift = buildTween(tweenColors, 250);
	let yShift = buildTween(tweenHeights, 250);
	let navbarData: NavbarData;

	let index = 0;
	let scrolled: number;

	scrollHeight.subscribe((v) => {
		scrolled = v;
	});

	$: if (scrolled > 0) {
		index = 1;
	} else {
		index = 0;
	}

	$: barShift.set(tweenColors[index]);
	$: yShift.set(tweenHeights[index]);
	$: navbarData = {
		index,
		page,
		scrolled
	};
</script>

<nav
	style:height={`${$yShift}px`}
	style:background-color={$barShift}
	class="backdrop-blur-lg
		flex 
		flex-row 
		justify-center 
		w-full 
		sticky 
		top-0 
		z-10 
		opacity-95
		{scrolled ? 'shadow-md' : ''}
		"
>
	<div class="flex flex-col w-full mx-auto content-center justify-center place-content-center">
		<div class="flex flex-row h-full">
			<div class="h-full flex flex-row justify-center content-center">
				<img class="h-full bg-white" src="/TAENavLogo.svg" />
				<h3 class="text-xl font-bold ml-3 my-auto">英語講座</h3>
			</div>
			<div class="flex flex-row mx-auto">
				<Link {navbarData} english="Home" japanese="ホーム" location="/" />
				<Link
					{navbarData}
					english="About TAE"
					japanese="キャンパス内留学とは？"
					location="/about"
				/>
				<Link {navbarData} english="Q&A" japanese="よくある質問" location="" />
				<Link {navbarData} english="News" japanese="新着情報" location="/news" />
			</div>
			<div>
				<Mail />
			</div>
		</div>
	</div>
</nav>

<script lang="ts">
	import { page } from '$app/stores';
	export let linkData: {
		href: string;
		jpText: string;
		enText: string;
		icon: string;
		iconAlt: string;
	};


	let classText: string =
		'block py-4 px-4 border-b-2 flex flex-row transition transition-all active:bg-rose-500';

	$: if (linkData.href === $page.url.pathname) {
		classText =
			'block py-4 px-4 border-b-2 flex flex-row transition transition-all active:bg-rose-500 bg-rose-500';
	} else {
		classText =
			'block py-4 px-4 border-b-2 flex flex-row transition transition-all active:bg-rose-500 bg-rose-600';
	}
</script>

<a href={linkData.href} class={classText}
	><img src={linkData.icon} alt={linkData.iconAlt} class="h-[20px] mx-2" />{linkData.enText} | {linkData.jpText}</a
>

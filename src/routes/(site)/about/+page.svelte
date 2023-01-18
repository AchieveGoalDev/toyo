<script lang="ts">
	import { windowWidth } from '$lib/store/windowData';

	let width: number;
	$: console.log(width);

	windowWidth.subscribe((v) => {
		width = v;
	});
</script>

<div>
	<h2>About Us</h2>
	<p>
		Here is some information about us. Here is some information about us.Here is some information
		about us.Here is some information about us.Here is some information about us.Here is some
		information about us.Here is some information about us.Here is some information about us.Here is
		some information about us.Here is some information about us.Here is some information about
		us.Here is some information about us.Here is some information about us.Here is some information
		about us.
	</p>
</div>

<script lang="ts">
	export let question: { q: string; a: string };
</script>

<div class="my-6">
	<div class="flex flex-row">
		<h2>Q:</h2>
		<p>
			{question.q}
		</p>
	</div>
	<div class="flex flex-row my-3">
		<h2>A:</h2>
		<p>
			{question.a}
		</p>
	</div>
	<hr />
</div>

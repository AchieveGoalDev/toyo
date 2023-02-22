<script lang="ts">
  import ImageSelect from "$lib/forms/input/ImageSelect.svelte";
  import SelectInput from "$lib/forms/input/SelectInput.svelte";

  import {
    campusSelector,
    levelSelector,
    courseSelector,
    mtmSelector,
  } from "$lib/forms/ApplicationData";

  export let data = "Meep";

  let campus: string;
  let level: string;
  let course: string;
  let mtm: string;
</script>

<ImageSelect data={campusSelector} bind:value={campus} />
<SelectInput data={levelSelector} bind:value={level} />
<SelectInput data={courseSelector} bind:value={course} />
<SelectInput data={mtmSelector} bind:value={mtm} />

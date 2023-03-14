<script lang="ts">
  import LeftColumnTitleTable from "$lib/tables/LeftColumnTitleTable.svelte";
  import { groupLesson, mtmLesson } from "$lib/tables/TableDefs";
</script>

<LeftColumnTitleTable tableData={groupLesson} />
<LeftColumnTitleTable tableData={mtmLesson} />

<script lang="ts">
  import BasicPersonal from "./basic/BasicPersonal.svelte";
  import SubFormWrapper from "./SubFormWrapper.svelte";

  let modes = ["basic", "schedule", "intro"];
  let basic = ["personal", "test", "comment"];
</script>

<div class="flex flex-col mx-auto grow-0 mt-[50px]">
  <SubFormWrapper>
    <BasicPersonal />
  </SubFormWrapper>
</div>

<script lang="ts">
  import { PUBLIC_IMAGE_BUCKET_URL } from "$env/static/public";
  import "../../../app.css";

  const s3 = PUBLIC_IMAGE_BUCKET_URL;
</script>

<main
  class="bg-[url({s3 +
    'images/world-01.svg'})] bg-center bg-fixed bg-orange-50 bg-cover p-1 bg-no-repeat min-h-[100vh] min-w[100vh]"
>
  <slot />
</main>

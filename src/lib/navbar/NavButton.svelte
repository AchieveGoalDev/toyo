<script lang="ts">
  import type { NavbarData } from "./NavTypes.svelte";
  import type { LinkData } from "./LinkDefs";

  export let linkData: LinkData;
  export let navbarData: NavbarData;
  export let color: string;

  let bgColor = "bg-black";

  if (color === "red") {
    bgColor = "bg-rose-600";
  }
  if (color === "blue") {
    bgColor = "bg-blue-700";
  }

  let hovered: boolean = false;
  let page = navbarData.page;
</script>

{#if $page.url.pathname === linkData.href}
  <a
    on:mouseover={() => (hovered = true)}
    on:focus={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:blur={() => (hovered = false)}
    style:font-weight={navbarData.index === 0 ? "200" : "bold"}
    style:color="white"
    class={`h-full sm:text-md lg:text-lg xl:text-xl mx-2 text-center font-bold px-4 scale-105 flex shadow-md break-keep ${bgColor}`}
    href={linkData.href}
  >
    <div class="my-auto">
      <div>
        {linkData.jpText}
      </div>
      <hr class="bg-white border-none h-[2px] opacity-95" />
      <div>{linkData.enText}</div>
    </div>
  </a>
{:else}
  <a
    on:mouseover={() => (hovered = true)}
    on:focus={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:blur={() => (hovered = false)}
    style:font-weight={navbarData.index === 0 ? "200" : "bold"}
    style:color={hovered ? "white" : navbarData.scrolled ? "white" : "black"}
    class={"h-full mx-2 sm:text-md lg:text-lg xl:text-xl text-center font-bold px-4 transition ease-in hover:cursor-pointer hover:scale-105 hover:bg-rose-600 flex break-keep"}
    href={linkData.href}
  >
    <div class="my-auto">
      <div>
        {linkData.enText}
      </div>
      <hr
        style:background-color={hovered
          ? "white"
          : navbarData.scrolled
          ? "white"
          : "black"}
        class="border-none h-[1px] opacity-95"
      />
      <div>{linkData.jpText}</div>
    </div>
  </a>
{/if}

<script>
  import arrow from "$assets/images/arrow.svg";
  import Item from "./Item/index.svelte";
  import { quintInOut } from "svelte/easing";

  export let name = "";
  export let series = [];

  let isOpen = false;

  const wipe = (node, { duration }) => ({
    duration,
    css: time => {
      const eased = quintInOut(time);

      return `
        opacity: ${eased};
            transform: scaleY(${eased});
        `;
    }
  });
</script>

<div class="wrapper" on:click={() => (isOpen = !isOpen)}>
  <p>{name}</p>
  <div class="img-wrapper" class:img-open={isOpen}>
    <img src={arrow} alt="" />
  </div>
</div>

{#if isOpen}
  <div class="items" transition:wipe={{ duration: 250 }}>
    {#each series as { name, sellers, isMoreToSee }}
      <Item {name} {sellers} {isMoreToSee} on:click />
    {/each}
  </div>
{/if}

<style>
  .wrapper {
    height: 64px;
    background-color: var(--bg-secondary);
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.4em;
    font-weight: 500;
  }

  .img-wrapper {
    background-color: var(--bg-primary);
    height: 45px;
    width: 45px;
    display: flex;
    border-radius: 50%;
    transition: transform 0.2s ease;
  }

  img {
    margin: auto;
    height: 20px;
    width: 20px;
    transform: translateY(10%);
  }

  .img-open {
    transform: rotate(180deg);
  }

  .items {
    transform-origin: top;
  }
</style>

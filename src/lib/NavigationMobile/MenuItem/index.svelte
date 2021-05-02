<script>
  import arrow from "./arrow.svg";
  import Item from "./Item/index.svelte";
  import { quintInOut } from "svelte/easing";

  let isOpen = false;
  let items = [
    { value: "link1", url: "#" },
    { value: "link2", url: "#" },
    { value: "link3", url: "#" }
  ];

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
  <p>Items</p>
  <div class="img-wrapper" class:img-open={isOpen}>
    <img src={arrow} alt="" />
  </div>
</div>

{#if isOpen}
  <div class="items" transition:wipe={{ duration: 250 }}>
    <Item title="test" {items} />
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

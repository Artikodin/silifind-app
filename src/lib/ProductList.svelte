<script>
  import ProductItem from "./ProductItem.svelte";

  export let productItems = [];
</script>

<div>
  {#each productItems as productItem, i}
    <ProductItem {...productItem} />
  {/each}
</div>

<style>
  div {
    width: 100%;
    padding-bottom: 105px;
    padding: 0 15px 105px 15px;
    box-sizing: border-box;
  }
</style>

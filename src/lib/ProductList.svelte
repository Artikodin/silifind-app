<script>
  import ProductItem from "./ProductItem.svelte";

  let productItems = ["1", "2"];
</script>

<div>
  {#each productItems as productItems, i}
    <ProductItem />
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

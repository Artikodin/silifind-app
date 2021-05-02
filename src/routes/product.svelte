<script>
  import Button from "$lib/Button.svelte";
  import ProductDetail from "$lib/ProductDetail.svelte";
  import { productItems } from "../dataMock";
</script>

<ProductDetail {...productItems[0]} />

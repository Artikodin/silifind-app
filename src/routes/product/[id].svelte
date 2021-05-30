<script>
  import ProductDetail from "$lib/ProductDetail.svelte";
  import { productItems } from "../../dataMock";
</script>

<ProductDetail {...productItems[0]} />

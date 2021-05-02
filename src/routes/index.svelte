<script>
  import ProductList from "$lib/ProductList.svelte";
  import Captation from "$lib/Captation.svelte";
  import { productItems, captation } from "../dataMock";
</script>

<Captation
  title={captation.title}
  description={captation.description}
  img={captation.img}
/>
<ProductList {productItems} />

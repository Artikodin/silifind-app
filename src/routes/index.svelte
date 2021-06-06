<script context="module">
  export async function load({ page, fetch, session, context }) {
    const { products } = context;

    const formatPtoduct = products[0].series[0].sellers.map(
      ({ id, product }) => {
        const [name, price, url] = product;
        return {
          id,
          name,
          price,
          url
        };
      }
    );

    return {
      props: {
        products: formatPtoduct
      }
    };
  }
</script>

<script>
  import ProductList from "$lib/ProductList.svelte";
  import Captation from "$lib/Captation.svelte";
  import { captation } from "../dataMock";

  export let products = [];
</script>

<Captation title={captation.title} description={captation.description} />
<ProductList productItems={products} />

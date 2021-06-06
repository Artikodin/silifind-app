<script context="module">
  export async function load({ page, fetch, session, context }) {
    const { products } = context;
    const { serieSlug } = page.params;

    const serieSlugToIndex = serieSlug => {
      const slugToIndex = {
        "rtx-3060": 0,
        "rtx-3060ti": 1,
        "rtx-3070": 2,
        "rtx-3080": 3,
        "rtx-3090": 4
      };
      return slugToIndex[serieSlug];
    };

    const formatPtoduct = products[0].series[
      serieSlugToIndex(serieSlug)
    ].sellers.map(({ id, product }) => {
      const [name, price, url] = product;
      return {
        id,
        name,
        price,
        url
      };
    });

    return {
      props: {
        products: formatPtoduct,
        sellerName: products[0].series[serieSlugToIndex(serieSlug)].name
      }
    };
  }
</script>

<script>
  import ProductList from "$lib/ProductList.svelte";
  import Captation from "$lib/Captation.svelte";
  import { captation } from "../../dataMock";

  export let products = [];
  export let sellerName = "";
</script>

<Captation title={sellerName} img={captation.img} />
<ProductList productItems={products} />

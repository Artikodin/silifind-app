<script context="module">
  export async function load({ page, fetch, session, context }) {
    const { products } = context;
    const { id: pageId } = page.params;

    const sellers = products[0].series.reduce(
      (previous, current) => [...previous, ...current.sellers],
      []
    );

    const [filteredSeller] = sellers.filter(
      ({ id: sellerId }) => +pageId === sellerId
    );

    const { id, product } = filteredSeller;
    const [name, price, url] = product;
    const formatSeller = { id, name, price, url };

    return {
      props: {
        seller: formatSeller
      }
    };
  }
</script>

<script>
  import ProductDetail from "$lib/ProductDetail.svelte";
  import { productItems } from "../../dataMock";

  export let seller = {};
</script>

<ProductDetail {...seller} />

<script context="module">
  export async function load({ page, fetch }) {
    const url = `https://app.silifind.fr/config`;
    const res = await fetch(url);

    if (res.ok) {
      const { products } = await res.json();

      const productsUpdated = products.map(({ name, series }) => {
        const seriesWithSellerName = series
          .map(({ name, sellers }) => {
            const sellersBrand = sellers.reduce(
              (previous, current) => [...previous, ...current.description],
              []
            );

            const isMoreToSee = sellersBrand.length > 4;

            return { name, sellers: sellersBrand.slice(0, 4), isMoreToSee };
          })
          .filter(({ sellers }) => sellers.length > 0);
        return { name, series: seriesWithSellerName };
      });

      return {
        props: {
          products: productsUpdated
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  import "$assets/styles/global.css";
  import "$lib/utils/text";
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer/index.svelte";

  export let products = [];
</script>

<div>
  <Header {products} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  div {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
</style>

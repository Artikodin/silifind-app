<script context="module">
  export async function load({ page, fetch, session, context }) {
    // const url = `https://app.silifind.fr/config`;
    // const res = await fetch(url);

    if (true) {
      return {
        props: {
          test: "yoyoyo"
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
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer/index.svelte";
  import { navItems } from "../dataMock";

  import "$assets/styles/global.css";

  export let test = "";
  console.log(test);
</script>

<div>
  <Header {navItems} />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  div {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  main {
    height: 100%;
    overflow: scroll;
  }
</style>

<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer/index.svelte";
  import { navItems } from "../dataMock";

  import "$lib/style/global.svelte";
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

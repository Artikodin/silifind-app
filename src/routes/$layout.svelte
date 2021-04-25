<script>
  import Header from "$lib/Header.svelte";
  import Footer from "$lib/Footer/index.svelte";
  import "$lib/style/global.svelte";
</script>

<div>
  <Header />
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

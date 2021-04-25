<script>
  import Navigation from "./Navigation.svelte";

  let navItems = [{ title: "GPU" }, { title: "CPU" }, { title: "CONSOLE" }];
</script>

<header>
  <div>
    <a href="/"><h1>Silifind</h1></a>
    <Navigation {navItems} />
  </div>
</header>

<style>
  h1 {
    font-weight: 600;
  }

  header {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65) 3%,
      rgba(0, 0, 0, 0) 100%
    );
    font-family: "poppins", Arial, Helvetica, sans-serif;
    width: 100%;
    height: 64px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    padding: 0 15px;
    box-sizing: border-box;
    z-index: 1;
  }

  div {
    height: 64px;
    width: min(100%, 1080px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
</style>

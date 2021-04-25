<script>
  import Button from "./Button.svelte";
</script>

<a class="product-item" sveltekit:prefetch href="/product">
  <img src="https://picsum.photos/400/400" alt="" />
  <div class="annexe">
    <h3>Ryzen 7 5800X</h3>
    <p>1000 <small>€</small></p>
    <time>1 heure</time>
    <Button />
  </div>
</a>

<style>
  .product-item {
    height: 200px;
    width: min(100%, 1080px);
    border-radius: 20px;
    display: flex;

    background: #2f3136;

    margin: 0 auto 50px auto;

    cursor: pointer;
    transition: box-shadow 0.35s 0s ease;
  }

  .product-item:hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
  }

  img {
    height: 200px;
    width: 200px;
    border-radius: 20px;
  }

  .annexe {
    color: white;
    flex: 1;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 36px auto;
    grid-template-areas:
      "title price"
      "time button";
    row-gap: 10px;
    justify-items: end;
    align-items: end;
  }

  h3 {
    grid-area: title;

    align-self: start;
    justify-self: start;

    font-size: 36px;
    font-weight: 500;
    line-height: 1;
  }

  p {
    grid-area: price;

    align-self: start;

    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    color: var(--text-primary);
  }

  small {
    font-size: 24px;
  }

  time {
    grid-area: time;
    align-self: start;
    justify-self: start;

    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    color: var(--header-secondary);
  }
</style>

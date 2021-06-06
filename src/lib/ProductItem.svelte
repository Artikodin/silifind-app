<script>
  import Button from "./Button.svelte";

  export let url = "";
  export let name = "";
  export let price = "";
</script>

<a class="product-item" sveltekit:noscroll href={url}>
  <img
    src="https://www.techspot.com/images2/news/ts3_thumbs/2016/05/2016-05-10-ts3_thumbs-d33.jpg"
    alt="nvidia"
  />
  <div class="annexe">
    <h3>{name}</h3>
    <p>{price}&#8239;<small>€</small></p>
    <!-- <time>{time}</time> -->
    <Button {url} text={"J'en profite"} />
  </div>
</a>

<style>
  .product-item {
    min-height: 200px;
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
    object-fit: cover;
  }

  .annexe {
    color: var(--header-primary);
    flex: 1;
    padding: 30px;
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: min-content auto;
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

    font-size: 3.6rem;
    font-weight: 500;
    line-height: 1;
  }

  p {
    grid-area: price;

    align-self: start;

    font-size: 3.6rem;
    font-weight: 400;
    line-height: 1;
    color: var(--text-primary);
  }

  small {
    font-size: 2.4rem;
  }

  time {
    grid-area: time;
    align-self: start;
    justify-self: start;

    font-size: 2.4rem;
    font-weight: 400;
    line-height: 1;
    color: var(--header-secondary);
  }

  @media (max-width: 768px) {
    .product-item {
      flex-direction: column;
    }

    img {
      width: auto;
    }

    .annexe {
      padding: 20px;
      row-gap: 30px;
    }
  }
</style>

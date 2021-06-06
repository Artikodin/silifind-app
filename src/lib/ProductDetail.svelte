<script>
  import Button from "./Button.svelte";

  export let name = "";
  export let price = "";
  export let url = "";
</script>

<div class="wrapper">
  <div class="product-detail">
    <div class="aspect-ratio">
      <img
        src="https://www.techspot.com/images2/news/ts3_thumbs/2016/05/2016-05-10-ts3_thumbs-d33.jpg"
        alt="nvidia"
      />
    </div>
    <div class="annexe">
      <h3>{name}</h3>
      <p class="price">{price}&#8239;<small>€</small></p>
      <!-- <time>{time}</time> -->
      <!-- <p class="description">
        {description}
      </p> -->
      <Button {url} text={"j'en profite"} />
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    height: 100vh;
    width: 100%;

    padding: 0 15px;
    box-sizing: border-box;

    align-items: center;
    justify-content: center;
  }
  .product-detail {
    min-height: 600px;
    width: min(100%, 1080px);
    border-radius: 20px;
    display: flex;

    background: #2f3136;
  }

  .aspect-ratio {
    min-height: 100%;
    width: 400px;
    position: relative;
  }

  img {
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  .annexe {
    color: white;
    flex: 1;
    padding: 30px;
    display: grid;
    grid-template-columns: auto min-content;
    grid-template-rows: min-content 36px auto 60px;
    grid-template-areas:
      "title price"
      "time ."
      "description description"
      ". button";
    row-gap: 10px;
    justify-items: end;
    align-items: end;
  }

  h3 {
    grid-area: title;
    align-self: start;
    justify-self: start;

    font-size: 3.6rem;
    font-weight: 600;
    line-height: 1;
  }

  .price {
    grid-area: price;
    align-self: start;

    font-size: 3.6rem;
    font-weight: 500;
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

  .description {
    grid-area: description;
    align-self: start;

    color: var(--text-primary);
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    .wrapper {
      align-items: flex-start;
      padding: 105px 15px;
      height: auto;
    }
    .product-detail {
      flex-direction: column;
      min-height: auto;
    }

    .aspect-ratio {
      width: 100%;
      min-height: auto;
      padding-bottom: 56.25%;
    }
  }
</style>

<script>
  import Button from "./Button.svelte";
</script>

<div class="wrapper">
  <div class="product-detail">
    <img src="https://picsum.photos/400/400" alt="" />
    <div class="annexe">
      <h3>Ryzen 7 5800X</h3>
      <p class="price">1000 <small>€</small></p>
      <time>1 heure</time>
      <p class="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
        obcaecati eos dolore similique asperiores corporis sapiente expedita
        ipsam saepe velit numquam, nam mollitia necessitatibus harum totam
        ducimus corrupti est perferendis.
      </p>
      <Button />
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .product-detail {
    margin: auto;
    height: 600px;
    width: min(100%, 1080px);
    border-radius: 20px;
    display: flex;

    background: #2f3136;
  }

  img {
    height: 100%;
    width: 400px;
    border-radius: 20px;
    object-fit: cover;
  }

  .annexe {
    color: white;
    flex: 1;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 36px 36px auto 60px;
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

    font-size: 36px;
    font-weight: 600;
    line-height: 1;
  }

  .price {
    grid-area: price;
    align-self: start;

    font-size: 36px;
    font-weight: 500;
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

  .description {
    grid-area: description;
    align-self: start;

    color: var(--text-primary);
    font-size: 28px;
    font-weight: 400;
    line-height: 1.3;
  }
</style>

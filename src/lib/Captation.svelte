<script>
  export let title = "";
  export let description = "";
  export let img = {};
</script>

<div>
  <h1>{title}</h1>
  <p>
    {description}
  </p>
  <img src={img.src} alt={img.alt} />
</div>

<style>
  div {
    position: relative;
    padding: 104px 0 40px 0;
    display: grid;
    grid-template-columns: 15px 1fr 540px 540px 1fr 15px;
    grid-template-rows: auto auto;
    grid-template-areas:
      ". . title img img img"
      ". . description img img img";
  }

  h1 {
    grid-area: title;
    font-size: 6.5rem;
    line-height: 1;
    font-weight: 500;
    padding-right: 20px;
  }

  p {
    grid-area: description;
    font-size: 3.3rem;
    line-height: 1.2;
    font-weight: 400;
    padding: 20px 20px 0 0;
    color: var(--header-secondary);
  }

  img {
    grid-area: img;
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    img {
      position: absolute;
      z-index: -1;
      filter: blur(3px) brightness(40%);
      bottom: 35px;
      border-radius: 10px;
    }
    div {
      grid-template-columns: 15px auto 15px;
      grid-template-rows: auto auto;
      grid-template-areas:
        ". title ."
        ". description .";
    }
  }
</style>

<div>
  <h1>Trouvez les meilleurs offres du marché</h1>
  <p>
    Chiné des produits en avant premiere a des prix competitifs. Ne perdez plus
    votre temps entre differentes annonce. Un endroit pour les emplettes.
  </p>
  <img src="https://picsum.photos/1440/600" alt="" />
</div>

<style>
  div {
    padding: 104px 0 40px 0;
    display: grid;
    grid-template-columns: 1fr 540px 540px 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      ". title img img"
      ". description img img";
  }

  h1 {
    grid-area: title;
    font-size: 65px;
    line-height: 65px;
    font-weight: 500;
    padding-right: 20px;
  }

  p {
    grid-area: description;
    font-size: 33px;
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
</style>

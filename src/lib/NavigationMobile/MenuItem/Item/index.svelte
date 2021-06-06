<script>
  export let name = "";
  export let sellers = [];
  export let isMoreToSee = false;
</script>

<div class="wrapper">
  <p>{name}</p>
  <ul>
    {#each sellers.slice(0, 4) as { product, id }, i}
      <li><a on:click href={`/product/${id}`}>{product[0]}</a></li>
    {/each}
    {#if isMoreToSee}
      <li>
        <a on:click href={`/serie/${name.slugify("-")}`}>Voir plus</a>
      </li>
    {/if}
  </ul>
</div>

<style>
  .wrapper {
    padding: 0 15px 10px 15px;
  }

  p {
    padding: 10px 15px;
    font-size: 1.6em;
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  li:not(:last-of-type) {
    margin: 0 0 10px 0;
  }

  a {
    padding: 15px;
    background-color: var(--bg-tertiary);
    border-radius: 50px;
    display: block;

    font-size: 1.4em;
    font-weight: 500;
  }
</style>

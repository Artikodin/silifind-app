<script>
  export let title = "";
  export let items = [];
</script>

<div class="wrapper">
  <p>{title}</p>
  <ul>
    {#each items as { value, url }, i}
      <li><a href={url}>{value}</a></li>
    {/each}
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

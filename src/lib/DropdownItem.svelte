<script>
  export let openedDropdown;
  export let title;

  export let series = [];
</script>

<div
  on:mouseover
  on:mouseout
  class="dropdown-wrapper"
  class:show={title === openedDropdown}
>
  <div class="dropdown-list">
    <div class="list-wrapper">
      {#each series as { name, sellers, isMoreToSee }}
        <div class="list">
          <p>{name}</p>
          <ul>
            {#each sellers as { id, product }}
              <li><a on:click href={`/product/${id}`}>{product[0]}</a></li>
            {/each}
            {#if isMoreToSee}
              <li class="more-to-see">
                <a on:click href={`/seller/${name.slugify("-")}`}>Voir plus</a>
              </li>
            {/if}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .dropdown-wrapper {
    padding-top: 64px;
    width: 100%;
    position: absolute;
    display: none;
    top: 0;
  }

  .dropdown-list {
    background-color: var(--bg-primary);
    padding: 30px 40px;

    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .show {
    display: block;
  }

  .list-wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .list {
    padding: 10px;
    flex: 1 1 0;
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--header-secondary);
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    font-size: 1.6rem;
    line-height: 1.2;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
  }
  .more-to-see {
    margin: 15px 0 0 0 !important;
  }
  li {
    margin: 5px 0;
  }

  li:first-of-type {
    margin: 0 0 5px 0;
  }

  li:last-of-type {
    margin: 5px 0 0 0;
  }
</style>

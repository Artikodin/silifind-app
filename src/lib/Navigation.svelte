<script>
  import DropdownItem from "./DropdownItem.svelte";

  export let products = [];

  let openedDropdown = null;

  const handleMouseOver = title => {
    openedDropdown = title;
  };

  const handleMouseOut = () => {
    openedDropdown = null;
  };
</script>

<nav class="navigation">
  <ul>
    {#each products as { name: title }, i}
      <li>
        <a
          href="#"
          on:mouseover={handleMouseOver(title)}
          on:mouseout={handleMouseOut}>{title}</a
        >
      </li>
    {/each}
  </ul>
</nav>

{#each products as { name: title, series }, i}
  <DropdownItem
    on:mouseover={handleMouseOver(title)}
    on:mouseout={handleMouseOut}
    on:click={handleMouseOut}
    {title}
    {openedDropdown}
    {series}
  />
{/each}

<style>
  ul {
    list-style: none;
    display: flex;
  }

  li {
    margin-right: 30px;
    position: relative;
  }

  li:last-of-type {
    margin-right: 0;
  }

  a {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    transition: color 0.2s 0s ease;
    color: var(--header-primary);
    text-decoration: none;
  }
  a:hover {
    color: var(--header-secondary);
  }

  @media (max-width: 768px) {
    .navigation {
      display: none;
    }
  }
</style>

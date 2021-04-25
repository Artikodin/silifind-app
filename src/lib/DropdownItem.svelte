<script>
  export let openedDropdown;
  export let title;
</script>

<div
  on:mouseover
  on:mouseout
  class="dropdown-wrapper"
  class:show={title === openedDropdown}
>
  <div class="dropdown-list">
    <div class="list-wrapper">
      <div class="list">
        <p>AMD</p>
        <ul>
          <li>RX 6800</li>
          <li>RX 6700</li>
          <li>RX 6500</li>
          <li>RX 6400</li>
        </ul>
      </div>
      <div class="list">
        <p>AMD</p>
        <ul>
          <li>RX 6800</li>
          <li>RX 6700</li>
          <li>RX 6500</li>
          <li>RX 6400</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<style>
  .dropdown-wrapper {
    padding-top: 30px;
    width: auto;
    position: absolute;
    display: none;

    top: 100%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
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
  }

  .list:not(:last-of-type) {
    margin-right: 60px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
    color: var(--header-secondary);
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
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

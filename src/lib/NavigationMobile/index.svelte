<script>
  import discord from "$assets/images/discord.svg";
  import MenuItem from "./MenuItem/index.svelte";
  import { slide, fade } from "./transitions";

  export let products = [];

  let isOpen = false;
  let duration = 250;
</script>

<div class="navigation-mobile" on:click={() => (isOpen = true)}>
  <div class="burger" />
</div>

{#if isOpen}
  <div class="wrapper">
    <div
      class="menu-bg"
      on:click={() => (isOpen = false)}
      transition:fade={{ duration }}
    />
    <div class="menu-mobile" transition:slide={{ duration }}>
      <div class="header">
        <button type="button" class="close" on:click={() => (isOpen = false)} />
      </div>
      <div class="body">
        {#each products as { name, series }}
          <MenuItem {name} {series} on:click={() => (isOpen = false)} />
        {/each}
      </div>
      <div class="footer">
        <p>Nous rejoindre</p>
        <a href="#">
          <img src={discord} alt="discord logo" />
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  .navigation-mobile {
    height: 30px;
    width: 35px;
    display: none;
    position: relative;
  }

  .burger,
  .navigation-mobile::after,
  .navigation-mobile::before {
    width: 100%;
    height: 4px;
    background-color: white;
    position: absolute;
    top: 50%;
    border-radius: 2px;
    cursor: pointer;
  }

  .burger {
    transform: translateY(-50%);
  }

  .navigation-mobile::after {
    top: 0;
    content: "";
  }

  .navigation-mobile::before {
    top: 100%;
    content: "";
    transform: translateY(-100%);
  }

  .wrapper {
    top: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 2;

    font-size: 10px;
  }

  .menu-bg {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .menu-mobile {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 300px;
    background-color: var(--bg-primary);
    display: flex;
    flex-direction: column;
  }

  .header {
    height: 64px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .close {
    border: none;
    background-color: transparent;
    position: relative;
    height: 45px;
    width: 45px;
    margin: 0;
  }

  .close:active {
    background-color: transparent;
  }

  .close::after,
  .close::before {
    width: 100%;
    height: 4px;
    background-color: white;
    position: absolute;
    border-radius: 2px;
    content: "";
    top: 50%;
    left: 50%;
  }
  .close::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .close::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .body {
    flex: 1 1 0;
    overflow: auto;
  }

  .footer {
    height: 40px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.4em;
  }

  @media (max-width: 768px) {
    .navigation-mobile {
      display: block;
    }
  }
</style>

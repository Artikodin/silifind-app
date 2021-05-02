<script>
  export let url = "";
  export let text = "";
</script>

<a href={url} target="_blank">
  {text}
</a>

<style>
  a {
    grid-area: button;
    background: #42b681;
    background-image: linear-gradient(
      180deg,
      #42b681 0%,
      rgba(0, 0, 0, 0.15) 100%
    );
    border-radius: 7px;
    padding: 1.5rem 2rem;

    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1;
    color: var(--header-primary);
    transition: box-shadow 0.35s 0s ease;
    white-space: nowrap;
  }

  a:hover {
    box-shadow: 0 0 20px 1px rgba(66, 182, 129, 0.3);
  }
</style>

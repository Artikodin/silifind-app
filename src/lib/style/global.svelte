<script>
  import poppinsRegular from "./Poppins-Regular.ttf";
  import poppinsMedium from "./Poppins-Medium.ttf";
  import poppinsSemiBold from "./Poppins-SemiBold.ttf";
</script>

<style>
  @font-face {
    font-family: "poppins";
    src: url({poppinsRegular}) format("truetype");
    font-weight: 100 400;
  }

  @font-face {
    font-family: "poppins";
    src: url({poppinsMedium}) format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "poppins";
    src: url({poppinsSemiBold}) format("truetype");
    font-weight: 600;
  }

  :global(:root) {
    --header-primary: #ffffff;
    --header-secondary: #b9bbbe;

    --text-primary: #dcddde;
    --text-secondary: #72767d;

    --bg-primary: #36393f;
    --bg-secondary: #2f3136;
    --bg-tertiary: #202225;
    --bg-accent: #4f545c;
    --bg-floating: #18191c;

    --blue: #00b0f4;
    --red: #f04747;
    --yellow: #fba618;
    --green: #42b681;
    --purple: #7289da;
  }

  :global(html),
  :global(body),
  :global(#svelte) {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
  }

  :global(body) {
    margin: 0;
    box-sizing: border-box;
    font-family: "poppins", sans-serif;
    color: var(--header-primary);
    background-color: var(--bg-floating);
  }

  :global(a) {
    color: var(--header-primary);
    text-decoration: none;
  }

  :global(a:hover) {
    text-decoration: none;
  }

  :global(a:visited) {
    color: var(--header-primary);
  }

  :global(label) {
    display: block;
  }

  :global(input),
  :global(button),
  :global(select),
  :global(textarea) {
    font-family: inherit;
    font-size: inherit;
    -webkit-padding: 0.4em 0;
    padding: 0.4em;
    margin: 0 0 0.5em 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 2px;
  }

  :global(input:disabled) {
    color: #ccc;
  }

  :global(button) {
    color: #333;
    background-color: #f4f4f4;
    outline: none;
  }

  :global(button:disabled) {
    color: #999;
  }

  :global(button:not(:disabled):active) {
    background-color: #ddd;
  }

  :global(button:focus) {
    border-color: #666;
  }

  :global(h1),
  :global(h2),
  :global(h3),
  :global(p),
  :global(ul) {
    margin: 0;
    padding: 0;
  }
</style>

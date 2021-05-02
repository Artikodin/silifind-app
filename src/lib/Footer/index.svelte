<script>
  import discord from "./discord.svg";
</script>

<footer>
  <div>
    <p>Copyright © 2020 Silifind, All rights reserved.</p>
    <a href="#">
      <img src={discord} alt="discord logo" />
    </a>
  </div>
</footer>

<style>
  footer {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.53) 55%,
      rgba(0, 0, 0, 0.87) 100%
    );

    width: 100%;
    height: 40px;

    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 0 15px;
    box-sizing: border-box;
  }

  div {
    height: 100%;
    width: min(100%, 1080px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  p {
    font-size: 1.8rem;
    line-height: 1;
    color: var(--header-secondary);
  }

  img {
    height: 25px;
    width: auto;
    min-width: 25px;
  }
</style>

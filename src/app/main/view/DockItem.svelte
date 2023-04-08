<script lang="ts">
  export let displayName: string;
  export let icon: string;
  export let onClick: () => void;
</script>

<li>
  <div class="name">{displayName}</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img class="ico" src={icon} alt="" on:click={onClick} />
</li>

<style lang="scss">
  li {
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    opacity: 0.6;
    vertical-align: bottom;
    transition: 0.2s;
    transform-origin: 50% 100%;

    &:hover {
      margin: 0px 13px 0px 13px;
      opacity: 1;

      .name {
        visibility: visible;
      }
    }

    .name {
      position: absolute;
      top: -50px;
      background: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.9);
      min-width: 50px;
      width: auto;
      max-width: 200px;
      height: 30px;
      padding: 5px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      visibility: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 0;
        height: 0;
        backdrop-filter: blur(13px);
        -webkit-backdrop-filter: blur(13px);
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid rgba(0, 0, 0, 0.5);
      }
    }

    .ico {
      width: calc(100% - 10px);
      height: calc(100% - 10px);
      object-fit: cover;
      transition: 0.2s;
      border-radius: 10px;
    }
  }
</style>

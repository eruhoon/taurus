<script lang="ts">
  export let index: number;
  export let displayName: string;
  export let icon: string;
  export let onClick: () => void;
</script>

<li class="li-{index + 1}">
  <div class="name">{displayName}</div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <img class="ico" src={icon} alt="" on:click={onClick} />
</li>

<style lang="scss">
  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    vertical-align: bottom;
    transition: 0.2s;
    transform-origin: 50% 100%;

    &:hover {
      margin: 0px 13px 0px 13px;

      .name {
        visibility: visible !important;
      }
    }

    .name {
      position: absolute;
      top: -70px;
      background: rgba(0, 0, 0, 0.5);
      color: rgba(255, 255, 255, 0.9);
      height: 10px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      visibility: hidden;
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
      //   background: blue;
    }

    .ico-bin {
      width: 94% !important;
      height: 94% !important;
      object-fit: cover;
      transition: 0.2s;

      &:hover {
        margin-left: 10px;
      }
    }
  }
</style>

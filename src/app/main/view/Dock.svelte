<script lang="ts">
  import { onMount } from 'svelte';
  import { SESSION_LOG_OFF, type SessionState } from '../model/SessionState';
  import { SessionService } from '../service/SessionService';
  import StreamDockItems from './StreamDockItems.svelte';

  let sessionState: SessionState = SESSION_LOG_OFF;
  let dockWidth: number;
  let dockElm: HTMLDivElement;

  onMount(() => {
    SessionService.session.subscribe((s) => (sessionState = s));
  });

  function onWheel(e: WheelEvent) {
    const direction = Math.sign(e.deltaY);
    const diff = 30;
    dockElm.scrollBy(direction * diff, 0);
  }
</script>

<div
  class="dock"
  bind:clientWidth={dockWidth}
  on:wheel={(e) => onWheel(e)}
  bind:this={dockElm}
>
  <div class="dock-container">
    {#if sessionState.state === 'log-in'}
      <StreamDockItems sessionHash={sessionState.hash} />
    {/if}
  </div>
</div>

<style lang="scss">
  @font-face {
    font-family: 'San Francisco';
    font-weight: 400;
    src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff');
  }

  @font-face {
    font-family: 'San Francisco';
    font-weight: 800;
    src: url('https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-bold-webfont.woff');
  }

  .dock {
    $margin: 5px;
    display: flex;
    width: auto;
    height: 60px;
    border-radius: 16px;
    overflow-x: hidden;
    overflow-y: hidden;
    justify-content: center;

    .dock-container {
      width: auto;
      height: 58px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      border-radius: 16px;
      justify-content: center;
    }
  }
</style>

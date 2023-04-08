<script lang="ts">
  import type { SessionState } from './model/SessionState';
  import Dock from './view/Dock.svelte';
  import DragHelper from './view/DragHelper.svelte';
  import Login from './view/Login.svelte';

  let loginSession: SessionState = { state: 'log-off' };

  // appWindow.setIgnoreCursorEvents(true);
</script>

<main class="container">
  <DragHelper />
  {#if loginSession.state === 'log-in'}
    <Dock />
    <!-- <Checker loginHash={loginSession.hash} /> -->
  {:else}
    <Login bind:session={loginSession} />
  {/if}
  <!-- <h1>Welcome to Tauri!</h1>

  <div class="row">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo vite" alt="Vite Logo" />
    </a>
    <a href="https://tauri.app" target="_blank">
      <img src="/tauri.svg" class="logo tauri" alt="Tauri Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank">
      <img src="/svelte.svg" class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>

  <p>Click on the Tauri, Vite, and Svelte logos to learn more.</p>

  <div class="row">
    <Greet />
  </div> -->
</main>

<style>
  .container {
    /* background: blue; */
  }
</style>

<script lang="ts">
  import type { SessionState } from './model/SessionState';
  import Dock from './view/Dock.svelte';
  import DragHelper from './view/DragHelper.svelte';
  import Login from './view/Login.svelte';

  let loginSession: SessionState = { state: 'log-off' };

  // appWindow.setIgnoreCursorEvents(true);
</script>

<div class="container">
  {#if loginSession.state === 'log-in'}
    <Dock />
    <!-- <Checker loginHash={loginSession.hash} /> -->
  {:else}
    <Login bind:session={loginSession} />
  {/if}
  <DragHelper />
</div>

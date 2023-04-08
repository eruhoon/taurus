<script lang="ts">
  import { onMount } from 'svelte';
  import { SessionService } from '../service/SessionService';
  import { SESSION_LOG_OFF, type SessionState } from '../model/SessionState';

  export let session: SessionState = SESSION_LOG_OFF;

  let pass: string;
  let id: string;

  onMount(() => {
    SessionService.session.subscribe((s) => (session = s));
  });

  async function login() {
    SessionService.login(id, pass);
  }
</script>

<input type="text" bind:value={id} />
<input type="password" bind:value={pass} />
<button on:click={() => login()}>submit</button>
<div>{session.state}</div>

<script lang="ts">
  import { LoginCommand } from '../model/LoginCommand';
  import type { SessionState } from '../model/SessionState';

  export let session: SessionState = { state: 'log-off' };

  let pass: string;
  let id: string;

  async function login() {
    console.log(id, pass);
    try {
      const { result, hash } = await new LoginCommand().execute(id, pass);
      if (result) {
        session = { state: 'log-in', hash };
      } else {
        session = { state: 'log-off' };
      }
    } catch {
      session = { state: 'log-off' };
    }
  }
</script>

<input type="text" bind:value={id} />
<input type="password" bind:value={pass} />
<button on:click={() => login()}>submit</button>
<div>{session.state}</div>

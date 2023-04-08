<script lang="ts">
  import { LoginCommand } from '../model/LoginCommand';

  let pass: string;
  let id: string;
  let loginResult: boolean = false;

  async function login() {
    console.log(id, pass);
    try {
      const { result, hash } = await new LoginCommand().execute(id, pass);
      loginResult = result;
    } catch {
      loginResult = false;
    }
  }
</script>

<input type="text" bind:value={id} />
<input type="password" bind:value={pass} />
<button on:click={() => login()}>submit</button>
<div>{loginResult}</div>

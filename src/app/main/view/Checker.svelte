<script lang="ts">
  import { onMount } from 'svelte';
  import { SocketIoCheckerSocketModel } from '../model/SocketIoCheckerSocketModel';

  export let loginHash: string;
  let streams: string;

  onMount(() => {
    const host = 'mycast.xyz:9001';
    const socket = new SocketIoCheckerSocketModel(host, loginHash);

    socket.onRefreshStream((s) => {
      console.log(s);
      streams = s.external.map((stream) => stream.nickname).join(',');
    });
  });
</script>

<div>
  streams
  {streams}
</div>

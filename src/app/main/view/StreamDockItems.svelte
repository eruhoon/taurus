<script lang="ts">
  import { onMount } from 'svelte';
  import DockItem from './DockItem.svelte';
  import { StreamSocketService } from '../service/StreamSocketService';
  import type { CheckerSocketStream } from '../model/CheckerSocketModel';

  export let sessionHash: string;
  let locals: CheckerSocketStream[] = [];
  let extenals: CheckerSocketStream[] = [];

  onMount(() => {
    StreamSocketService.registerSocket(sessionHash);
    StreamSocketService.locals.subscribe((s) => (locals = s));
    StreamSocketService.externals.subscribe((s) => (extenals = s));
  });

  function onClick(stream: CheckerSocketStream) {
    console.log(1111);
    open(getLink(stream));
  }

  function getLocalLink(info: CheckerSocketStream): string {
    const host = 'mycast.xyz';
    const { keyid, platform } = info;
    return `https://${host}/embed?id=${keyid}&p=${platform}`;
  }

  function getLink(info: CheckerSocketStream): string {
    switch (info.platform) {
      case 'local':
      case 'totoro':
        return getLocalLink(info);
      case 'twitch':
        return getTwitchLink(info);
      default:
        return info.url;
    }
  }

  function getTwitchLink(info: CheckerSocketStream): string {
    const hostname = 'mycast.xyz';
    const { url: link } = info;
    const url = new URL(link, location.href);
    const params = new URLSearchParams(url.search);
    params.append('parent', hostname);
    url.search = params.toString();
    console.log(url);
    return `${url.toString()}`;
  }
</script>

{#each locals as stream}
  <DockItem
    displayName={stream.nickname}
    icon={stream.icon}
    onClick={() => onClick(stream)}
  />
{/each}

{#each extenals as stream}
  <DockItem
    displayName={stream.nickname}
    icon={stream.icon}
    onClick={() => onClick(stream)}
  />
{/each}

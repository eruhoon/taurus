import { writable, type Readable, type Writable } from 'svelte/store';
import { SocketIoCheckerSocketModel } from '../model/SocketIoCheckerSocketModel';
import type { CheckerSocketStream } from '../model/CheckerSocketModel';

class StreamSocketServiceInit {
  #socket: SocketIoCheckerSocketModel | null = null;

  #locals: Writable<CheckerSocketStream[]> = writable([]);
  #externals: Writable<CheckerSocketStream[]> = writable([]);

  get locals(): Readable<CheckerSocketStream[]> {
    return this.#locals;
  }

  get externals(): Readable<CheckerSocketStream[]> {
    return this.#externals;
  }

  registerSocket(privateKey: string) {
    if (this.#socket) {
      return;
    }

    const host = 'mycast.xyz:9001';
    this.#socket = new SocketIoCheckerSocketModel(host, privateKey);

    this.#socket.onRefreshStream((s) => {
      this.#externals.set(s.external);
      this.#locals.set(s.local);
    });
  }
}

export const StreamSocketService = new StreamSocketServiceInit();

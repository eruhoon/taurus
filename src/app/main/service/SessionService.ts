import { writable, type Readable, type Writable } from 'svelte/store';
import { LoginCommand } from '../model/LoginCommand';
import {
  SESSION_LOG_IN,
  SESSION_LOG_OFF,
  type SessionState,
} from '../model/SessionState';

class SessionServiceInit {
  #loginCommand = new LoginCommand();
  #session: Writable<SessionState> = writable(SESSION_LOG_OFF);

  get session(): Readable<SessionState> {
    return this.#session;
  }

  async login(id: string, pass: string) {
    try {
      const { result, hash } = await this.#loginCommand.execute(id, pass);
      if (result) {
        this.#session.set(SESSION_LOG_IN(hash));
      } else {
        this.#session.set(SESSION_LOG_OFF);
      }
    } catch {
      this.#session.set(SESSION_LOG_OFF);
    }
  }
}

export const SessionService = new SessionServiceInit();

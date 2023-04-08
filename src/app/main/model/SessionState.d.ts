export type SessionState =
  | { state: 'log-off' }
  | { state: 'log-in'; hash: string };

export const SESSION_LOG_OFF = { state: 'log-off' };

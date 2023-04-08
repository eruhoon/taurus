export type SessionState =
  | { state: 'log-off' }
  | { state: 'log-in'; hash: string };

export const SESSION_LOG_OFF: SessionState = { state: 'log-off' };

export const SESSION_LOG_IN = (hash: string): SessionState => ({
  state: 'log-in',
  hash,
});

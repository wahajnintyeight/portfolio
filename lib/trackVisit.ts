// Lightweight visit tracking.
// The backend records a unique visitor as a side-effect of session creation:
// PUT {endpointPrefix}/createSession with a `project-type` header. The call is
// fire-and-forget on the client; the server dedups by (IP, project-type) and
// skips private IPs, so localhost/dev traffic is never recorded.
const TRACKING_ENDPOINT = 'https://api.theprojectphoenix.top/v2/api/createSession';
const PROJECT_TYPE = 'portfolio';

// Track once per browser session to avoid hammering the endpoint on every
// navigation/reload within the same tab session.
const SESSION_FLAG = 'phoenix_visit_tracked';

export function trackVisit(): void {
  if (typeof window === 'undefined') return;

  // Only fire once per tab session.
  if (sessionStorage.getItem(SESSION_FLAG) === '1') return;
  sessionStorage.setItem(SESSION_FLAG, '1');

  try {
    void fetch(TRACKING_ENDPOINT, {
      method: 'PUT',
      headers: {
        'project-type': PROJECT_TYPE,
      },
      // No body needed; keepalive lets the request survive tab close/navigation.
      keepalive: true,
    }).catch(() => {
      // Swallow errors: tracking must never break the UI.
    });
  } catch {
    // Swallow errors: tracking must never break the UI.
  }
}

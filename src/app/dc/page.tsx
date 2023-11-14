"use client";
import * as Sentry from "@sentry/browser";

export default function DCPage() {
  const identify = () => {
    Sentry.setUser({ email: `spiderman@gmail.com` });
  };
  return (
    <div>
      <h1>Hello DC</h1>
      <button type="button" onClick={identify}>
        Dale sentry
      </button>
    </div>
  );
}

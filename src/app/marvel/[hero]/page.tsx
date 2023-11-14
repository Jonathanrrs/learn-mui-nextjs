"use client";
import * as Sentry from "@sentry/browser";
import { useEffect } from "react";
interface Props {
  params: {
    hero: string;
  };
}

export default function MarvelPage({ params }: Props) {
  const { hero } = params;

  useEffect(() => {
    Sentry.setUser({ email: `joni@gmail.com` });
  }, [hero]);

  return (
    <div>
      <h1>Hello {hero}</h1>
    </div>
  );
}

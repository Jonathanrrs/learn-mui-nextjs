import * as Sentry from "@sentry/browser";
interface Props {
  params: {
    hero: string;
  };
}

export default function MarvelPage({ params }: Props) {
  const { hero } = params;
  Sentry.setUser({ email: `${hero}@gmail.com` });
  return (
    <div>
      <h1>Hello {hero}</h1>
    </div>
  );
}

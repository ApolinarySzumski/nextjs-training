import Link from "next/link";

interface DecoyPageProps {
  params: Promise<{ id: string }>;
}

export default async function DecoyPage({ params }: DecoyPageProps) {
  const id = (await params).id;
  const randomId = (): number => Math.round(Math.random() * 1000);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Decoy Page with id: {id}</h1>
      <Link href="/second-part" replace>
        Back to Second Part Page with Replace Current History State
      </Link>
      <Link href="/second-part">Back to Second Part Page</Link>
      <Link href="/second-part/counter">Go to Counter Page</Link>
      <Link href={`/second-part/decoys/${randomId()}`}>
        Go to random Decoy Page
      </Link>
    </div>
  );
}

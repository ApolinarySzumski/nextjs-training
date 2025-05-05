import Link from "next/link";

export default function SecondPartPage() {
  return (
    <>
      <div>Second Part Home Page</div>
      <div>
        <Link href="/second-part/counter">Go to Counter</Link>
      </div>
      <div>
        <Link href="/second-part/decoys/1">Go to first Decoy Page</Link>
      </div>
    </>
  );
}

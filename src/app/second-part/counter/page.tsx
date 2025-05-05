import { Metadata } from "next";
import Link from "next/link";
import { Counter } from "./counter";

export const metadata: Metadata = {
  title: { absolute: "Counter" },
};

export default function CounterPage() {
  return (
    <>
      <Link href={"/second-part"}>Back to Second Part Page</Link>
      <Counter />
    </>
  );
}

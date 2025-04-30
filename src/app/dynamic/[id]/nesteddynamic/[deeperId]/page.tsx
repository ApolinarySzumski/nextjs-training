import { notFound } from "next/navigation";

interface NestedRouteProps {
  params: Promise<{ id: string; deeperId: string }>;
}

export default async function NestedRoute({ params }: NestedRouteProps) {
  const { id, deeperId } = await params;
  if (parseInt(deeperId) > 100) return notFound();
  return (
    <div>
      Nested Dynamic Route With Id: {id} and Deeper Id: {deeperId}
    </div>
  );
}

import { notFound } from "next/navigation";

interface NestedRouteProps {
  params: Promise<{ id: string }>;
}

export default async function NestedRoute({ params }: NestedRouteProps) {
  const id = (await params).id;
  if (parseInt(id) > 1000) notFound();
  return <div>Dynamic Route With Id: {id}</div>;
}

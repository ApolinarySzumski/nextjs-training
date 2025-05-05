import { Metadata } from "next";

interface DynamicMetadataIdProps {
  params: Promise<{ id: string }>;
}

export const generateMetadata = async ({
  params,
}: DynamicMetadataIdProps): Promise<Metadata> => {
  const id = (await params).id;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function DynamicMetadataId({
  params,
}: DynamicMetadataIdProps) {
  const id = (await params).id;

  return <div>Dynamic metadata id: {id}</div>;
}

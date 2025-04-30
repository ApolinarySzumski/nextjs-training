interface DocsProps {
  params: Promise<{ slug: string[] }>;
}

export default async function name({ params }: DocsProps) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <div>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </div>
    );
  } else if (slug?.length === 1) {
    return <div>Viewing docs for feature {slug[0]}</div>;
  }
  return <div>Docs home page</div>;
}

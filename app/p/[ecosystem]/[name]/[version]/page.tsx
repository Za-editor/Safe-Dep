interface PackagePageProps {
  params: {
    ecosystem: string;
    name: string;
    version: string;
  };
}

export default function PackagePage({ params }: PackagePageProps) {
  return (
    <div>
      <h1>Package Page</h1>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}

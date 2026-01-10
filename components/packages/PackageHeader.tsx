export function PackageHeader({
  name,
  version,
  publishedAt,
  repositoryUrl,
}: {
  name: string;
  version: string;
  publishedAt: string;
  repositoryUrl: string;
}) {
  return (
    <div className="space-y-1">
      <h1 className="text-2xl font-bold">
        {name}@{version}
      </h1>
      <p className="text-sm text-muted-foreground">
        Published on {publishedAt} ·{" "}
        <a href={repositoryUrl} className="underline" target="_blank">
          Source
        </a>
      </p>
    </div>
  );
}

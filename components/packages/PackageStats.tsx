import { Card, CardContent } from "@/components/ui/card";

export function PackageStats({
  version,
  vulnerabilities,
  openssfScore,
  license,
  ecosystem,
}: {
  version: string;
  vulnerabilities: number;
  openssfScore: number;
  license: string;
  ecosystem: string;
}) {
  const stats = [
    { label: "Version", value: version },
    { label: "Vulnerabilities", value: vulnerabilities },
    { label: "OpenSSF Scorecard", value: `${openssfScore}/10` },
    { label: "License", value: license },
    { label: "Ecosystem", value: ecosystem },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="py-4 text-center">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-lg font-semibold">{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

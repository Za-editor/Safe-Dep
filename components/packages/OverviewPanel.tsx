export function OverviewPanel({
  summary,
  verification,
  details,
}: {
  summary: string;
  verification: string;
  details: string;
}) {
  return (
    <div className="space-y-6 mt-6">
      <section>
        <h3 className="font-semibold mb-2">Summary</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Verification Record</h3>
        <p className="text-sm text-muted-foreground">{verification}</p>
      </section>

      <section>
        <h3 className="font-semibold mb-2">Details</h3>
        <p className="text-sm text-muted-foreground">{details}</p>
      </section>
    </div>
  );
}

import { PackageHeader } from "@/components/packages/PackageHeader";
import { PackageStats } from "@/components/packages/PackageStats";
import { PackageTabs } from "@/components/packages/PackageTabs";
import { TopBar } from "@/components/packages/Topbar";
import { mockPackageOverview } from "@/lib/mocks/package-overview";

interface PackagePageProps {
  params: Promise<{
    ecosystem: string;
    name: string;
    version: string;
  }>;
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { ecosystem, name, version } = await params;

  const data = {
    ...mockPackageOverview,
    ecosystem,
    name,
    version,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <TopBar />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-6xl">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-6">
          {/* Package Header with metadata */}
          <PackageHeader
            name={data.name}
            version={data.version}
            analyzedAt={data.analyzedAt}
            sourceUrl={data.sourceUrl}
            sha256={data.sha256}
            confidence={data.confidence}
          />

          {/* Stats Cards Row */}
          <PackageStats
            version={data.version}
            vulnerabilities={data.vulnerabilities}
            openssfScore={data.openssfScore}
            license={data.license}
            ecosystem={data.ecosystem}
          />

          {/* Tabbed Content */}
          <PackageTabs
            summary={data.summary}
            summaryNote={data.summaryNote}
            summaryDetails={data.summaryDetails}
            verification={data.verification}
            details={data.details}
            detailsNote={data.detailsNote}
          />
        </div>
      </main>
    </div>
  );
}

import { Package } from "lucide-react";

interface PackageHeaderProps {
  name: string;
  version: string;
  analyzedAt: string;
  sourceUrl: string;
  sha256: string;
  confidence: string;
}

export function PackageHeader({
  name,
  version,
  analyzedAt,
  sourceUrl,
  sha256,
  confidence,
}: PackageHeaderProps) {
  return (
    <div className="space-y-3">
      {/* Package Name with Icon */}
      <div className="flex items-center gap-2">
        <Package className="h-5 w-5 text-gray-600" />
        <h1 className="text-2xl font-semibold text-gray-900">
          {name}@{version}
        </h1>
      </div>

      {/* Metadata Grid */}
      <div className="space-y-1 text-sm">
        <div className="flex gap-2">
          <span className="text-gray-600 font-medium">Analyzed at:</span>
          <span className="text-gray-900">{analyzedAt}</span>
        </div>

        <div className="flex gap-2">
          <span className="text-gray-600 font-medium">Source:</span>
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 hover:underline"
          >
            {sourceUrl}
          </a>
        </div>

        <div className="flex gap-2">
          <span className="text-gray-600 font-medium">SHA256:</span>
          <span className="text-gray-700 font-mono text-xs break-all">
            {sha256}
          </span>
        </div>

        <div className="flex gap-2">
          <span className="text-gray-600 font-medium">Confidence:</span>
          <span className="text-gray-900">{confidence}</span>
        </div>
      </div>
    </div>
  );
}

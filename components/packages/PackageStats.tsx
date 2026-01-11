import { Package, AlertTriangle, Shield, FileText, Box } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageStatsProps {
  version: string;
  vulnerabilities: number;
  openssfScore: number;
  license: string;
  ecosystem: string;
}

export function PackageStats({
  version,
  vulnerabilities,
  openssfScore,
  license,
  ecosystem,
}: PackageStatsProps) {
  const stats = [
    {
      label: "Version",
      value: version,
      icon: Package,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      label: "Vulnerabilities",
      value: vulnerabilities.toString(),
      icon: AlertTriangle,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
    },
    {
      label: "OpenSSF Scorecard",
      value: `${openssfScore}/10`,
      icon: Shield,
      iconColor: "text-teal-500",
      bgColor: "bg-teal-50",
    },
    {
      label: "License",
      value: license,
      icon: FileText,
      iconColor: "text-purple-500",
      bgColor: "bg-purple-50",
    },
    {
      label: "Ecosystem",
      value: ecosystem,
      icon: Box,
      iconColor: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="flex flex-col items-start gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className={cn("p-1.5 rounded", stat.bgColor)}>
                <Icon className={cn("h-4 w-4", stat.iconColor)} />
              </div>
              <span>{stat.label}</span>
            </div>
            <div className="text-2xl font-semibold text-gray-900">
              {stat.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}

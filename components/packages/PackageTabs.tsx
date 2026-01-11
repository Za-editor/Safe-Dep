"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PackageTabsProps {
  summary: string;
  summaryNote: string;
  summaryDetails: string;
  verification: string;
  details: string;
  detailsNote: string;
}

export function PackageTabs({
  summary,
  summaryNote,
  summaryDetails,
  verification,
  details,
  detailsNote,
}: PackageTabsProps) {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 space-x-6">
        <TabsTrigger
          value="overview"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="vulnerabilities"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
        >
          Vulnerabilities
        </TabsTrigger>
        <TabsTrigger
          value="versions"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
        >
          Versions
        </TabsTrigger>
        <TabsTrigger
          value="license"
          className="rounded-none border-b-2 border-transparent data-[state=active]:border-teal-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
        >
          License
        </TabsTrigger>
      </TabsList>

      {/* Overview Tab */}
      <TabsContent value="overview" className="space-y-8 mt-8">
        {/* Summary Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Summary</h2>
          <div className="border-l-4 border-teal-500 bg-gray-50 p-4 space-y-2">
            <p className="text-sm text-gray-700 leading-relaxed">{summary}</p>
            <p className="text-sm text-gray-900 leading-relaxed">
              <span className="font-semibold">Note:</span> {summaryNote}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {summaryDetails}
            </p>
          </div>
        </div>

        {/* Verification Record Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Verification Record
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            {verification}
          </p>
        </div>

        {/* Details Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900">Details</h2>
          <p className="text-sm text-gray-900 leading-relaxed">
            <span className="font-semibold">Note:</span> {detailsNote}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{details}</p>
        </div>
      </TabsContent>

      {/* Vulnerabilities Tab */}
      <TabsContent value="vulnerabilities" className="space-y-6 mt-8">
        <div className="text-center py-12 text-gray-500">
          <p className="text-sm">
            Vulnerability data will be loaded from SafeDep API
          </p>
        </div>
      </TabsContent>

      {/* Versions Tab */}
      <TabsContent value="versions" className="space-y-6 mt-8">
        <div className="text-center py-12 text-gray-500">
          <p className="text-sm">
            Version history will be loaded from SafeDep API
          </p>
        </div>
      </TabsContent>

      {/* License Tab */}
      <TabsContent value="license" className="space-y-6 mt-8">
        <div className="text-center py-12 text-gray-500">
          <p className="text-sm">
            License information will be loaded from SafeDep API
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}

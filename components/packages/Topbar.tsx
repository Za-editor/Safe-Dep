import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                Powered by
              </div>
              <div className="text-lg font-semibold text-gray-900">SafeDep</div>
            </div>
          </div>
        </div>

        {/* Install GitHub App Button */}
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Github className="h-4 w-4 mr-2" />
          Install GitHub App
        </Button>
      </div>
    </header>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FilePlus2 } from "lucide-react";

export default function TastingLogPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline font-bold text-foreground">📋 Tasting &amp; Calibration</h1>
          <p className="text-muted-foreground">Hone your palate and compare your notes.</p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <FilePlus2 className="mr-2 h-4 w-4" />
          Start Blind Tasting
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Flavor Logbook</CardTitle>
          <CardDescription>
            Each entry here is dedicated to a single coffee origin or roast. Track your tastings over time.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center text-center p-12">
          <p className="text-lg font-medium text-muted-foreground">Your tasting log is empty.</p>
          <p className="text-sm text-muted-foreground">Start by logging your brews on the Daily Log page.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Identify Defects</CardTitle>
          <CardDescription>
            Learn to identify common issues like over/under-extraction, staleness, and channeling.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <p className="text-sm text-muted-foreground">This section will contain guides and examples to help you spot defects in your brew.</p>
        </CardContent>
      </Card>
    </div>
  );
}

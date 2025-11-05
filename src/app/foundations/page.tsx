import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, DraftingCompass, TestTube2, Droplets } from "lucide-react";

const foundationTopics = [
  {
    title: "Coffee Plant & Processing",
    description: "Notes on coffee plant types, processing methods, and roast levels.",
    icon: DraftingCompass,
  },
  {
    title: "Flavor Wheel Study",
    description: "Deep dive into the SCA Coffee Taster’s Flavor Wheel to identify and describe flavors.",
    icon: BookOpen,
  },
  {
    title: "Brewing Science",
    description: "Understanding extraction yield, Total Dissolved Solids (TDS), and the effects of grind size.",
    icon: TestTube2,
  },
  {
    title: "Espresso & Milk",
    description: "Mastering the basics: ratios, pressure, pre-infusion, and milk steaming techniques.",
    icon: Droplets,
  },
];

export default function FoundationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-foreground">📘 Foundations</h1>
        <p className="text-muted-foreground">The theory and science behind a great cup of coffee.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {foundationTopics.map((topic) => (
          <Card key={topic.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-headline">{topic.title}</CardTitle>
              <topic.icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{topic.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

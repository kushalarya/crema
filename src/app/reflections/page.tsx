import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const reflectionPrompts = [
  { id: "improved", label: "What improved this week?", placeholder: "e.g., My milk texture is more consistent..." },
  { id: "struggling", label: "What am I still struggling with?", placeholder: "e.g., Still have trouble with channeling on light roasts..." },
  { id: "favorites", label: "Favorite brews of the week?", placeholder: "e.g., The washed Ethiopian pourover on Wednesday was incredible..." },
  { id: "newBeans", label: "New beans or methods tried?", placeholder: "e.g., Tried a natural process Costa Rican coffee for the first time..." },
  { id: "goals", label: "Goals for next week?", placeholder: "e.g., Focus on latte art, specifically tulips..." },
];

export default function ReflectionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-foreground">✍️ Reflections &amp; Learnings</h1>
        <p className="text-muted-foreground">Take a moment to reflect on your progress and set new goals.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Weekly Summary</CardTitle>
          <CardDescription>Summarize your week in coffee.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {reflectionPrompts.map((prompt) => (
            <div key={prompt.id} className="grid w-full gap-1.5">
              <Label htmlFor={prompt.id} className="font-semibold">{prompt.label}</Label>
              <Textarea placeholder={prompt.placeholder} id={prompt.id} className="font-code" />
            </div>
          ))}
          <Button size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">Save Weekly Reflection</Button>
        </CardContent>
      </Card>
    </div>
  );
}

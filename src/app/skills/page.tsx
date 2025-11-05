import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Consistent Grind Dosing", progress: 75, goal: "±0.1g accuracy" },
  { name: "Dialing In Espresso Shots", progress: 60, goal: "Sub 5-minute dial-in" },
  { name: "Milk Steaming & Latte Art", progress: 45, goal: "Consistent heart pattern" },
  { name: "Workflow Efficiency", progress: 85, goal: "Sub 3-minute two-drink order" },
];

export default function SkillsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-foreground">📚 Skills Practice</h1>
        <p className="text-muted-foreground">Track your journey to becoming a master barista.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Progress Tracker</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-medium text-foreground">{skill.name}</span>
                <span className="text-sm font-code text-muted-foreground">{skill.progress}%</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Goal: {skill.goal}</p>
              <Progress value={skill.progress} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

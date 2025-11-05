import { JournalForm } from "@/components/journal-form";

export default function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-foreground">New Journal Entry</h1>
        <p className="text-muted-foreground">Use this template for every coffee you make or taste.</p>
      </div>
      <JournalForm />
    </div>
  );
}

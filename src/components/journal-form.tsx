'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Coffee,
  Calendar,
  Wrench,
  Thermometer,
  Weight,
  Timer,
  SlidersHorizontal,
  Droplets,
  Wind,
  Smile,
  Star,
  FlaskConical,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  dateTime: z.string().optional(),
  beansOrigin: z.string().min(2, { message: 'Origin is required.' }),
  beansVariety: z.string().optional(),
  beansRoastLevel: z.string().optional(),
  beansRoaster: z.string().optional(),
  beansRoastDate: z.string().optional(),
  grindSize: z.string().min(1, { message: 'Grind size is required.' }),
  dose: z.number().positive(),
  yield: z.number().positive(),
  brewTime: z.string().min(1, { message: 'Brew time is required.' }),
  method: z.string().min(1, { message: 'Method is required.' }),
  waterType: z.string().optional(),
  waterTemp: z.number().optional(),
  waterRatio: z.string().optional(),
  equipment: z.string().optional(),
  aromaBefore: z.string().optional(),
  aromaAfter: z.string().optional(),
  taste: z.string().optional(),
  flavorNotes: z.string().optional(),
  aftertaste: z.string().optional(),
  overallImpression: z.number().min(1).max(10),
  changes: z.string().optional(),
  learnings: z.string().optional(),
  nextTry: z.string().optional(),
});

export function JournalForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateTime: new Date().toISOString().substring(0, 16),
      beansOrigin: '',
      grindSize: '',
      dose: 18,
      yield: 36,
      brewTime: '00:30',
      method: 'Espresso',
      overallImpression: 5,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Entry Saved!',
      description: 'Your brew has been successfully logged.',
    });
  }

  const InputField = ({ name, label, placeholder, icon: Icon, type = 'text' }: { name: keyof z.infer<typeof formSchema>; label: string; placeholder?: string; icon: React.ElementType, type?: string }) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            {label}
          </FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className="font-code"
              onChange={e => field.onChange(type === 'number' ? e.target.valueAsNumber || 0 : e.target.value)}
              value={field.value as any}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
  
  const TextAreaField = ({ name, label, placeholder, icon: Icon }: { name: keyof z.infer<typeof formSchema>; label: string; placeholder?: string; icon: React.ElementType }) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-muted-foreground" />
            {label}
          </FormLabel>
          <FormControl>
            <Textarea
              placeholder={placeholder}
              {...field}
              className="font-code"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">🧾 Entry Metadata</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
               <FormField
                  control={form.control}
                  name="dateTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" />Date &amp; Time</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} className="font-code" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            <p className="font-headline text-sm font-semibold text-foreground flex items-center gap-2"><Coffee className="h-4 w-4 text-muted-foreground" /> Beans Used</p>
            <div className="grid md:grid-cols-3 gap-4 border p-4 rounded-md">
              <InputField name="beansOrigin" label="Origin" placeholder="e.g., Yirgacheffe, Ethiopia" icon={()=><></>} />
              <InputField name="beansVariety" label="Variety" placeholder="e.g., Heirloom" icon={()=><></>}/>
              <InputField name="beansRoastLevel" label="Roast Level" placeholder="e.g., Light, Medium" icon={()=><></>}/>
              <InputField name="beansRoaster" label="Roaster" placeholder="e.g., Onyx Coffee Lab" icon={()=><></>}/>
              <FormField
                control={form.control}
                name="beansRoastDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roast Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} className="font-code" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <InputField name="grindSize" label="Grind Size" placeholder="e.g., 2.4 on Ode" icon={SlidersHorizontal}/>
              <InputField name="dose" label="Dose (g)" placeholder="e.g., 18" type="number" icon={Weight}/>
              <InputField name="yield" label="Yield (g/ml)" placeholder="e.g., 36" type="number" icon={Droplets}/>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InputField name="brewTime" label="Brew Time" placeholder="e.g., 00:30" icon={Timer}/>
              <FormField
                control={form.control}
                name="method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2"><Wrench className="h-4 w-4 text-muted-foreground" />Method</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="font-code"><SelectValue placeholder="Select a method" /></SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Espresso">Espresso</SelectItem>
                        <SelectItem value="Pour-over">Pour-over</SelectItem>
                        <SelectItem value="AeroPress">AeroPress</SelectItem>
                        <SelectItem value="French Press">French Press</SelectItem>
                        <SelectItem value="Moka Pot">Moka Pot</SelectItem>
                        <SelectItem value="Cold Brew">Cold Brew</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <InputField name="waterType" label="Water Type" placeholder="e.g., Third Wave Water" icon={Droplets}/>
              <InputField name="waterTemp" label="Water Temp (°C)" placeholder="e.g., 94" type="number" icon={Thermometer}/>
            </div>
             <InputField name="equipment" label="Equipment Used" placeholder="e.g., La Marzocco Linea Mini, Hario V60" icon={Wrench}/>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">👃 Sensory Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField name="aromaBefore" label="Aroma (Dry)" placeholder="Notes before brewing" icon={Wind}/>
              <InputField name="aromaAfter" label="Aroma (Wet)" placeholder="Notes after brewing" icon={Wind}/>
            </div>
            <InputField name="taste" label="Taste" placeholder="Sweetness, acidity, bitterness, mouthfeel" icon={Smile}/>
            <TextAreaField name="flavorNotes" label="Flavor Notes" placeholder="e.g., Chocolate, fruit, nutty, floral" icon={Smile}/>
            <InputField name="aftertaste" label="Aftertaste" placeholder="e.g., Lingering, clean, short" icon={Smile}/>
            <FormField
              control={form.control}
              name="overallImpression"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-muted-foreground" />
                    Overall Impression ({field.value}/10)
                  </FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={10}
                      step={1}
                      onValueChange={(value) => field.onChange(value[0])}
                      defaultValue={[field.value]}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline">🧪 Experiments / Variations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <TextAreaField name="changes" label="What did I change?" placeholder="e.g., Finer grind, lower temperature" icon={FlaskConical}/>
            <TextAreaField name="learnings" label="What did I learn?" placeholder="e.g., Finer grind increased bitterness" icon={GraduationCap}/>
            <TextAreaField name="nextTry" label="What to try next time?" placeholder="e.g., Coarser grind, but higher dose" icon={Lightbulb}/>
          </CardContent>
        </Card>

        <Button type="submit" size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
          Save Entry
        </Button>
      </form>
    </Form>
  );
}

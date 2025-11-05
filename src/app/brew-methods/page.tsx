import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const brewMethods = [
  { name: 'Espresso', href: '#', imageId: 'espresso' },
  { name: 'Pour-over', description: 'V60, Chemex, Kalita', href: '#', imageId: 'pour-over' },
  { name: 'AeroPress', href: '#', imageId: 'aeropress' },
  { name: 'French Press', href: '#', imageId: 'french-press' },
  { name: 'Moka Pot', href: '#', imageId: 'moka-pot' },
  { name: 'Cold Brew', href: '#', imageId: 'cold-brew' },
];

export default function BrewMethodsPage() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-headline font-bold text-foreground">🔥 Brew Methods</h1>
        <p className="text-muted-foreground">Mastering the craft, one method at a time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brewMethods.map((method) => {
          const imageData = getImage(method.imageId);
          return (
            <Link href={method.href} key={method.name}>
              <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                {imageData && (
                  <div className="aspect-video relative">
                    <Image
                      src={imageData.imageUrl}
                      alt={imageData.description}
                      fill
                      className="object-cover"
                      data-ai-hint={imageData.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{method.name}</CardTitle>
                  {method.description && <CardDescription>{method.description}</CardDescription>}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Typical ratios, common pitfalls, best recipes, and favorite beans for this method.
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

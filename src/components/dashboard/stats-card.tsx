import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: number | string;
  description?: string;
}

export function StatsCard({
  title,
  value,
  description,
}: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h3 className="text-3xl font-bold mt-2">
          {value}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground mt-2">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
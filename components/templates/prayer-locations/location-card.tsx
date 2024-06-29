import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { InfoIcon, MapPin, MapPinned } from "lucide-react";

const PrayerLocationCard = ({ location }: { location: PrayerLocation }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{location.name}</CardTitle>
        <CardDescription className="line-clamp-2 text-ellipsis max-md:line-clamp-3">
          {location.address && (
            <span className="flex items-center gap-1">
              <MapPin className="inline-block h-4 w-4" />
              <span>{location.address}</span>
            </span>
          )}
          {location.additionalInfo && (
            <span className="flex items-center gap-1">
              <InfoIcon className="inline-block h-4 w-4" />
              <span>{location.additionalInfo}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={location.image}
          alt={location.name}
          className="w-full rounded-md object-cover bg-muted"
          style={{ aspectRatio: "16/9" }}
        />
      </CardContent>
      <CardFooter>{location.description}</CardFooter>
    </Card>
  );
};

export default PrayerLocationCard;

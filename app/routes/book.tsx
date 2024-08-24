import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  date: z.date(),
  eventType: z.string(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function Book() {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const selectedDate = watch("date");

  const onSubmit = (data: BookingFormData) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="container mx-auto py-12 space-y-12">
      <h1 className="text-center text-4xl font-bold mb-6">Book an Event</h1>
      <Card>
        <CardContent className="space-y-4 p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input {...register("name")} placeholder="Your Name" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}

            <Input {...register("email")} type="email" placeholder="Your Email" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <Popover>
              <PopoverTrigger asChild>
                <Input
                  {...register("date")}
                  placeholder="Select Date"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                  readOnly
                />
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  selected={selectedDate}
                  onSelect={(date: Date | undefined) => setValue("date", date as Date)}
                />
              </PopoverContent>
            </Popover>
            {errors.date && <p className="text-red-500">{errors.date.message}</p>}

            <Input {...register("eventType")} placeholder="Event Type" />
            {errors.eventType && <p className="text-red-500">{errors.eventType.message}</p>}

            <Button type="submit" className="w-full">Book Now</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Available Slots</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Add Google Calendar component here */}
          <p className="text-gray-700 leading-relaxed">
            {/* Placeholder for Google Calendar integration */}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
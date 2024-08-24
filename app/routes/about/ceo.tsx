import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AboutCEO() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <h1 className="text-center text-4xl font-bold">
        About Our CEO
      </h1>

      <Card>
        <CardContent className="flex items-center space-x-8 p-6">
          <div className="w-1/3">
            <Avatar className="w-48 h-48">
              <AvatarImage src="/path-to-ceo-image.jpg" alt="CEO Name" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-2/3">
            <CardHeader className="p-0">
              <CardTitle>CEO Name</CardTitle>
            </CardHeader>
            <p className="mt-4 text-gray-700 leading-relaxed">
              John Doe is a visionary leader and the driving force behind InnovaPlan, a cutting-edge event planning platform. With over 20 years of experience in the tech and event industries, John has revolutionized the way people plan and execute events. His passion for innovation and customer-centric approach has led InnovaPlan to become a market leader in digital event solutions.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Career Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Founded InnovaPlan in 2010, growing it from a startup to a global company</li>
            <li>Previously served as CTO at EventTech Solutions for 8 years</li>
            <li>Holds an MBA from Harvard Business School and a BS in Computer Science from MIT</li>
            <li>Recognized as &quot;Entrepreneur of the Year&quot; by Tech Innovators Magazine in 2018</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Vision for the Future</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            John envisions a future where event planning is seamlessly integrated with cutting-edge technology, making it accessible and efficient for everyone. He is committed to driving InnovaPlan towards continuous innovation, focusing on AI-driven personalization and sustainable event solutions.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Personal Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            Outside of work, John is an avid hiker and nature photographer. He is also deeply involved in mentoring young entrepreneurs and supports various STEM education initiatives in underserved communities.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
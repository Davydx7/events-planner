import { Link, Outlet } from "@remix-run/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="container mx-auto py-12 space-y-12">
      <Outlet />
      <h1 className="text-center text-4xl font-bold">About Our Event Planning Business</h1>

      <Card>
        <CardContent className="flex items-center space-x-8 p-6">
          <div className="w-1/2">
            <img src="/path-to-company-image.jpg" alt="Our Company" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-1/2">
            <CardHeader className="p-0">
              <CardTitle>Our Story</CardTitle>
            </CardHeader>
            <p className="mt-4 text-gray-700 leading-relaxed">
              InnovaPlan was founded with the vision of revolutionizing the event planning industry. Our journey began in 2010, and since then, we have been committed to providing innovative and customer-centric event solutions. Our team of experts works tirelessly to ensure that every event we plan is a memorable and seamless experience for our clients.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to make event planning accessible, efficient, and enjoyable for everyone. We leverage cutting-edge technology to deliver personalized and sustainable event solutions that cater to the unique needs of our clients.
          </p>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-8 p-6">
          <div className="w-1/3">
            <Avatar className="w-48 h-48">
              <AvatarImage src="/path-to-team-member-image.jpg" alt="Team Member Name" />
              <AvatarFallback>TM</AvatarFallback>
            </Avatar>
          </div>
          <div className="w-2/3">
            <CardHeader className="p-0">
              <CardTitle>Team Member Name</CardTitle>
            </CardHeader>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our team is composed of experienced professionals who are passionate about event planning. Each member brings a unique set of skills and expertise to the table, ensuring that we deliver top-notch services to our clients.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed">
            We would love to hear from you! Whether you have a question about our services or want to discuss your event planning needs, feel free to reach out to us.
          </p>
          <Button asChild className="mt-4">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </CardContent>
      </Card>

      <div className="text-center mt-8">
        <Button asChild className="text-xl font-semibold hover:underline">
          <Link to="/about/ceo">Learn more about our CEO</Link>
        </Button>
      </div>
    </div>
  );
}
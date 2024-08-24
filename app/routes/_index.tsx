import { Link } from "@remix-run/react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to InnovaPlan</h1>
      <p className="text-xl mb-8">Your premier event planning solution</p>

      <div className="space-y-4">
        <Button asChild size="lg" className="mr-4">
          <Link to="/home">Explore Our Services</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/book">Book an Event</Link>
        </Button>
      </div>

      <nav className="mt-12">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/home" className="text-blue-600 hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-600 hover:underline">About Us</Link>
          </li>
          <li>
            <Link to="/about/ceo" className="text-blue-600 hover:underline">Our CEO</Link>
          </li>
          <li>
            <Link to="/book" className="text-blue-600 hover:underline">Book Event</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

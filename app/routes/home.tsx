import React from 'react';
import { Link } from '@remix-run/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <div className="relative h-[600px] mb-12">
        <img src="/images/hero-event.jpg" alt="Hero Event" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Create Unforgettable Moments</h1>
          <p className="text-xl mb-6">Your vision, our expertise. Let&apos;s make your event extraordinary.</p>
          <Button asChild size="lg">
            <Link to="/contact">Start Planning Now</Link>
          </Button>
        </div>
      </div>

      {/* Services Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Weddings', 'Corporate Events', 'Birthday Parties', 'Gala Dinners'].map((service, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <img src={`/images/service-${index + 1}.jpg`} alt={service} className="w-full h-48 object-cover" />
              </CardContent>
              <CardHeader>
                <CardTitle>{service}</CardTitle>
                <p className="text-sm text-gray-600">We bring your {service.toLowerCase()} to life with meticulous planning and flawless execution.</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-100 py-12 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
          <blockquote className="text-xl italic">
            &ldquo;The team went above and beyond to make our wedding day perfect. Every detail was taken care of, allowing us to relax and enjoy our special day.&rdquo;
            <footer className="text-sm mt-4">Sarah & John, Newlyweds</footer>
          </blockquote>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Your Event Spectacular?</h2>
        <p className="text-xl mb-6">Let&apos;s turn your vision into reality. Our expert team is here to create an unforgettable experience for you and your guests.</p>
        <Button asChild size="lg">
          <Link to="/contact">Get in Touch Today</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
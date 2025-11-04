import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Hotel, Star, MapPin, Wifi, Coffee, UtensilsCrossed } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HotelRecommendationsProps {
  destination: string;
  budget: string;
}

export function HotelRecommendations({ destination, budget }: HotelRecommendationsProps) {
  // Mock hotel data for Indian destinations
  const hotels = [
    {
      id: 1,
      name: 'Heritage Palace Resort',
      image: 'https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeSUyMHJvb218ZW58MXx8fHwxNzYyMTQxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.8,
      reviews: 856,
      price: 4500,
      location: 'City Center',
      amenities: ['Free WiFi', 'Breakfast', 'Pool', 'Spa'],
      type: 'luxury'
    },
    {
      id: 2,
      name: 'Cozy Boutique Stay',
      image: 'https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeSUyMHJvb218ZW58MXx8fHwxNzYyMTQxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.5,
      reviews: 543,
      price: 2800,
      location: 'Tourist Area',
      amenities: ['Free WiFi', 'Breakfast', 'Rooftop'],
      type: 'medium'
    },
    {
      id: 3,
      name: 'Smart Budget Inn',
      image: 'https://images.unsplash.com/photo-1729605411476-defbdab14c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGx1eHVyeSUyMHJvb218ZW58MXx8fHwxNzYyMTQxMTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 4.2,
      reviews: 324,
      price: 1200,
      location: 'Near Station',
      amenities: ['Free WiFi', 'AC Rooms'],
      type: 'budget'
    }
  ];

  return (
    <div className="bg-white brutal-border brutal-shadow-lg p-6 rotate-[-0.3deg]">
      <div className="rotate-[0.3deg]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#a78bfa] p-3 brutal-border rotate-2">
            <Hotel className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-black">Hotels in {destination}</h2>
        </div>

        <div className="space-y-6">
          {hotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="brutal-border bg-white overflow-hidden brutal-hover"
              style={{ transform: `rotate(${[0.5, -0.3, 0.4][index]}deg)` }}
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Hotel Image */}
                <div className="relative h-64 md:h-full border-b-4 md:border-b-0 md:border-r-4 border-black">
                  <ImageWithFallback
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#ffe66d] brutal-border px-4 py-2 rotate-[-3deg]">
                    <p className="text-2xl">₹{hotel.price}</p>
                    <p className="text-xs">per night</p>
                  </div>
                </div>

                {/* Hotel Details */}
                <div className="md:col-span-2 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4" />
                        {hotel.location}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1 bg-[#4ade80] brutal-border px-3 py-1">
                      <Star className="w-4 h-4 fill-white text-white" />
                      <span className="text-white">{hotel.rating}</span>
                    </div>
                    <span className="text-sm">({hotel.reviews} reviews)</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, idx) => (
                      <div
                        key={idx}
                        className="brutal-border bg-white px-3 py-1 text-sm"
                        style={{
                          backgroundColor: ['#ffe66d', '#4ecdc4', '#ff6b6b', '#a78bfa'][idx % 4] + '30'
                        }}
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white brutal-border brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#1a1a1a] transition-all">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Badge } from './ui/badge';
import { MapPin, Clock, Star, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PlacesToVisitProps {
  destination: string;
}

export function PlacesToVisit({ destination }: PlacesToVisitProps) {
  // Mock places data for Indian destinations
  const places = [
    {
      id: 1,
      name: 'Historic Fort',
      image: 'https://images.unsplash.com/photo-1756468288062-bfa87b7cefcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBsYW5kbWFya3MlMjB0b3VyaXN0fGVufDF8fHx8MTc2MjE0MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Marvel at centuries-old architecture and royal heritage',
      duration: '2-3 hours',
      rating: 4.8,
      category: 'Heritage',
      bestTime: 'Morning'
    },
    {
      id: 2,
      name: 'Local Market Bazaar',
      image: 'https://images.unsplash.com/photo-1756468288062-bfa87b7cefcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBsYW5kbWFya3MlMjB0b3VyaXN0fGVufDF8fHx8MTc2MjE0MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Experience vibrant colors, sounds, and local crafts',
      duration: '1-2 hours',
      rating: 4.6,
      category: 'Shopping',
      bestTime: 'Evening'
    },
    {
      id: 3,
      name: 'Temple Complex',
      image: 'https://images.unsplash.com/photo-1756468288062-bfa87b7cefcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBsYW5kbWFya3MlMjB0b3VyaXN0fGVufDF8fHx8MTc2MjE0MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spiritual journey through ancient Indian temples',
      duration: '2-3 hours',
      rating: 4.9,
      category: 'Spiritual',
      bestTime: 'Morning'
    },
    {
      id: 4,
      name: 'Scenic Viewpoint',
      image: 'https://images.unsplash.com/photo-1756468288062-bfa87b7cefcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBsYW5kbWFya3MlMjB0b3VyaXN0fGVufDF8fHx8MTc2MjE0MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Breathtaking panoramic views perfect for photos',
      duration: '1-2 hours',
      rating: 4.7,
      category: 'Nature',
      bestTime: 'Sunset'
    },
    {
      id: 5,
      name: 'Street Food Hub',
      image: 'https://images.unsplash.com/photo-1756468288062-bfa87b7cefcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBsYW5kbWFya3MlMjB0b3VyaXN0fGVufDF8fHx8MTc2MjE0MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Taste authentic local flavors and regional specialties',
      duration: '1-2 hours',
      rating: 4.9,
      category: 'Food',
      bestTime: 'Evening'
    },
    {
      id: 6,
      name: 'Cultural Museum',
      image: 'https://images.unsplash.com/photo-1756468288062-bfa87b7cefcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBsYW5kbWFya3MlMjB0b3VyaXN0fGVufDF8fHx8MTc2MjE0MTE5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Learn about rich Indian culture and traditions',
      duration: '2-3 hours',
      rating: 4.5,
      category: 'Culture',
      bestTime: 'Afternoon'
    }
  ];

  const categoryColors: Record<string, string> = {
    'Heritage': '#ff6b6b',
    'Shopping': '#ffe66d',
    'Spiritual': '#a78bfa',
    'Nature': '#4ade80',
    'Food': '#fb923c',
    'Culture': '#4ecdc4'
  };

  return (
    <div className="bg-white brutal-border brutal-shadow-lg p-6 rotate-[0.4deg]">
      <div className="rotate-[-0.4deg]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#f472b6] p-3 brutal-border rotate-[-3deg]">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-black">Must-Visit Places in {destination}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place, index) => (
            <div
              key={place.id}
              className="brutal-border bg-white overflow-hidden brutal-hover cursor-pointer"
              style={{ transform: `rotate(${[1, -0.5, 0.8, -1, 0.5, -0.3][index]}deg)` }}
            >
              <div className="relative h-48 overflow-hidden border-b-4 border-black">
                <ImageWithFallback
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute top-3 right-3 brutal-border px-3 py-1 rotate-3"
                  style={{ backgroundColor: categoryColors[place.category] }}
                >
                  <span className="text-white text-sm">{place.category}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="mb-3 text-black">{place.name}</h3>
                
                {/* Rating & Duration */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1 bg-[#4ade80] brutal-border px-2 py-1">
                    <Star className="w-4 h-4 fill-white text-white" />
                    <span className="text-white text-sm">{place.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-700">
                    <Clock className="w-4 h-4" />
                    {place.duration}
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">{place.description}</p>

                <div className="flex items-center gap-2 text-sm bg-[#5b8def]/20 brutal-border p-2">
                  <MapPin className="w-4 h-4 text-[#5b8def]" />
                  <span>Best: {place.bestTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

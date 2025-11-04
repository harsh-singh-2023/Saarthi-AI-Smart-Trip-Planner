import { Badge } from './ui/badge';
import { Calendar, MapPin, Clock, Utensils, Camera, Coffee, Train } from 'lucide-react';
import { useState } from 'react';

interface ItineraryPlannerProps {
  destination: string;
  days: number;
}

export function ItineraryPlanner({ destination, days = 3 }: ItineraryPlannerProps) {
  const [activeDay, setActiveDay] = useState(1);

  // Mock itinerary data for Indian destinations
  const itinerary = [
    {
      day: 1,
      title: 'Arrival & Cultural Immersion',
      activities: [
        {
          time: '9:00 AM',
          title: 'Arrive at Airport/Station',
          description: 'Pick up rental car or take local transport to hotel',
          icon: 'transport',
          duration: '1 hour'
        },
        {
          time: '11:00 AM',
          title: 'Hotel Check-in',
          description: 'Freshen up and relax after journey',
          icon: 'hotel',
          duration: '1 hour'
        },
        {
          time: '1:00 PM',
          title: 'Local Lunch Experience',
          description: 'Try authentic regional thali or street food',
          icon: 'food',
          duration: '1.5 hours'
        },
        {
          time: '3:00 PM',
          title: 'Historic Fort Visit',
          description: 'Explore ancient architecture and learn history',
          icon: 'camera',
          duration: '2 hours'
        },
        {
          time: '6:00 PM',
          title: 'Sunset at Viewpoint',
          description: 'Capture stunning sunset views',
          icon: 'camera',
          duration: '1 hour'
        },
        {
          time: '8:00 PM',
          title: 'Traditional Dinner',
          description: 'Experience local cuisine at popular restaurant',
          icon: 'food',
          duration: '2 hours'
        }
      ]
    },
    {
      day: 2,
      title: 'Temples & Markets',
      activities: [
        {
          time: '7:00 AM',
          title: 'Temple Visit',
          description: 'Early morning prayers and spiritual experience',
          icon: 'camera',
          duration: '2 hours'
        },
        {
          time: '9:30 AM',
          title: 'Breakfast at Local Café',
          description: 'Try regional breakfast specialties',
          icon: 'coffee',
          duration: '1 hour'
        },
        {
          time: '11:00 AM',
          title: 'Cultural Museum',
          description: 'Learn about local art, history and traditions',
          icon: 'camera',
          duration: '2 hours'
        },
        {
          time: '2:00 PM',
          title: 'Lunch Break',
          description: 'Rest and enjoy local delicacies',
          icon: 'food',
          duration: '1 hour'
        },
        {
          time: '3:30 PM',
          title: 'Bazaar Shopping',
          description: 'Explore colorful markets and buy souvenirs',
          icon: 'camera',
          duration: '2 hours'
        },
        {
          time: '7:00 PM',
          title: 'Street Food Tour',
          description: 'Taste famous local street food varieties',
          icon: 'food',
          duration: '2 hours'
        }
      ]
    },
    {
      day: 3,
      title: 'Nature & Departure',
      activities: [
        {
          time: '6:00 AM',
          title: 'Sunrise Expedition',
          description: 'Watch beautiful sunrise at scenic spot',
          icon: 'camera',
          duration: '2 hours'
        },
        {
          time: '9:00 AM',
          title: 'Breakfast at Hotel',
          description: 'Enjoy final meal with local flavors',
          icon: 'coffee',
          duration: '1 hour'
        },
        {
          time: '10:30 AM',
          title: 'Last-minute Shopping',
          description: 'Pick up remaining gifts and handicrafts',
          icon: 'camera',
          duration: '1.5 hours'
        },
        {
          time: '12:30 PM',
          title: 'Check-out & Lunch',
          description: 'Final check-out and farewell meal',
          icon: 'food',
          duration: '1.5 hours'
        },
        {
          time: '2:30 PM',
          title: 'Departure',
          description: 'Head to airport/station for journey home',
          icon: 'transport',
          duration: '1 hour'
        }
      ]
    }
  ];

  const getActivityIcon = (iconType: string) => {
    const iconProps = { className: "w-5 h-5 text-white" };
    switch (iconType) {
      case 'food':
        return <Utensils {...iconProps} />;
      case 'camera':
        return <Camera {...iconProps} />;
      case 'coffee':
        return <Coffee {...iconProps} />;
      case 'transport':
        return <Train {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  const getActivityColor = (iconType: string) => {
    switch (iconType) {
      case 'food': return '#ff6b6b';
      case 'camera': return '#f472b6';
      case 'coffee': return '#fb923c';
      case 'transport': return '#5b8def';
      default: return '#4ecdc4';
    }
  };

  return (
    <div className="bg-white brutal-border brutal-shadow-lg p-6 rotate-[-0.3deg]">
      <div className="rotate-[0.3deg]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#4ade80] p-3 brutal-border rotate-2">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-black">{days}-Day Itinerary for {destination}</h2>
        </div>

        {/* Day Tabs */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {itinerary.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              className={`p-4 brutal-border transition-all ${
                activeDay === day.day
                  ? 'bg-black text-white translate-x-[-2px] translate-y-[-2px] shadow-[6px_6px_0px_#1a1a1a]'
                  : 'bg-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1a1a1a]'
              }`}
            >
              <div className="text-2xl mb-1">Day {day.day}</div>
              <div className="text-sm opacity-80">{day.title}</div>
            </button>
          ))}
        </div>

        {/* Active Day Content */}
        {itinerary.map((day) => (
          activeDay === day.day && (
            <div key={day.day} className="space-y-4">
              <div className="bg-gradient-to-r from-[#4ade80] to-[#4ecdc4] brutal-border p-4 rotate-[-0.5deg]">
                <h3 className="text-white">Day {day.day}: {day.title}</h3>
              </div>

              <div className="space-y-4">
                {day.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="brutal-border bg-white p-4 brutal-hover"
                    style={{ transform: `rotate(${[0.5, -0.3, 0.4, -0.5, 0.3, -0.4][index] || 0}deg)` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 brutal-border shrink-0 rotate-3"
                        style={{ backgroundColor: getActivityColor(activity.icon) }}
                      >
                        {getActivityIcon(activity.icon)}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="bg-[#ffe66d] brutal-border px-3 py-1 rotate-[-2deg]">
                                <span className="text-sm">{activity.time}</span>
                              </div>
                              <div className="bg-[#4ecdc4]/20 brutal-border px-2 py-1 text-xs">
                                {activity.duration}
                              </div>
                            </div>
                            <h4 className="mt-2">{activity.title}</h4>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}

        <div className="mt-6 p-4 bg-[#ffe66d]/30 brutal-border rotate-[0.5deg]">
          <p className="text-sm">
            💡 <span>Pro Tip:</span> This itinerary is flexible! Adjust timing based on your energy levels and local conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

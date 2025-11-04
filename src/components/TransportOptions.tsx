import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Plane, Train, Clock, IndianRupee, Zap } from 'lucide-react';
import { useState } from 'react';

interface TransportOptionsProps {
  destination: string;
}

export function TransportOptions({ destination }: TransportOptionsProps) {
  const [activeTab, setActiveTab] = useState('flights');

  // Mock transport data for Indian routes
  const flights = [
    {
      id: 1,
      airline: 'IndiGo',
      flightNumber: '6E 2847',
      departure: '8:30 AM',
      arrival: '11:45 AM',
      duration: '3h 15m',
      stops: 'Non-stop',
      price: 5890,
      class: 'Economy',
      available: 12
    },
    {
      id: 2,
      airline: 'Air India',
      flightNumber: 'AI 1523',
      departure: '2:15 PM',
      arrival: '5:50 PM',
      duration: '3h 35m',
      stops: 'Non-stop',
      price: 4545,
      class: 'Economy',
      available: 8
    },
    {
      id: 3,
      airline: 'SpiceJet',
      flightNumber: 'SG 9201',
      departure: '6:00 PM',
      arrival: '9:30 PM',
      duration: '3h 30m',
      stops: 'Non-stop',
      price: 3899,
      class: 'Economy',
      available: 23
    }
  ];

  const trains = [
    {
      id: 1,
      operator: 'Rajdhani Express',
      trainNumber: '12301',
      departure: '7:00 AM',
      arrival: '1:30 PM',
      duration: '6h 30m',
      stops: '3 stops',
      price: 1850,
      class: '2AC',
      amenities: ['Meals', 'Bedding', 'Charging']
    },
    {
      id: 2,
      operator: 'Shatabdi Express',
      trainNumber: '12009',
      departure: '10:30 AM',
      arrival: '4:15 PM',
      duration: '5h 45m',
      stops: '2 stops',
      price: 1280,
      class: 'CC',
      amenities: ['Meals', 'AC', 'Charging']
    },
    {
      id: 3,
      operator: 'Duronto Express',
      trainNumber: '12213',
      departure: '3:45 PM',
      arrival: '10:30 PM',
      duration: '6h 45m',
      stops: '1 stop',
      price: 2100,
      class: '3AC',
      amenities: ['Meals', 'Bedding']
    }
  ];

  return (
    <div className="bg-white brutal-border brutal-shadow-lg p-6 rotate-[0.3deg]">
      <div className="rotate-[-0.3deg]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#5b8def] p-3 brutal-border rotate-[-2deg]">
            <Plane className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-black">Transportation to {destination}</h2>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveTab('flights')}
            className={`p-4 brutal-border transition-all flex items-center justify-center gap-2 ${
              activeTab === 'flights'
                ? 'bg-black text-white translate-x-[-2px] translate-y-[-2px] shadow-[6px_6px_0px_#1a1a1a]'
                : 'bg-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1a1a1a]'
            }`}
          >
            <Plane className="w-5 h-5" />
            <span className="text-xl">Flights ✈️</span>
          </button>
          <button
            onClick={() => setActiveTab('trains')}
            className={`p-4 brutal-border transition-all flex items-center justify-center gap-2 ${
              activeTab === 'trains'
                ? 'bg-black text-white translate-x-[-2px] translate-y-[-2px] shadow-[6px_6px_0px_#1a1a1a]'
                : 'bg-white hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_#1a1a1a]'
            }`}
          >
            <Train className="w-5 h-5" />
            <span className="text-xl">Trains 🚂</span>
          </button>
        </div>

        {/* Flights */}
        {activeTab === 'flights' && (
          <div className="space-y-4">
            {flights.map((flight, index) => (
              <div
                key={flight.id}
                className="brutal-border bg-white p-6 brutal-hover"
                style={{ transform: `rotate(${[0.5, -0.3, 0.4][index]}deg)` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="mb-1">{flight.airline}</h3>
                    <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                  </div>
                  <div className="bg-[#4ade80] brutal-border px-4 py-2 rotate-[-2deg]">
                    <span className="text-white text-sm">{flight.stops}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Departure */}
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Departure</p>
                    <p className="text-2xl">{flight.departure}</p>
                  </div>

                  {/* Duration */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <p>{flight.duration}</p>
                    </div>
                    <div className="h-1 bg-black mt-2 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#5b8def] brutal-border p-1">
                        <Plane className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Arrival</p>
                    <p className="text-2xl">{flight.arrival}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#ffe66d] brutal-border px-4 py-2 rotate-[2deg]">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-5 h-5" />
                        <span className="text-2xl">{flight.price}</span>
                      </div>
                    </div>
                    <div className="brutal-border px-3 py-1 bg-white text-sm">
                      {flight.class}
                    </div>
                    <span className="text-sm text-gray-600">{flight.available} seats left</span>
                  </div>
                  <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white brutal-border brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#1a1a1a] transition-all">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Trains */}
        {activeTab === 'trains' && (
          <div className="space-y-4">
            {trains.map((train, index) => (
              <div
                key={train.id}
                className="brutal-border bg-white p-6 brutal-hover"
                style={{ transform: `rotate(${[-0.3, 0.5, -0.4][index]}deg)` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="mb-1">{train.operator}</h3>
                    <p className="text-sm text-gray-600">Train #{train.trainNumber}</p>
                  </div>
                  <div className="bg-[#a78bfa] brutal-border px-4 py-2 rotate-2">
                    <span className="text-white text-sm">{train.stops}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {/* Departure */}
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Departure</p>
                    <p className="text-2xl">{train.departure}</p>
                  </div>

                  {/* Duration */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Duration</p>
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="w-4 h-4" />
                      <p>{train.duration}</p>
                    </div>
                    <div className="h-1 bg-black mt-2 relative">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a78bfa] brutal-border p-1">
                        <Train className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Arrival */}
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">Arrival</p>
                    <p className="text-2xl">{train.arrival}</p>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {train.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="brutal-border px-3 py-1 text-sm flex items-center gap-1"
                      style={{
                        backgroundColor: ['#ffe66d', '#4ecdc4', '#ff6b6b'][idx % 3] + '30'
                      }}
                    >
                      <Zap className="w-3 h-3" />
                      {amenity}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#4ade80] brutal-border px-4 py-2 rotate-[-2deg]">
                      <div className="flex items-center gap-1">
                        <IndianRupee className="w-5 h-5 text-white" />
                        <span className="text-2xl text-white">{train.price}</span>
                      </div>
                    </div>
                    <div className="brutal-border px-3 py-1 bg-white text-sm">
                      {train.class}
                    </div>
                  </div>
                  <Button className="bg-[#4ecdc4] hover:bg-[#3db8af] text-white brutal-border brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#1a1a1a] transition-all">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

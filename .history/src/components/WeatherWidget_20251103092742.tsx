import { Cloud, CloudRain, Sun, Wind, Droplets, CloudSnow } from 'lucide-react';

interface WeatherWidgetProps {
  destination: string;
}

export function WeatherWidget({ destination }: WeatherWidgetProps) {
  // Mock weather data for Indian destinations
  const weatherData = {
    current: {
      temp: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      icon: 'partly-cloudy'
    },
    forecast: [
      { day: 'Mon', high: 30, low: 22, condition: 'sunny' },
      { day: 'Tue', high: 29, low: 21, condition: 'partly-cloudy' },
      { day: 'Wed', high: 27, low: 20, condition: 'rainy' },
      { day: 'Thu', high: 28, low: 21, condition: 'partly-cloudy' },
      { day: 'Fri', high: 31, low: 23, condition: 'sunny' },
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-12 h-12 text-[#fbbf24]" />;
      case 'rainy':
        return <CloudRain className="w-12 h-12 text-[#5b8def]" />;
      case 'partly-cloudy':
        return <Cloud className="w-12 h-12 text-[#a8a8a8]" />;
      default:
        return <Sun className="w-12 h-12 text-[#fbbf24]" />;
    }
  };

  return (
    <div className="bg-white brutal-border brutal-shadow-lg p-6 rotate-[0.5deg]">
      <div className="rotate-[-0.5deg]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#5b8def] p-3 brutal-border rotate-[-2deg]">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-black">Weather in {destination}</h2>
        </div>

        {/* Current Weather */}
        <div className="bg-gradient-to-br from-[#5b8def] to-[#4ecdc4] brutal-border p-6 mb-6 rotate-[-0.5deg]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/90 mb-1">Current Temperature</p>
              <div className="flex items-baseline gap-3">
                <span className="text-6xl text-white">{weatherData.current.temp}°C</span>
                <span className="text-white/90 text-xl">{weatherData.current.condition}</span>
              </div>
            </div>
            <div className="bg-white p-4 brutal-border rotate-3">
              {getWeatherIcon(weatherData.current.icon)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white brutal-border p-3 rotate-[1deg]">
              <div className="flex items-center gap-2 mb-1">
                <Droplets className="w-5 h-5 text-[#5b8def]" />
                <p className="text-sm">Humidity</p>
              </div>
              <p className="text-2xl">{weatherData.current.humidity}%</p>
            </div>
            <div className="bg-white brutal-border p-3 rotate-[-1deg]">
              <div className="flex items-center gap-2 mb-1">
                <Wind className="w-5 h-5 text-[#4ecdc4]" />
                <p className="text-sm">Wind Speed</p>
              </div>
              <p className="text-2xl">{weatherData.current.windSpeed} km/h</p>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div>
          <h3 className="mb-4 text-black">5-Day Forecast</h3>
          <div className="grid grid-cols-5 gap-3">
            {weatherData.forecast.map((day, index) => (
              <div
                key={index}
                className={`text-center p-4 brutal-border bg-[${
                  ['#ffe66d', '#4ecdc4', '#ff6b6b', '#a78bfa', '#4ade80'][index]
                }/10] hover:bg-[${
                  ['#ffe66d', '#4ecdc4', '#ff6b6b', '#a78bfa', '#4ade80'][index]
                }]/30 brutal-hover cursor-pointer`}
                style={{
                  backgroundColor: ['#ffe66d', '#4ecdc4', '#ff6b6b', '#a78bfa', '#4ade80'][index] + '20',
                  transform: `rotate(${[-1, 1, -0.5, 0.5, -1][index]}deg)`
                }}
              >
                <p className="mb-3">{day.day}</p>
                <div className="flex justify-center mb-3">
                  {getWeatherIcon(day.condition)}
                </div>
                <p className="text-sm">
                  <span className="text-xl">{day.high}°</span>
                  <span className="text-gray-500 mx-1">/</span>
                  <span className="text-gray-500">{day.low}°</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

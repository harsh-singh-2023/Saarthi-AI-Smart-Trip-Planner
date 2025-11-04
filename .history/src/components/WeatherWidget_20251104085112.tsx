import { Cloud, CloudRain, Sun, Wind, Droplets, CloudSnow } from "lucide-react";
import { useState, useEffect } from "react";

interface WeatherWidgetProps {
  destination: string;
}

// NOTE: In a real app, move this to a .env.local file!
// e.g., process.env.REACT_APP_WEATHERSTACK_KEY
const API_KEY = "f13514295a2cf78576084de0ff6d61a6";
const API_URL = "http://api.weatherstack.com/current";

// Define a type for the API response (based on weatherstack docs)
interface WeatherApiResponse {
  success?: boolean;
  error?: {
    info: string;
  };
  location: {
    name: string;
    country: string;
  };
  current: {
    temperature: number;
    weather_descriptions: string[];
    humidity: number;
    wind_speed: number;
    weather_code: number;
  };
}

export function WeatherWidget({ destination }: WeatherWidgetProps) {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!destination) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      setWeatherData(null);

      try {
        // Use encodeURIComponent to safely handle city names with spaces
        const response = await fetch(
          `${API_URL}?access_key=${API_KEY}&query=${encodeURIComponent(
            destination
          )}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }

        const data: WeatherApiResponse = await response.json();

        // Weatherstack returns a 200 OK even for API errors,
        // so we check for the 'success' flag.
        if (data.success === false) {
          throw new Error(data.error?.info || "An unknown API error occurred.");
        }

        setWeatherData(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [destination]); // Re-run effect when destination changes

  const getWeatherIcon = (conditionString: string) => {
    const condition = (conditionString || "").toLowerCase();

    if (condition.includes("sunny") || condition.includes("clear")) {
      return <Sun className="w-12 h-12 text-[#fbbf24]" />;
    }
    if (
      condition.includes("rain") ||
      condition.includes("shower") ||
      condition.includes("drizzle")
    ) {
      return <CloudRain className="w-12 h-12 text-[#5b8def]" />;
    }
    if (
      condition.includes("snow") ||
      condition.includes("sleet") ||
      condition.includes("blizzard")
    ) {
      return <CloudSnow className="w-12 h-12 text-[#a8a8a8]" />;
    }
    if (
      condition.includes("cloudy") ||
      condition.includes("overcast") ||
      condition.includes("partly cloudy")
    ) {
      return <Cloud className="w-12 h-12 text-[#a8a8a8]" />;
    }

    // Default icon
    return <Sun className="w-12 h-12 text-[#fbbf24]" />;
  };

  return (
    <div className="bg-white brutal-border brutal-shadow-lg p-6 rotate-[0.5deg] w-full max-w-md mx-auto">
      <div className="rotate-[-0.5deg]">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#5b8def] p-3 brutal-border rotate-[-2deg]">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-black text-xl font-bold">
            {/* Show the location name from API if available */}
            Weather in {weatherData ? weatherData.location.name : destination}
          </h2>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center p-6">
            <p className="text-lg font-medium animate-pulse">
              Loading weather...
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border-2 border-red-700 text-red-700 p-4 brutal-border rotate-[-1deg]">
            <p className="font-bold">Error!</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* --- Current Weather --- */}
        {/* Only show this block if we have data, are not loading, and have no error */}
        {weatherData && !loading && !error && (
          <div className="bg-gradient-to-br from-[#5b8def] to-[#4ecdc4] brutal-border p-6 mb-6 rotate-[-0.5deg]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/90 mb-1">Current Temperature</p>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <span className="text-6xl text-white">
                    {weatherData.current.temperature}°C
                  </span>
                  <span className="text-white/90 text-xl">
                    {weatherData.current.weather_descriptions[0]}
                  </span>
                </div>
              </div>
              <div className="bg-white p-4 brutal-border rotate-3">
                {getWeatherIcon(weatherData.current.weather_descriptions[0])}
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
                <p className="text-2xl">
                  {weatherData.current.wind_speed} km/h
                </p>
              </div>
            </div>
          </div>
        )}

        {/* --- 5-Day Forecast Removed ---
          This section was removed because the free weatherstack.com API
          only provides *current* weather data, not a forecast.
        */}
      </div>
    </div>
  );
}

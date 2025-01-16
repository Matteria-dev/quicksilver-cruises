import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';
import { Container } from './container';
import { Card } from '@/components/card';

const CAIRNS_LAT = -16.9203;
const CAIRNS_LONG = 145.7710;

interface WeatherForecastProps {
  apiKey: string;
}

interface Forecast {
  list: Array<{
    dt: number;
    main: {
      temp_max: number;
      temp_min: number;
      humidity: number;
    };
    weather: Array<{
      icon: string;
      description: string;
    }>;
  }>;
}

const WeatherForecast = ({ apiKey }: WeatherForecastProps) => {
  const [forecast, setForecast] = useState<Forecast | null>(null);
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch current weather
        const currentResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${CAIRNS_LAT}&lon=${CAIRNS_LONG}&appid=${apiKey}&units=metric`
        );
        const currentData = await currentResponse.json();
        
        if (currentData.cod !== 200) {
          throw new Error(currentData.message);
        }
        
        setCurrentWeather(currentData);

        // Fetch 5-day forecast
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${CAIRNS_LAT}&lon=${CAIRNS_LONG}&appid=${apiKey}&units=metric`
        );
        const forecastData = await forecastResponse.json();
        
        if (forecastData.cod !== '200') {
          throw new Error(forecastData.message);
        }
        
        setForecast(forecastData);
      } catch (err) {
        
        console.error('Weather fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (apiKey) {
      fetchWeatherData();
    }
  }, [apiKey]);

  const getWeatherIcon = (weatherCode: any) => {
    switch (weatherCode) {
      case '01d':
      case '01n':
        return <Sun className="size-8 text-yellow-400" />;
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return <Cloud className="size-8 text-gray-400" />;
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return <CloudRain className="size-8 text-blue-400" />;
      default:
        return <Cloud className="size-8 text-gray-400" />;
    }
  };

  if (loading) return <div className="flex justify-center p-8">Loading weather data...</div>;
  if (error) return <div className="flex justify-center p-8 text-red-500">{error}</div>;
  if (!currentWeather || !forecast) return null;

  // Get unique days from forecast data
  const dailyForecasts = forecast.list.reduce((acc: { [x: string]: any; }, item: { dt: number; }) => {
    const date = new Date(item.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {});

  return (
    <Container>
      <div className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Weather Forecast for Cairns</h2>
        
        {/* Current Weather */}
        <Card className="mb-8 p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Current Weather</h3>
          </div>
          <div className="flex items-center gap-4">
            {currentWeather.weather && currentWeather.weather[0] && 
              getWeatherIcon(currentWeather.weather[0].icon)}
            <div>
              <div className="text-4xl font-bold">
                {Math.round(currentWeather.main.temp)}°C
              </div>
              <div className="text-gray-600">
                {currentWeather.weather[0].description}
              </div>
            </div>
            <div className="ml-8 space-y-2">
              <div className="flex items-center gap-2">
                <Thermometer className="size-5 text-gray-500" />
                <span>Feels like {Math.round(currentWeather.main.feels_like)}°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="size-5 text-gray-500" />
                <span>Wind {Math.round(currentWeather.wind.speed * 3.6)} km/h</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="size-5 text-gray-500" />
                <span>Humidity {currentWeather.main.humidity}%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Daily Forecast */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.values(dailyForecasts).map((day) => (
            <Card key={day.dt} className="p-4">
              <div className="text-center">
                <div className="font-medium mb-2">
                  {new Date(day.dt * 1000).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                {getWeatherIcon(day.weather[0].icon)}
                <div className="mt-2">
                  <span className="text-2xl font-bold">{Math.round(day.main.temp_max)}°</span>
                  <span className="text-gray-500 ml-2">{Math.round(day.main.temp_min)}°</span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1 text-sm text-gray-600">
                  <Droplets className="size-4" />
                  {day.main.humidity}%
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  {day.weather[0].description}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Map */}
        <Card className="mt-8 p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">Location Map</h3>
          </div>
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.openstreetmap.org/export/embed.html?bbox=${CAIRNS_LONG-0.1}%2C${CAIRNS_LAT-0.1}%2C${CAIRNS_LONG+0.1}%2C${CAIRNS_LAT+0.1}&layer=mapnik&marker=${CAIRNS_LAT}%2C${CAIRNS_LONG}`}
              allowFullScreen
            />
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default WeatherForecast;
'use client'
import WeatherForecast from '@/components/weather';
import { InfoHero } from '@/components/info-hero';

export default function WeatherPage() {
  return (
    <main>
      <InfoHero 
        eyebrow="Weather Forecast"
        title="Plan Your Perfect Day"
        description="Check the latest weather conditions and forecast for your visit to Cairns"
        imageSrc="/activities/heli-tour.webp"
        imageAlt="Aerial view of Cairns"
      />
     {/* <WeatherForecast apiKey={process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY} />*/}
    </main>
  );
}
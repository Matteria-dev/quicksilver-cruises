import React from 'react';
import { Container } from './container';
import { Heading } from './text';
import clsx from 'clsx';
import Image from 'next/image'  
const timeline = [
    {
      time: "9:15am",
      title: "Check In",
      description: "Check in at the Quicksilver reservations counter to receive your boarding pass.",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "9:30am",
      title: "Boarding",
      description: "After checking in, board the vessel and enjoy the complimentary morning tea/coffee on boarding. For your safety, hot drinks are not served once the vessel is underway. Pasengers are required to be onboard the vessel 15 minutes before departure (10am).",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "10:00am",
      title: "Departure",
      description: "Choose to sit in the air-conditioned cabins, or on the outside decks as our wavepiercer departs the Port Douglas Marina for the Outer Barrier Reef.",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "10:30am",
      title: "Presentation",
      description: "A marine biology presentation is shown on the vessel monitors 30 minutes after departure. A snorkelling demonstration will follow. If you're participating in scuba diving or helmet diving, you'll have a 30 mintue briefing with the dive crew in readiness for your dive.",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "11:30am",
      title: "Outer Barrier Reef",
      description: "Swim and snorkel from the activity platform. Underwater observatory open for coral and fish viewing. Semi-subs depart every 15 minutes from the rear of the platform. Pre-booked guided snorkel, scuba and helmet diving, and scenic helicopter flights commence as scheduled. Fish feed presentation is conducted in the snorkel area.",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "12:00pm - 1:30pm",
      title: "Lunch Served",
      description: "Lunch [included in the fare] is served. Enjoy a hot and cold tropical buffet, containing fresh prawns, pastas, meats, salads and fruit. There are full bar facilities available where you can purchase drinks.",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "3:00pm",
      title: "Return",
      description: "Depart Agincourt Reef for Port Douglas. Chat with the marine biologists, enjoy the reef video and even the photographer’s photos of the day on the homeward journey.",
      image: "/activities/heli-tour.webp"
    },
    {
      time: "4:30pm",
      title: "Arrival",
      description: "Arrive at Port Douglas Marina",
      image: "/activities/heli-tour.webp"
    },
  ]

  function TimelineItem({ item, index }: { item: any; index: number }) {
    return (
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Timeline line and dot */}
        <div className="absolute left-0 lg:left-1/2 h-[calc(200%-30rem)] w-0.5 hidden lg:block">
          <div className="absolute h-full w-0.5 bg-gradient-to-b from-blue-200 to-teal-200" />
          <div className="absolute mt-5 -left-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-200 to-teal-200" /> {/* Adjusted position */}
        </div>
  
        {/* Content container with alternating layout */}
        <div className={`relative ${index % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
          <div className="p-6 bg-blue-100/10 dark:bg-dark-300 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Text Container - aligned consistently */}
            <div className={`mb-4 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
              <div className={`inline-flex items-center gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                  {item.time}
                </div>
                <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-200">{item.title}</h3>
              </div>
              
              <p className="text-blue-500 dark:text-grey-200 my-6">{item.description}</p>
            </div>
            
            <div className="overflow-hidden rounded-xl group relative">
              <Image 
                src={item.image} 
                alt={item.title}
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                            width={500}
                            height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export function Timeline() {
    return (
      <div className="py-24 overflow-hidden">
        <Container>
          <div>
            <Heading as="h3" className="mt-2 max-w-3xl text-blue-500 dark:text-blue-300">
              Your Day
            </Heading>
          </div>
  
          <div className="relative mt-20">
            {/* Removed space-y-32 to allow for custom positioning */}
            {timeline.map((item, index) => (
  <div
    key={index}
    className={clsx(
      'relative',
      // Start with no margin on mobile
      index !== 0 && [
        'mt-10', // Mobile default
        'sm:mt-12', // Small screens
        'md:mt-12', // Medium screens
        'lg:-mt-40' // Large screens with overlap
      ]
    )}
  >
    <TimelineItem item={item} index={index} />
  </div>
))}
          </div>
        </Container>
      </div>
    );
  }
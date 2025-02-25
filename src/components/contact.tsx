import { ComputerDesktopIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/outline'
import { Location } from './location'
export default function Contact() {
  return (
    <div className="relative isolate">
        
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      
        <div className="relative pb-20 lg:static  bg-blue-100/10 pl-16 rounded-2xl">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            
           
            <h3 className="text-pretty mt-10 text-2xl font-semibold tracking-tight text-blue-200 sm:text-3xl">
                    Reservations & Sales</h3>
            <dl className=" space-y-4 text-base/7 text-blue-500 dark:text-grey-200">
            <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                </dt>
                <dd>
                  <a href="mailto:reservations@quicksilver-cruises.com" className="hover:text-grey-500 dark:hover:text-blue-200">
                  reservations@quicksilver-cruises.com
                  </a>
                </dd>
              </div>
              <h4 className="text-pretty pt-10 text-2xl tracking-tight text-blue-300 sm:text-2xl">
                    Other enquiries</h4>
              <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-200 sm:text-3xl">
              Marketing & Media Enquiries</h3>
                    <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                </dt>
                <dd>
                  <a href="mailto:reservations@quicksilver-cruises.com" className="hover:text-grey-500 dark:hover:text-blue-200">
                  reservations@quicksilver-cruises.com
                  </a>
                </dd>
              </div>
              <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-200 sm:text-3xl">
              Charters & Business Events
              </h3>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <ComputerDesktopIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                </dt>
                <dd>
                  <a href="https://www.reefevents.com.au" className="hover:text-grey-500 dark:hover:text-blue-200">
                  reefevents.com.au
                  </a>
                </dd>
              </div>
              <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-200 sm:text-3xl">
              Employment opportunities

              </h3>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <ComputerDesktopIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                </dt>
                <dd>
                  <a href="https://www.quicksilvergroup.com.au" className="hover:text-grey-500 dark:hover:text-blue-200">
                  quicksilvergroup.com.au
                  </a>
                </dd>
              </div>
              <h3 className="text-pretty text-2xl font-semibold tracking-tight text-blue-200 sm:text-3xl">
              Address

              </h3>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <MapIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                </dt>
                <dd>
                  <a href="mailto:reservations@quicksilver-cruises.com" className="hover:text-grey-500 dark:hover:text-blue-200">
                  44 Wharf Street, Port Douglas, Queensland. 4877 Australia
                  </a>
                </dd>
                
              </div>
              <div className="h-96 item-center">
                <iframe className='rounded-2xl'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.176261774479!2d145.46665661486932!3d-16.484423588611373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6982a046e942aa7f%3A0xf00eef26260b9b0!2sCrystalbrook%20Superyacht%20Marina!5e0!3m2!1sen!2sau!4v1645151848693!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </dl>
          </div>
        </div>
        
        <form action="#" method="POST" className="px-6 pb-24  sm:pb-32 lg:px-8 ">
        <h2 className="text-pretty mt-10 text-4xl font-semibold tracking-tight text-blue-300 sm:text-5xl">
            Contact our Reservations Team for booking and travel enquiries
            </h2>
            <p className="mt-6 text-lg/8 text-sm text-blue-500 dark:text-grey-200">
            Please feel free to contact us using the form below, or, alternatively you can reach us by phone on: +61(0)7 4087 2100. If you want to book online, please click here.
            </p>
          <div className="mx-auto max-w-xl mt-20 lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-blue-400 dark:text-blue-200">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-blue-500 dark:text-grey-200 dark:bg-dark-300 shadow-xs ring-1 ring-inset ring-grey-200 dark:ring-dark-400 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-blue-400 dark:text-blue-200">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-blue-500 dark:text-grey-200 dark:bg-dark-300 shadow-xs ring-1 ring-inset ring-grey-200 dark:ring-dark-400 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-blue-400 dark:text-blue-200">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-blue-500 dark:text-grey-200 dark:bg-dark-300 shadow-xs ring-1 ring-inset ring-grey-200 dark:ring-dark-400 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-blue-400 dark:text-blue-200">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-blue-500 dark:text-grey-200 dark:bg-dark-300 shadow-xs ring-1 ring-inset ring-grey-200 dark:ring-dark-400 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-blue-400 dark:text-blue-200">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-blue-500 dark:text-grey-200 dark:bg-dark-300 shadow-xs ring-1 ring-inset ring-grey-200 dark:ring-dark-400 placeholder:text-grey-400 focus:ring-2 focus:ring-inset focus:ring-blue-100 sm:text-sm/6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-grey-200 dark:bg-dark-200 px-3.5 py-2.5 text-center text-sm font-semibold text-blue-500 dark:text-grey-200 shadow-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
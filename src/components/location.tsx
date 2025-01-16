import { Container } from "./container"
import { Card } from "./card"
import {
    Clock,
    Compass,
  } from 'lucide-react'
  
export function Location() {
    return (
      <div className="mt-24">
        <Container>
          <Card className='border-0'>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-blue-300">
                  Getting There
                </h2>
                <p className="mb-6 text-blue-500 dark:text-grey-200">
                  <b className="text-blue-400">
                    From Cairns and Northern Beaches:
                  </b>
                  <br></br>Our luxury air-conditioned coaches tour Cairns and
                  Northern Beaches passengers along one of Australia’s most
                  beautiful scenic coastal drives with a full commentary. A
                  pick-up service is available from your accommodation. Times will
                  be advised upon confirmation of booking.<br></br>
                  <br></br>
                  <b className="text-blue-400">From Port Douglas:</b>
                  <br></br>Coach Transfers are available from your accommodation.
                  Specific hotel transfer times will be advised at confirmation of
                  booking.<br></br>
                  <br></br>
                  <b className="text-blue-400">Making your own way:</b>
                  <br></br>Check in time is 9.15am at the Quicksilver office, at
                  the Port Douglas Marina on Wharf Street, Port Douglas. Parking
                  is available free of charge at the Marina.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-500 dark:text-grey-200">
                      Check-in opens at 7:15 AM
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Compass className="h-5 w-5 text-blue-400" />
                    <span className="text-blue-500 dark:text-grey-200">
                      44 Wharf St, Port Douglas QLD 4877
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-96">
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
            </div>
          </Card>
        </Container>
      </div>
    )
  }
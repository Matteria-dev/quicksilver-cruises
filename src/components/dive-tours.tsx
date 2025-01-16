import { Button } from './button'
import { Container } from './container'
import { clsx } from 'clsx'
import { AlertCircle } from 'lucide-react'
import { Card } from './card'
import { Tab } from '@headlessui/react'
import Image from 'next/image'

export function TermsAccordion() {
    const tabs = [
      {

        name: 'General Safety Information',
        content: (
          <div className="space-y-4 text-blue-500 dark:text-grey-200 text-base">
                <h3 className="text-2xl font-medium tracking-tight text-blue-400 dark:text-blue-200" >Taking The Plunge – General Safety Information on Scuba Diving</h3>
            
            <div>
              <span className="font-semibold">At a glance: </span> The following information is provided as a guide only.
            </div>
            
            <div>
              <span className="font-semibold">Medical Conditions:</span> Some medical conditions may prevent you from diving. If concerned, please consult your doctor. Minimum age for all diving activities is 12 years.
            </div>
            <div>
              <span className="font-semibold">Certified Diving:</span> Evidence of dive certification and medical fitness to dive is required from all divers.
            </div>
            <div>
              <span className="font-semibold">Introductory Divers:</span> Subject to medical questionnaire.
            </div>
            <div>
              <span className="font-semibold">Flying after diving:</span> If only one dive is undertaken, a minimum of 12 hours is recommended before ascending to an altitude of 300 metres or greater. If multiple dives are undertaken, a minimum of 24 hours is recommended.
            </div>
            <div>
              <p className="font-semibold mb-2">Conditions</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Children 4-14 years.</li>
                <li>Children under 3 years free of charge.</li>
                <li>Family fare – maximum of 2 adults and 2 children of the same family. Normal 
                fare applies for additional children. Not applicable with any other discount.</li>
              </ul>
            </div>
            
          </div>
        )
      },
      {
        name: 'Dive Medicals',
        content: (
            <div className="space-y-4 text-blue-500 dark:text-grey-200 text-base">
                <h3 className="text-2xl font-medium tracking-tight text-blue-400 dark:text-blue-200" >Dive Medical Information</h3>
              
              <div>
             When diving in Australia there are different regulations and requirements compared to those in other countries.<br></br><span className="font-semibold">The following rules apply in Queensland:</span> 
              </div>
              
              <div>
                <span className="font-semibold">Introductory or Resort Dives:</span> You will need to fill in a Medical Questionnaire. If answering YES to any question it will not necessarily disqualify you from diving, but will indicate the need for a medical assessment by a qualified physician prior to diving that conforms to Australian Medical Standard AS4005-1.
              </div>
              <div>
                <span className="font-semibold">Experienced / Certified Diving:</span> Prior to diving, you may be asked to fill out a Medical Questionnair; this is not a legal requirement, but is done in your own best interests.
              </div>
              <div>
              The purpose of the questionnaire is to determine whether you should be examined by a doctor. There may be a pre-existing condition that has not stopped you from diving in your own country, but Australian laws do not allow; or perhaps there could be a new condition developed since you became qualified to dive which may well affect your safety while diving.
              </div>
              <div>
              If you answer YES to any of the conditions listed on the Medical Questionnaire, we recommend you see a physician for further assessment in order to scuba dive. It is best to visit a physician whilst in Australia, as this medical will comply with Australian Standards (AS4005.1).
              </div>
              <div>
              Scuba diving is an exciting and demanding activity. To scuba dive safely, you must not be extremely overweight or out of condition. Diving can be strenuous under certain conditions. Your respiratory and circulatory systems must be in good health. All body spaces must be normal and healthy. A person with heart trouble, a current cold or congestion, epilepsy, asthma, a severe medical problem, or is who under the influence of alcohol or drugs, should not dive. If taking medication, consult your doctor before taking part in this program.
              </div>
                <h3 className="text-2xl pt-5 font-medium tracking-tight text-blue-400 dark:text-blue-200" >Dive Medical Questionnaire</h3>
              <div>
              The purpose of this Medical Questionnaire is to find out if you should be examined by a physician before participating in recreational diving. A positive response to a question does not necessarily disqualify you from diving. A positive response means there is a preexisting condition that may affect your safety while diving and you must seek the advice of a physician.
              </div>
              <div>
              Please answer the following questions on your past and present with a YES or NO. If you are not sure, answer YES. If any of these items apply to you, we must request that you consult with a physician prior to participating in scuba diving. Your instructor will supply you with a PADI Medical Statement and Guidelines for Recreational Scuba Diver’s Physical Examination to take to a physician.
              </div>
              <div>
                <span className="font-semibold">Have you fuffered from, or do you now suffer from any of the following:</span>
              </div>
              <div>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Asthma or wheezing</li>
                  <li>Fainting, seizures or blackouts</li>
                  <li>Chronic Bronchitis or persistent chest complaints</li>
                  <li>Chronic sinus conditions</li>
                  <li>Chest surgery</li>
                  <li>Recurrent ear problems when flying</li>
                  <li>Epilepsy</li>
                  <li>Diabetes Mellitus (sugar diabetes)</li>
                  <li>Tuberculosis or other long-term lung disease</li>
                  <li>Brain, spinal cord or nervous disorder</li>
                  <li>Heart disease of any kind</li>
                  <li>Collapsed lung (pneumothorax)</li>
                  <li>Ear Surgery</li>
                  <li>Breathlessness</li>
                  <li>Chronic Ear Discharge or infection</li>
                  <li>High Blood Pressure</li>
                  <li>Perforated eardrum</li>
                  <li>Other illness or operation within the last month</li>
                  <li>Are you currently taking any medicine or drug (excluding oral contraceptives)?</li>
                  <li>Have you ingested any alcohol within the last 8 hours prior to diving?</li>
                  <li>Are you pregnant?</li>
                  <li>Do you understand that any concealment of any condition incompatible with safe diving might put your health or life at risk?</li>
                  <li>Do you understand that you should not go to altitude (fly) within 12 hours of completing a single dive or a minimum of 18 hours when doing multiple dives (recommended 24 hours)?</li>
                  
                </ul>
              </div>
              
            </div>
          )
      },
      {
        name: 'Diving Safely',
        content: (
            <div className="space-y-4 text-blue-500 dark:text-grey-200 text-base">
                <h3 className="text-2xl font-medium tracking-tight text-blue-400 dark:text-blue-200" >General Fitness</h3>
              
              <div>
             Divers should have a reasonable level of physical fitness to cope with the environmental stresses of being underwater. The environmental factors that place a physiological strain on the diver include:
              </div>
              <ul className="list-disc pl-5 space-y-1">
                  <li>Exertion required for propulstion through the surrounding water</li>
                  <li>Heat loss to water that is generally colder than body temperature</li>
                  <li>Breathing gas of compressed density</li>
                  <li>Changes in the cardiorespiratory system from using underwater breathing gear</li>
                  <li>Changes in the gas volume and pressure within air spaces in the body e.g.: ears, stomach etc.</li>
                  <li>Introduction into the body of gases that can have toxic, narcotic, stimulatory or gas solubility effects on bodily functions.</li>
                  <li>The human body, in reasonable condition and without injury or illness, can deal with the effects of most of these factors.</li>
            
            </ul>
                <h3 className="text-2xl  pt-5 font-medium tracking-tight text-blue-400 dark:text-blue-200" >Flying after Diving</h3>
              <div>
              The pressure of diving causes nitrogen to go into solution in the blood, and it is the decrease in pressure as the diver returns to the surface that causes this nitrogen to come back out of solution over time and to bubble. A rapid ascent to the surface can cause complications as it represents too fast a transition across a pressure gradient for the body to effectively compensate for. Ascending to a high altitude after the dive is simply a continuation of your post-dive ascent to the surface and can also lead to decompression sickness.
              </div>
              <div>
              It’s recommended that you should wait at least 12 hours after a single dive, or 24 hours after multiple dives within the no-decompression limits before you travel to more than 300m (or 1,000 feet) above sea level. Bear in mind that driving over a mountain range would also put you over this suggested altitude limit.
              </div>
                <h3 className="text-2xl pt-5 font-medium tracking-tight text-blue-400 dark:text-blue-200" >Alcohol</h3>
              <ul className="list-disc pl-5 space-y-1">
                  <li>Reaction time</li>
                  <li>Visual tracking performance</li>
                  <li>Concentrated attention</li>
                  <li>Ability to process information in divided attention tasks</li>
                  <li>Perception (Judgment)</li>
                  <li>The execution of psychomotor tasks.</li>
                  
            </ul>
              <div>
              Alcohol also cause dehydration which is considered to be one of the prime causes of decompression illness. Do not consume alcohol before diving or water activities.
              </div>
              
              
            </div>
          )
      }
    ]
  
    return (
      <Card>
        <Tab.Group>
          <Tab.List className="flex border-b border-grey-200 dark:border-dark-400">
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  clsx(
                    'px-6 py-4 text-sm font-medium focus:outline-none',
                    selected
                      ? 'text-blue-400 border-b-2 border-blue-400 -mb-px dark:text-blue-200'
                      : 'text-blue-500 hover:text-blue-400 dark:text-grey-200'
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {tabs.map((tab) => (
              <Tab.Panel
                key={tab.name}
                className="p-6 focus:outline-none text-xs dark:text-grey-200"
              >
                {tab.content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Card>
    )
  }

function DiveInfoBox({ title, items }: { title: string; items: string[] }) {
  return (
      <div className="mt-8 rounded-2xl overflow-hidden shadow-sm bg-blue-100/20 dark:bg-blue-200">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="h-6 w-6 text-blue-300 dark:text-blue-400" />
          <h3 className="text-2xl font-medium tracking-tight text-blue-400">
            {title}
          </h3>
        </div>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex gap-x-3 text-blue-500">
              <svg 
                className="mt-1 h-5 w-5 flex-none text-blue-200" 
                viewBox="0 0 20 20" 
                fill="currentColor"
                aria-hidden="true"
              >
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function TourCard({ image, title, description, features, variant = 'default' }: {
  image?: string;
  title: string;
  description: string;
  features: string[];
  variant?: 'default' | 'highlighted';
}) {
  return (
    <div className={clsx(
      'relative rounded-2xl overflow-hidden flex flex-col',
      'ring-1 ring-grey-500/5 shadow-sm',
        variant === 'highlighted' ? 'bg-blue-300/20 dark:bg-blue-500' : 'bg-grey-200 dark:bg-dark-300',
    )}>
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
                      className="absolute inset-0 h-full w-full object-cover"
                      width={800}
                      height={500}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
        </div>
      )}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex-1">
                  <h3 className={clsx(
                      "text-2xl font-medium tracking-tight text-grey-500 dark:text-blue-100",
                      variant === 'highlighted' ? 'dark:text-blue-100' : 'dark:text-blue-300')}>
            {title}
          </h3>
                  <p className={clsx(
                      "mt-2 text-base text-grey-400",
                      variant === 'highlighted' ? 'dark:text-blue-200' : 'dark:text-blue-400')}>
            {description}
          </p>
          
          <ul className="mt-8 space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex gap-x-3 text-grey-400 dark:text-grey-200">
                <svg 
                  className="mt-1 h-5 w-5 flex-none text-blue-300" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 pt-8 border-t border-grey-500/10">
                  <Button variant="primary" href="#pricing" className={clsx(
                      "w-full dark:hover:bg-dark-400",
                      variant === 'highlighted' ? 'dark:text-blue-200' : 'dark:text-blue-400')}>
                      View Pricing
                  </Button>
        </div>
      </div>
    </div>
  )
}

export function DiveTours() {
  const introTour = {
    image: "/activities/heli-tour.webp",
    title: "Introductory Scuba Diving",
    description: "No experience is necessary to experience this amazing underwater world with an introductory scuba dive. If you've never dived before, and would like to, Quicksilver offers introductory dives with a highly qualified dive instructor.",
    features: [
      "Suitable for beginners and first time divers",
      "Must be 12 years or over",
      "30 minute dive briefing included",
      "All equipment provided including wetsuits",
      "Prescription masks available if required",
      "Multi-lingual diving instructors available"
    ]
  }

  const certifiedTour = {
    image: "/activities/snorkel.webp",
    title: "Certified Scuba Diving",
    description: "Certified diving at the edge of Australia's continental shelf is simply spectacular. Enjoy up to two spectacular dives lasting approximately 40 minutes – the ultimate experience at Agincourt Reef where visibility is excellent and the variety of marine life is exceptional.",
    features: [
      "Up to two 40-minute dives",
      "Professional instructors accompany all dives",
      "All equipment included",
      "Excellent visibility conditions",
      "Must possess international SCUBA certification",
      "Suitable for diving with non-diving companions"
    ]
  }

  const introSteps = [
    "Specially designed dive platform for easy water entry",
    "Briefing and basic dive skills taught on journey to reef",
    "Quick water drills to ensure comfort",
    "Maximum 4 divers per instructor",
    "Approximately 30-minute dive duration",
    "Certificate of completion provided"
  ]

  return (
    <section>
      <Container className='px-0 lg:px-0'>
        <div className="flex items-center gap-3 mb-4">
          <Button variant="secondary" className="bg-teal-100 data-[hover]:bg-teal-100 data-[hover]:text-blue-500 text-teal-700 border-teal-200">
            Optional Activity
          </Button>
        </div>
        
        <div className="relative">
          <div className="flex justify-between items-start gap-6 -mb-4">
            <h2 className="dark:blue-200 text-4xl font-bold tracking-tight text-blue-300">
              Scuba Diving Adventures
            </h2>
            
            <div className="relative shrink-0 h-20  pb-4">
              <Image 
                src="/logo/padi.webp" 
                alt="PADI Certification Logo"
                              className="w-full h-full object-contain" 
                              width={200}
                              height={100}
              />
            </div>
          </div>
        </div>
        
        <div className="mx-auto mt-4 max-w-5xl grid gap-8 lg:grid-cols-2">
          <TourCard {...introTour} />
          <TourCard {...certifiedTour} variant="highlighted" />
        </div>

        <DiveInfoBox 
          title="What's Involved in Introductory Diving" 
          items={introSteps}
        />
        <section id="overview" className="pb-8" />
        <TermsAccordion />
      </Container>
    </section>
  )
}
'use client'
import { Button } from '@/components/button'
import
    {
        Dialog,
        DialogPanel,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
    } from '@headlessui/react'
import
    {
        ChevronDownIcon,
        PhoneIcon,
        PlayCircleIcon,
    } from '@heroicons/react/20/solid'
import
    {
        ArrowPathIcon,
        Bars3Icon,
        ChartPieIcon,
        CursorArrowRaysIcon,
        FingerPrintIcon,
        SquaresPlusIcon,
        XMarkIcon,
    } from '@heroicons/react/24/outline'
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { ThemeToggle } from './theme-toggle'
import clsx from 'clsx'
import Image from 'next/image'

const experiences = [
    {
        name: 'Outer Reef',
        description: 'Experience of a lifetime',
        href: '/outer-reef',
        icon: ChartPieIcon,
    },
    {
        name: 'Quicksilver Platform',
        description: 'Spacious Floating Platform',
        href: '/platform',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Underwater Observatory',
        description: 'View the reef and marine life',
        href: '/activity/underwater-observatory',
        icon: FingerPrintIcon,
    },
    {
        name: 'Scenic Helicopter Flights',
        description:
            'See the expanse of the Great Barrier Reef with Nautilus Aviation',
        href: '/activity/helicopter-flights',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Snorkelling',
        description: 'Snorkel the Reef',
        href: '/activity/snorkelling',
        icon: ArrowPathIcon,
    },
    {
        name: 'Scuba Diving',
        description: 'Swim with the fishes!',
        href: '/activity/diving',
        icon: ChartPieIcon,
    },
    {
        name: 'Ocean Walker',
        description: 'Walk the seafloor',
        href: '/activity/ocean-walker',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Semi - Submersible',
        description: 'Tour the Reef',
        href: '/activity/semi-submersible',
        icon: FingerPrintIcon,
    },
]
const callsToAction = [
    { name: 'Watch demo', href: '/#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '/#', icon: PhoneIcon },
]

const information = [
    {
        name: 'Great Barrier Reef',
        description: 'About the Reef',
        href: '/information/gbr',
        icon: ChartPieIcon,
    },
    {
        name: 'FAQ',
        description: 'Frequently Asked Questions',
        href: '/information/faq',
        icon: ChartPieIcon,
    },
    {
        name: 'Port Douglas',
        description: 'The Tropical Destination',
        href: '/information/port-douglas',
        icon: ChartPieIcon,
    },
    {
        name: 'Weather Forecast',
        description: 'Plan your Trip',
        href: '/information/weather',
        icon: ChartPieIcon,
    },
    {
        name: 'For Families',
        description: 'Things To Do',
        href: '/information/family',
        icon: ChartPieIcon,
    },
    {
        name: 'Vessels',
        description: 'Details About Our Vessels',
        href: '/information/vessels',
        icon: ChartPieIcon,
    },
    {
        name: 'Accessibility',
        description: 'Our Commitment',
        href: '/information/accessibility',
        icon: ChartPieIcon,
    },
    {
        name: 'Reef Restoration Project',
        description: 'How We Help',
        href: '/information/reef-restoration',
        icon: ChartPieIcon,
    },
    {
        name: 'Environmental Stewardship',
        description: 'Giving Back to the Environment',
        href: '/information/environment',
        icon: ChartPieIcon,
    },
    {
        name: 'Great Barrier Reef Health',
        description: 'How We Care',
        href: '/information/gbr-health',
        icon: ChartPieIcon,
    },
    {
        name: 'Ecotourism',
        description: 'Sustainability Practices',
        href: '/information/ecotourism',
        icon: ChartPieIcon,
    },
    {
        name: 'Reef Biosearch',
        description: 'Our Biologist Division',
        href: '/information/reef-biosearch',
        icon: ChartPieIcon,
    },
    {
        name: 'Climate Action',
        description: 'Climate',
        href: '/information/climate-action',
        icon: ChartPieIcon,
    },
    {
        name: 'Agincourt Reef',
        description: 'Where We Visit',
        href: '/information/agincourt-reef',
        icon: ChartPieIcon,
    },
]

const company = [
    { name: 'About us', href: '/company/about' },
    { name: 'Careers', href: '/company/careers' },
    { name: 'Support', href: '/company/support' },
    { name: 'Press', href: '/company/press' },
    { name: 'Blog', href: '/company/blog' },
]

export default function Navbar()
{
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() =>
    {
        const handleScroll = () =>
        {
            const scrolled = window.scrollY > 0
            const timerId = setTimeout(() =>
            {
                setIsScrolled(scrolled)
            }, 100)

            return () => clearTimeout(timerId)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (

        <div className="fixed inset-x-0 top-0 z-50 ">
            {isScrolled && (
                <div className="-x-4 absolute inset-x-0 h-8 bg-grey-100 dark:bg-dark-400" />
            )}
            <div
                className={`transition-all duration-300 ease-in-out ${isScrolled ? 'lg:px-6 lg:pt-4' : ''
                    }`}
            >
                <div className="fixed inset-x-0 top-0 z-50 flex justify-center">
                    <header
                        className={clsx(
                            isScrolled
                                ? 'w-full max-w-[120rem] bg-gradient-to-r from-blue-200/75 to-teal-200/75 backdrop-blur-md lg:ml-2 lg:mr-2 lg:mt-2  lg:rounded-2xl'
                                : 'w-full bg-grey-100 dark:bg-dark-400 lg:rounded-2xl',
                            'duration-300 ease-in-out'
                        )}
                    >
                        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8 mx-auto max-w-[120rem]">


                            <div className="flex lg:flex-1">
                                <a href="/#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Quicksilver Cruises</span>
                                    <div className="relative h-10 w-40">
                                        <Image
                                            alt="Logo Colour"
                                            src="/logo/quicksilver-cruises-colour.webp"
                                            className={`absolute left-0 top-0 h-10 w-auto transition-opacity duration-300 
                    ${isScrolled ? 'opacity-0' : 'opacity-100'

                                                }`}
                                            width={160}
                                            height={40}
                                        />
                                        <Image
                                            alt="Logo White"
                                            src="/logo/quicksilver-cruises.png"
                                            className={`absolute left-0 top-0 h-10 w-auto transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'
                                                }`}
                                            width={160}
                                            height={40}
                                        />
                                    </div>
                                </a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="flex lg:hidden">
                                <button
                                    type="button"
                                    onClick={() => setMobileMenuOpen(true)}
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-500 dark:text-grey-200"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <Bars3Icon className="size-6 " aria-hidden="true" />
                                </button>
                            </div>

                            {/* Desktop menu */}

                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
                                <PopoverGroup className="mr-8 flex gap-x-8">
                                    <Popover className="relative">
                                        <PopoverButton
                                            className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                                    ? 'text-grey-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                                    : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                                }`}
                                        >
                                            Experiences
                                            <ChevronDownIcon
                                                className={`size-5 flex-none ${isScrolled ? 'text-grey-500' : 'text-grey-400'
                                                    }`}
                                                aria-hidden="true"
                                            />
                                        </PopoverButton>

                                        <PopoverPanel
                                            transition
                                            className="absolute left-1/2 top-full z-10 mt-3 w-screen max-w-2xl -translate-x-1/2 overflow-hidden rounded-3xl bg-grey-200 shadow-lg ring-1 ring-grey-100 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:bg-dark-400 dark:ring-dark-200"
                                        >
                                            {' '}
                                            <div className="grid grid-cols-2 gap-0">
                                                {experiences.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="hover:bg-gray-50 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                                                    >
                                                        <div className="bg-gray-50 group-hover:bg-white flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                                                            <item.icon
                                                                className="size-6 text-grey-500 group-hover:text-blue-300 dark:text-grey-300"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <a
                                                                href={item.href}
                                                                className="block font-semibold text-blue-500 dark:text-blue-200"
                                                            >
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                            <p className="mt-1 text-blue-500 dark:text-grey-300">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverPanel>
                                    </Popover>

                                    <Popover className="relative">
                                        <PopoverButton
                                            className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                                    ? 'text-grey-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                                    : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                                }`}
                                        >
                                            Information
                                            <ChevronDownIcon
                                                className={`size-5 flex-none ${isScrolled ? 'text-grey-500' : 'text-grey-400'
                                                    }`}
                                                aria-hidden="true"
                                            />
                                        </PopoverButton>

                                        <PopoverPanel
                                            transition
                                            className="absolute left-1/2 top-full z-10 mt-3 w-screen max-w-2xl -translate-x-1/2 overflow-hidden rounded-3xl bg-grey-200 shadow-lg ring-1 ring-grey-100 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:bg-dark-400 dark:ring-dark-200"
                                        >
                                            {' '}
                                            <div className="grid grid-cols-2 gap-0">
                                                {information.map((item) => (
                                                    <div
                                                        key={item.name}
                                                        className="hover:bg-gray-50 group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
                                                    >
                                                        <div className="bg-gray-50 group-hover:bg-white flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                                                            <item.icon
                                                                className="size-6 text-grey-500 group-hover:text-blue-300 dark:text-grey-300"
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                        <div className="flex-auto">
                                                            <a
                                                                href={item.href}
                                                                className="block font-semibold text-blue-500 dark:text-blue-200"
                                                            >
                                                                {item.name}
                                                                <span className="absolute inset-0" />
                                                            </a>
                                                            <p className="mt-1 text-blue-500 dark:text-grey-300">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </PopoverPanel>
                                    </Popover>

                                    <Popover className="relative">
                                        <PopoverButton
                                            className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                                    ? 'text-grey-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                                    : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                                }`}
                                        >
                                            Company
                                            <ChevronDownIcon
                                                className={`size-5 flex-none ${isScrolled ? 'text-grey-500' : 'text-grey-400'
                                                    }`}
                                                aria-hidden="true"
                                            />
                                        </PopoverButton>

                                        <PopoverPanel
                                            transition
                                            className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-grey-200 p-2 shadow-lg ring-1 ring-grey-100 backdrop-blur-lg transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in dark:bg-dark-400 dark:ring-dark-200"
                                        >
                                            {company.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-blue-500 hover:bg-blue-400 dark:text-blue-200"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </PopoverPanel>
                                    </Popover>

                                    <a
                                        className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                                ? 'text-grey-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                                : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                            }`}
                                        href='/pricing'
                                    >
                                        Pricing
                                    </a>
                                    <a
                                        className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                                ? 'text-grey-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                                : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                            }`}
                                        href='/contact'
                                    >
                                        Contact
                                    </a>
                                </PopoverGroup>

                                <div className="flex items-center gap-4">
                                    <Button variant="secondary" href="#" className="px-4">
                                        Book Now
                                    </Button>
                                    <ThemeToggle />

                                    <a
                                        href="https://facebook.com"
                                        className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                            ? 'text-blue-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                            : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                            }`}
                                        title="Visit our Facebook page"
                                    >
                                        <FacebookIcon className="size-5" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        className={`flex items-center gap-x-1 text-sm/6 font-semibold ${isScrolled
                                            ? 'text-blue-500 hover:text-blue-400 dark:text-blue-500 dark:hover:text-blue-400'
                                            : 'text-blue-500 hover:text-blue-200 dark:text-grey-300 dark:hover:text-blue-100'
                                            }`}
                                        title="Visit our Instagram page"
                                    >
                                        <InstagramIcon className="size-5" />
                                    </a>
                                </div>
                            </div>
                        </nav>

                        {/* Mobile menu */}
                        <Dialog
                            as="div"
                            className="lg:hidden"
                            open={mobileMenuOpen}
                            onClose={setMobileMenuOpen}
                        >
                            <div className="fixed inset-0 z-50" />
                            <DialogPanel
                                className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto ${isScrolled
                                        ? 'bg-gradient-to-r from-blue-200/75 to-teal-200/75 backdrop-blur-md'
                                        : 'bg-grey-100 dark:bg-dark-400'
                                    } sm:ring-gray-900/10 px-6 py-6 sm:max-w-sm sm:ring-0`}
                                style={{
                                    backgroundSize: '200% 100%',
                                    backgroundPosition: '0% 0%',
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    <a href="#" className="-m-1.5 p-1.5 sm:hidden">
                                        <span className="sr-only">Quicksilver Cruises</span>
                                        <div className="relative h-8 w-auto">
                                            <Image
                                                className="block dark:hidden h-full w-auto"
                                                src="/logo/quicksilver-cruises.webp"
                                                alt="Logo"
                                                width={160}
                                                height={40}
                                            />
                                            <Image
                                                className="hidden dark:block h-full w-auto"
                                                src="/logo/quicksilver-cruises.png"
                                                alt="Logo"
                                                width={160}
                                                height={40}
                                            />
                                        </div>
                                    </a>
                                    <button
                                        type="button"
                                        className="text-blue-500 dark:text-grey-200 -m-2.5 ml-auto rounded-md p-2.5"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="size-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Mobile menu content */}
                                <div className="mt-6 flow-root">
                                    <div className="divide-gray-500/10 -my-6 divide-y">
                                        <div className="space-y-2 py-6">
                                            {/* Mobile menu items */}
                                            <Disclosure as="div" className="-mx-3">
                                                {({ open }) => (
                                                    <>
                                                        <DisclosureButton className="hover:bg-gray-50 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50">
                                                            Experiences
                                                            <ChevronDownIcon
                                                                className={`size-5 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                                                aria-hidden="true"
                                                            />
                                                        </DisclosureButton>
                                                        <DisclosurePanel className="mt-2 space-y-2">
                                                            {experiences.map((item) => (
                                                                <DisclosureButton
                                                                    key={item.name}
                                                                    as="a"
                                                                    href={item.href}
                                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50"
                                                                >
                                                                    {item.name}
                                                                </DisclosureButton>
                                                            ))}
                                                        </DisclosurePanel>
                                                    </>
                                                )}
                                            </Disclosure>

                                            {/* Other mobile menu items */}
                                            <Disclosure as="div" className="-mx-3">
                                                {({ open }) => (
                                                    <>
                                                        <DisclosureButton className="hover:bg-gray-50 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50">
                                                            Information
                                                            <ChevronDownIcon
                                                                className={`size-5 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                                                aria-hidden="true"
                                                            />
                                                        </DisclosureButton>
                                                        <DisclosurePanel className="mt-2 space-y-2">
                                                            {information.map((item) => (
                                                                <DisclosureButton
                                                                    key={item.name}
                                                                    as="a"
                                                                    href={item.href}
                                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50"
                                                                >
                                                                    {item.name}
                                                                </DisclosureButton>
                                                            ))}
                                                        </DisclosurePanel>
                                                    </>
                                                )}
                                            </Disclosure>
                                            <Disclosure as="div" className="-mx-3">
                                                {({ open }) => (
                                                    <>
                                                        <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50">
                                                            Company
                                                            <ChevronDownIcon
                                                                className={`h-5 w-5 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                                                                aria-hidden="true"
                                                            />
                                                        </DisclosureButton>
                                                        <DisclosurePanel className="mt-2 space-y-2">
                                                            {company.map((item) => (
                                                                <DisclosureButton
                                                                    key={item.name}
                                                                    as="a"
                                                                    href={item.href}
                                                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50"
                                                                >
                                                                    {item.name}
                                                                </DisclosureButton>
                                                            ))}
                                                        </DisclosurePanel>
                                                    </>
                                                )}
                                            </Disclosure>
                                            <a
                                                href="/pricing"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50"
                                            >
                                                Pricing
                                            </a>
                                            <a
                                                href="/contact"
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-500 dark:text-grey-200 hover:bg-blue-200/50"
                                            >
                                                Contact
                                            </a>

                                        </div>
                                        <div className="flex flex-col gap-4 py-6">
                                            <Button variant="secondary" href="#" className="w-full">
                                                Book Now
                                            </Button>
                                            <div className="flex justify-center gap-4">
                                                <a
                                                    href="https://facebook.com"
                                                    className="text-blue-500 hover:text-blue-400 dark:text-grey-300 dark:hover:text-blue-100"
                                                    title="Visit our Facebook page"
                                                >
                                                    <FacebookIcon className="size-5" />
                                                </a>
                                                <a
                                                    href="https://instagram.com"
                                                    className="text-blue-500 hover:text-blue-400 dark:text-grey-300 dark:hover:text-blue-100"
                                                    title="Visit our Instagram page"
                                                >
                                                    <InstagramIcon className="size-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Dialog>
                    </header>
                </div>
            </div>
        </div>
    )
}

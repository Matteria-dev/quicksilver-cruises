import Footer from '@/components/footer'
import { InfoHero } from '@/components/info-hero'
import Contact from '@/components/contact'

export default function Blog()
{
    return (
        <div className="overflow-hidden">
            <InfoHero
                eyebrow="Get in touch with us!"
                title="Contact"
                description="Your description"
                imageSrc="/activities/heli-tour.webp"
                imageAlt="Image description"
                showNavbar={false}
            />
            <main>

                <div className="py-24">
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    )
}

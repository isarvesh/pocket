import Head from 'next/head'

import { ActionBanner } from '@/components/ActionBanner'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { FeatureOne } from '@/components/FeatureOne'
import { Reviews } from '@/components/Reviews'
import { FeatureSecond } from '@/components/FeatureSecond'

export default function Home() {
  return (
    <>
      <Head>
        <title>Measured</title>
        <meta name="description" content="An Assignment" />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeatureOne />
        <FeatureSecond />
        <ActionBanner />
        <Reviews />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}

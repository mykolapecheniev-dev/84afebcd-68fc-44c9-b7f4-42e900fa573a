"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Collection",
          id: "products",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Nikla"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain",
      }}
      title="Artistry in Every Petal"
      description="Nikla Studio creates bespoke floral arrangements that capture the essence of every moment. From intimate celebrations to grand events, we bring nature's beauty to life."
      tag="Handcrafted Florals"
      mediaItems={[
        {
          imageSrc: "https://pixabay.com/get/g1ab3a04ecfdeb2a5bd396500472edf0dc3bfcc5aba1a059af310e6f51c9ec5bd619588de38a1beb496233c594d1d4c82627f3b680295dfd68368eddbd2974bc1_1280.jpg",
          imageAlt: "Florist at work",
        },
        {
          imageSrc: "https://pixabay.com/get/g743ec3c8afe8d3873a0d7d52b29f7f3e869febb09074000590e859afdb7e8913f84add8c587a84553fb965662472e4a605221a0c77f33aefb48857ed0fa7718b_1280.jpg",
          imageAlt: "Signature arrangement",
        },
        {
          imageSrc: "https://pixabay.com/get/ge9e2ec3d9dc3ecaf9dd078c24a9dbdd2d57ac2872e23a2335bea9f70d0338de48380d6a9c2546d63a2f7ab94e21bd6c13166abde66decc5a28de8be712642d5b_1280.jpg?_wi=1",
          imageAlt: "Peony bouquet",
        },
        {
          imageSrc: "https://pixabay.com/get/gc051bad48f5ea6df10d287ff34dc2849003f5379c777dae72c5d9042781175ba87be502383d8123736589b046e1215a570ff4a46e6bfa682bd0557080c707eac_1280.jpg?_wi=1",
          imageAlt: "Wildflower arrangement",
        },
        {
          imageSrc: "https://pixabay.com/get/ga942c59cf5dc8766005680a2efdae9106a4d42a545c1c1bf46e14010b90d524594ea3d6a401daa6df15db8edfaabbe5d1da59edf4449f4090a32384237632478_1280.jpg?_wi=1",
          imageAlt: "Botanical display",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Based on 100+ happy clients"
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Our Philosophy"
      buttons={[
        {
          text: "Learn More",
        },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Nikla Signature",
          name: "Peony Romance",
          price: "$85",
          rating: 5,
          reviewCount: "24",
          imageSrc: "https://pixabay.com/get/ge9e2ec3d9dc3ecaf9dd078c24a9dbdd2d57ac2872e23a2335bea9f70d0338de48380d6a9c2546d63a2f7ab94e21bd6c13166abde66decc5a28de8be712642d5b_1280.jpg?_wi=2",
        },
        {
          id: "p2",
          brand: "Nikla Signature",
          name: "Wild Garden",
          price: "$65",
          rating: 5,
          reviewCount: "18",
          imageSrc: "https://pixabay.com/get/gc051bad48f5ea6df10d287ff34dc2849003f5379c777dae72c5d9042781175ba87be502383d8123736589b046e1215a570ff4a46e6bfa682bd0557080c707eac_1280.jpg?_wi=2",
        },
        {
          id: "p3",
          brand: "Nikla Signature",
          name: "Botanical Zen",
          price: "$55",
          rating: 4,
          reviewCount: "32",
          imageSrc: "https://pixabay.com/get/ga942c59cf5dc8766005680a2efdae9106a4d42a545c1c1bf46e14010b90d524594ea3d6a401daa6df15db8edfaabbe5d1da59edf4449f4090a32384237632478_1280.jpg?_wi=2",
        },
      ]}
      title="Signature Arrangements"
      description="Discover our collection of handcrafted bouquets, designed with seasonal blooms."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Elena R.",
          role: "Wedding Client",
          company: "Event Planner",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g54de791f9333717bd7b8cdfe6729ee17c1049e082989985d9d7ab0743f088863e33b2161173e40737c8994b316227cc0f6a3d0a14a75aadf9ad94c592d11b2b0_1280.jpg?_wi=1",
        },
        {
          id: "t2",
          name: "Marcus S.",
          role: "Regular Client",
          company: "Business Owner",
          rating: 5,
          imageSrc: "https://pixabay.com/get/gfd64f5eeb438311700bf1cde82b9f8046f59b15854dfdddf3dbc766bfe330e2ad66cc10e7fa4dcbc2c3e8af8a476ebca8484d25d63602aaa8a7e5137a910d15e_1280.jpg",
        },
        {
          id: "t3",
          name: "Sophia L.",
          role: "Event Client",
          company: "Architect",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g421092c90169e98e5ef81af6c31ff9e6a0c774866b354f4698e4483a7309b1cecb70581b1439e5d6c3dbc7c0d0fed875de01c3ba8cfda732136eddee2a99aa89_1280.jpg",
        },
        {
          id: "t4",
          name: "Julian D.",
          role: "Gifting",
          company: "Creative",
          rating: 5,
          imageSrc: "https://pixabay.com/get/ge15c8f6fa5b7943b16a0a72bdb7a763fa6e179755abed3ad504fdc679af64a7c40eead35ece6e8dfef913f0231aadd8a888dd7aa0054d18f8e67146f03125986_1280.jpg",
        },
        {
          id: "t5",
          name: "Amelia W.",
          role: "Corporate",
          company: "Designer",
          rating: 5,
          imageSrc: "https://pixabay.com/get/g54de791f9333717bd7b8cdfe6729ee17c1049e082989985d9d7ab0743f088863e33b2161173e40737c8994b316227cc0f6a3d0a14a75aadf9ad94c592d11b2b0_1280.jpg?_wi=2",
        },
      ]}
      title="Stories in Bloom"
      description="See why our clients choose Nikla Studio for their special moments."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Get in touch"
      title="Bespoke Floral Consultations"
      description="Planning an event or want a custom arrangement? Let's discuss your floral needs."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Nikla Studio"
      copyrightText="© 2025 Nikla Studio. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

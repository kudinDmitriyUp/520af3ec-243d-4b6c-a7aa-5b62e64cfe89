"use client";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Bed, ChefHat, Dumbbell, Facebook, Heart, Instagram, MessageSquare, Sparkles, Star, Twitter, Waves } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="medium"
      background="gradientBars"
      cardStyle="glass-depth"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandview Hotel"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Grandview Hotel, where exceptional service meets stunning accommodations in the heart of the city."
          tag="Welcome to Excellence"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "https://booking.grandview.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://pixabay.com/get/gd02f995393157572ccbc0494f5198f21baf7bba688d890b4d072bc2805b3ef3b00aaad924ecbc71e6ed29c8eda0b204e14d98c8a3f9b984e13f8dbcdb5ef1dd5_1280.jpg"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Grandview Hotel, we believe hospitality is an art form. For over two decades, we have crafted unforgettable experiences through personalized service, luxurious accommodations, and attention to every detail that makes your stay extraordinary."
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in premium facilities designed to enhance your stay"
          tag="Amenities"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind in our full-service spa featuring massage therapy, wellness treatments, and relaxation facilities",
              icon: Heart
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by world-renowned chefs in our elegant restaurant with panoramic city views",
              icon: ChefHat
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym with modern equipment and personal training services",
              icon: Dumbbell
            },
            {
              title: "Rooftop Pool & Lounge",
              description: "Unwind at our stunning rooftop infinity pool with breathtaking views and poolside cocktail service",
              icon: Waves
            }
          ]}
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites"
          tag="Our Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "deluxe",
              brand: "Grandview",
              name: "Deluxe City View Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://pixabay.com/get/gb150e7e49e13ad7b1f93c871e8a0c5fedc2ff6d6b560a190825685acd15470bd452b6732cff980c9eaee0a44b0fd94ecaee0cf3d93d6c978fa6adfcf99cff52a_1280.jpg",
              imageAlt: "Elegant deluxe hotel room with city views"
            },
            {
              id: "suite",
              brand: "Grandview",
              name: "Presidential Suite",
              price: "$899/night",
              rating: 5,
              reviewCount: "850",
              imageSrc: "https://pixabay.com/get/g10cb70e7644c716bf7d3d1401d64dbaef0a51311171c1a4c2ea54de543e088ab6d5b54f974dfa723b7a78879b263a673a986236dd8ad97f2767504a590d7b603_1280.jpg",
              imageAlt: "Luxurious presidential suite interior"
            },
            {
              id: "executive",
              brand: "Grandview",
              name: "Executive Business Room",
              price: "$449/night",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://pixabay.com/get/gf68de20e5d33d3444d9cbd4ca4136b2ab15073741122353135737c32089e503e058629db14368c04de002a9acf0721dd8a796b3dbaf90e33bc21165bac08d218_1280.jpg",
              imageAlt: "Modern executive business hotel room"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Discover why our guests choose Grandview Hotel time and again"
          tag="Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "The attention to detail and exceptional service at Grandview Hotel exceeded all expectations. From the moment I arrived, every need was anticipated and fulfilled with genuine care.",
              imageSrc: "https://pixabay.com/get/g881c953a74d9549c94edd17c2118231a99396bf8bdda43a0d682fc5df2515aa414f63cbd054f3b81a7ed7d45172354850484196badd6eac2f320bfc4575cc26e_1280.jpg",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Consultant",
              testimonial: "I've stayed at luxury hotels worldwide, but Grandview Hotel stands out for its perfect blend of elegance, comfort, and personalized service. Truly unforgettable.",
              imageSrc: "https://pixabay.com/get/ga7689327a2b6bf2216a662eccab4d391cb0041863977b432d02555203541d294de1228ce0175cea4a6d0e525b66faea879b834ee89a1d3858e60db0eb92edc4c_1280.jpg",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Event Coordinator",
              testimonial: "The spa facilities and rooftop pool area are absolutely divine. Combined with the impeccable room service, my stay was nothing short of magical.",
              imageSrc: "https://pixabay.com/get/gab7da8cf03f8100ab2a589462d0f92682e741b02f9eb878529b7e40f0335bca6d8ffdd41cdac5bea7fa9d5302046d6c5856dc9963830ca4e470e1eb2dbac2ae9_1280.jpg",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Tech Entrepreneur",
              testimonial: "Business travel can be exhausting, but Grandview Hotel made it a pleasure. The executive amenities and central location make it perfect for professionals.",
              imageSrc: "https://pixabay.com/get/ga103c1a9fe0bdc468e991daf82cb2593df7fbbf746c4fa5128b8cf407ca2e6dccd2d421f3be454e03f4ca3c6c91924aa529f524ac36721b2102f550d7ee41a6a_1280.jpg",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Plan Your Perfect Stay"
          description="Contact our reservations team for personalized assistance with booking your luxury accommodation and special requests."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: false },
            { name: "dates", type: "text", placeholder: "Preferred Dates", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Special requests or questions about your stay...", rows: 4, required: true }}
          buttonText="Send Inquiry"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Grandview Hotel"
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "concierge" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Business Center", href: "business" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Events", href: "events" },
                { label: "Location", href: "location" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/grandviewhotel", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/grandviewhotel", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com/grandviewhotel", ariaLabel: "Follow us on Twitter" }
          ]}
          copyrightText="© 2025 Grandview Hotel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}
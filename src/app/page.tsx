"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/34297248/pexels-photo-34297248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "biscuits" },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34273597/pexels-photo-34273597.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Free stock photo of bakers, bakery, bread" },
  { "id": "product-image-1", "url": "https://images.pexels.com/photos/34301986/pexels-photo-34301986.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of bread baking on the walls of a traditional tandoor oven." }
];

export default function Page() {
  return (
    <ThemeProvider defaultButtonVariant="icon-arrow" defaultTextAnimation="entrance-slide" borderRadius="sharp">
      <div id="nav" data-section="nav" className="scroll-mt-24">
        <NavbarLayoutFloatingInline 
          navItems={[{ name: "Home", id: "home" }, { name: "About", id: "about" }, { name: "Contact", id: "contact" }, { name: "Policy", id: "policy" }]} 
          brandName="Sweet Treats" 
          buttonText="Order Now" 
          buttonVariant="icon-arrow" 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit 
            title="Baked Fresh Daily"
            description="Discover our delicious range of baked goods."
            imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
            buttons={[{ text: "See Our Products", href: "products" }]} 
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout 
            title="Quality is Our Secret Ingredient"
            description={["At Sweet Treats, we pride ourselves on using only the best ingredients.", "Every bite offers a perfect blend of taste and texture."]}
            buttons={[{ text: "Learn More", href: "about" }]} 
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardThree 
            title="Our Delicious Range"
            description="Browse through our mouth-watering selection."
            products={[
              { id: "1", name: "Artisan Bread", price: "$3.50", imageSrc: assetMap.find(a => a.id === "product-image-1")?.url ?? "/public/images/placeholder.webp" },
              { id: "2", name: "Chocolate Cake", price: "$20.00", imageSrc: assetMap.find(a => a.id === "product-image-1")?.url ?? "/public/images/placeholder.webp" },
              { id: "3", name: "Pastry Delight", price: "$2.00 each", imageSrc: assetMap.find(a => a.id === "product-image-1")?.url ?? "/public/images/placeholder.webp" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter 
            tag="Newsletter"
            title="Stay Updated with Our Offers"
            description="Get exclusive deals and updates straight to your inbox."
            inputPlaceholder="Your email address"
            buttonText="Subscribe" 
          />
        </div>
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FaqSplitMedia 
            title="Frequently Asked Questions"
            description="Find answers to common questions about our products and services."
            faqs={[
              { id: "1", title: "Do you offer gluten-free options?", content: "Yes, we have a range of gluten-free products available." },
              { id: "2", title: "Can I order online?", content: "Currently, we accept orders in-store only." }
            ]}
            imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis 
            columns={[
              { items: [{ label: "Home", href: "home" }, { label: "About", href: "about" }] },
              { items: [{ label: "Contact", href: "contact" }, { label: "Policy", href: "policy" }] }
            ]}
            logoText="Sweet Treats"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

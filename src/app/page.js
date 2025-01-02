import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 ">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui vel
            nisitincidunt aliquam. Nullam nec tortor non justo accumsan
            tincidunt. Sednec ultricies sapien. Integer nec sapien nec felis
            hendreritdignissim. Sed vel dui vel nisl tincidunt aliquam. Nullam
            nec tortor non justo accumsan tincidunt. Sed nec ultricies sapien.
          </p>
          <p>
            loremipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui
            vel nisit tincidunt aliquam. Nullam nec tortor non justo accumsan
            tincidunt. Sed nec ultricies sapien.
          </p>
          <p>
            loremipsum dolor sit amet, consectetur adipiscing elit. Sed vel dui
            vel nisit tincidunt aliquam. Nullam nec tortor non justo accumsan
            tincidunt. Sed nec ultricies sapien.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't Hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500 " href="tel:+917827441287">
            +91 78274 41287
          </a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
       Tamz Crust &copy; 2025  All Rights Reserved

      </footer>
    </>
  );
}

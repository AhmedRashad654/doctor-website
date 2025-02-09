import BestSpecialist from "@/components/HomePage/Best Specialist";
import HeroSection from "@/components/HomePage/HeroSection";
import SectionVedio from "@/components/HomePage/SectionVedio";
import Services from "@/components/HomePage/services";
export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const search = await searchParams;
  const valueSearch = search?.tab || "/";
  return (
    <div>
      <HeroSection />
      <Services />
      <BestSpecialist valueSearch={valueSearch} />
      <SectionVedio />
    </div>
  );
}

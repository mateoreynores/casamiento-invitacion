import { Footer } from "@/components/Footer";
import { Gifts } from "@/components/Gifts";
import { Hero } from "@/components/Hero";
import { InvitationText } from "@/components/InvitationText";
import { PhotoSection } from "@/components/PhotoSection";
import { RSVP } from "@/components/RSVP";
import { parseScheduleVariant, Schedule } from "@/components/Schedule";
import { notFound } from "next/navigation";

type HomeProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const variant = parseScheduleVariant(params.tipo);
  if (variant === null) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <PhotoSection />
      <InvitationText />
      <Schedule variant={variant} />
      <RSVP />
      <Gifts />
      <Footer />
    </div>
  );
}

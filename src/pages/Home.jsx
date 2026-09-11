import EventDetails from "../sections/EventDetails";
import Gallery from "../sections/Gallery";
import GiftsTeaser from "../sections/GiftsTeaser";
import Hero from "../sections/Hero";
import Invitation from "../sections/Invitation";
import Rsvp from "../sections/Rsvp";

export function Home() {
  return (
    <>
      <Hero />
      <Invitation />
      <EventDetails />
      <Gallery />
      <Rsvp />
      <GiftsTeaser />
    </>
  );
}

export default Home;

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <main className="relative bg-black-gradient flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-hidden dark:bg-black">
      <div className="max-w-7xl w-full">
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}

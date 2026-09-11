import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { SpotifyDock } from "./components/SpotifyPlayer";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Playlist from "./pages/Playlist";
import { prefersReducedMotion, useHashRoute } from "./hooks/useHashRoute";

const pages = {
  "": Home,
  presentes: Gifts,
  playlist: Playlist,
};

function App() {
  const route = useHashRoute();
  const Page = pages[route] ?? Home;

  /**
   * Ao trocar de pagina volta ao topo; se a URL apontar para uma secao
   * (ex.: #confirmar vindo da lista de presentes), rola ate ela apos o render.
   */
  useEffect(() => {
    const raw = window.location.hash.slice(1);
    const anchor = raw && !raw.startsWith("/") ? document.getElementById(raw) : null;
    const behavior = prefersReducedMotion() ? "auto" : "smooth";

    const frame = requestAnimationFrame(() => {
      if (anchor) {
        anchor.scrollIntoView({ behavior, block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });

    return () => cancelAnimationFrame(frame);
  }, [route]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-leaf-700 focus:px-5 focus:py-3 focus:text-[0.72rem] focus:uppercase focus:tracking-[0.18em] focus:text-cream"
      >
        Pular para o conteúdo
      </a>

      <Navbar route={route} />

      <main id="conteudo">
        <Page />
      </main>

      <Footer />
      <SpotifyDock />
    </>
  );
}

export default App;

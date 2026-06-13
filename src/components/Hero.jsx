import fotoCasal from "../assets/casal.jpeg";
import Countdown from "./Countdown";

function Hero() {
    return (
        <section className="relative h-screen overflow-hidden">

            {/*Imagem de fundo*/}
            <img 
                src={fotoCasal} 
                alt="Breno e Carla"
                className="absolute inset-0 h-full w-full object-cover" 
            />

            {/*Overlay escuro*/}
            <div className="absolute inset-0 bg-black/40"></div>

            {/*Conteúdo*/}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">

                <p className="mb-4 uppercase tracking-[0.4em] text-sm md:text-base">
                    Save The Date
                </p>

                <h1 className="font-serif text-8xl md:text-8xl mb-6">
                    Breno & Carla
                </h1>

                <p className="uppercase tracking-[0.25em] text-sm md:text-3xl">
                    03 de Janeiro de 2027 <br />
                    Rochedo - MS
                </p>

                <Countdown/>

                <p className="mt-10 uppercase tracking-[0.2em] text-sm md:text-1xl">
                    Em breve mais informações <br />
                    ♡ <br />
                    Com carinho, Breno & Carla <br />
                </p>

            </div>

        </section>
    );
}

export default Hero;
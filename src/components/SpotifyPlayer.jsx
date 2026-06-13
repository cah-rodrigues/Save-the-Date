function SpotifyPlayer() {
  return (
    <div
      className="
      w-[320px]
      md:w-[340px]
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-2xl
      p-4
      "
    >
      <h3 className="text-white text-lg mb-3 font-light">
        Nossa Playlist ♡
      </h3>

      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/5feKZY1YnaDq9zxknr0gjl?utm_source=generator&theme=0&si=5c36092e11b04337"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default SpotifyPlayer;
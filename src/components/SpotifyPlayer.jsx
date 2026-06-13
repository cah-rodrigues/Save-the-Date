function SpotifyPlayer() {
  return (
    <div
      className="
      fixed
      bottom-4
      right-4
      w-[320px] 
      md:w[340px]
      rounded-3xl
      bg-white/10
      backdrop-blur-xl
      shadow-2xl
      p-4
      z-50
      "
    >
      <h3 className="text-white text-lg mb-3 font-light">
        Nossa Playlist ♡
      </h3>

      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/playlist/5feKZY1YnaDq9zxknr0gjl?utm_source=generator&theme=0&si=bcde69a9bae74124" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
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
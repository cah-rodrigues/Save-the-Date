/**
 * Foto com moldura arredondada e proporcao reservada (sem CLS).
 *
 * A imagem recebe width/height reais do arquivo e `object-cover`, entao ela
 * e sempre recortada para caber na moldura, nunca esticada. `ratio` define a
 * forma do recorte; `focus` escolhe que parte da foto fica visivel.
 */
export function Photo({
  photo,
  ratio,
  frame = "frame-soft",
  focus = "center",
  ring = true,
  zoom = true,
  priority = false,
  className = "",
  imgClassName = "",
}) {
  return (
    <div
      className={`${frame} relative overflow-hidden bg-blush-50 ${
        ring ? "ring-1 ring-line ring-offset-4 ring-offset-cream" : ""
      } ${className}`}
      style={{ aspectRatio: ratio ?? photo.ratio }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        style={{ objectPosition: focus }}
        className={`h-full w-full object-cover transition-transform duration-[900ms] ease-soft ${
          zoom ? "hover:scale-[1.05]" : ""
        } ${imgClassName}`}
      />
    </div>
  );
}

export default Photo;

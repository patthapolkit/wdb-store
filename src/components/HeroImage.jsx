import hero from "../assets/home/hero.jpg";

export default function HeroImage() {
  return (
    <div>
      <img
        className="lg:h-[420px] h-[166px] mb-8 lg:mb-20 w-full object-cover"
        src={hero}
        alt=""
      ></img>
    </div>
  );
}

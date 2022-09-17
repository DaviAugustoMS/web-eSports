import { GameProps } from "../../App";

interface Props {
  data: GameProps;
}

export function GameBanner({ data }: Props) {
  return (
    <a
      href="http://"
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-lg overflow-hidden"
    >
      <img src={data.banner} alt={data.title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{data.title}</strong>
        <span className="text-zinc-300 text-sm block">
          {data._count.ads} anúncio(s)
        </span>
      </div>
    </a>
  );
}

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { GameBanner, CreateAdBanner, Modal } from "./components";

import "./styles/main.css";
import logo from "./assets/logo.svg";

export interface GameProps {
  id: string;
  title: string;
  banner: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="eSports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner key={game.id} data={game} />
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Modal />
      </Dialog.Root>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Form } from "../Form";
import { GameProps } from "../../App";

export function Modal() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúcio
        </Dialog.Title>

        <Form data={games} />
      </Dialog.Content>
    </Dialog.Portal>
  );
}

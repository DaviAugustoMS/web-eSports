import { GameController } from "phosphor-react";
import { SelectComp, InputComp, SelectWeek } from "../common";
import * as Dialog from "@radix-ui/react-dialog";

export function Form() {
  return (
    <form className="z-10">
      <SelectComp />
      <InputComp
        id="name"
        htmlFor="name"
        label="Seu nome (ou nickname)"
        placeholder="Como te chamam dentro do game?"
      />
      <div className="flex flex-row justify-between">
        <div className="w-[48%]">
          <InputComp
            type="number"
            id="yearsPlaying"
            htmlFor="yearsPlaying"
            label="Joga há quantos anos?"
            placeholder="Tudo bem ser ZERO"
          />
        </div>
        <div className="w-[48%]">
          <InputComp
            id="discord"
            htmlFor="discord"
            label="Qual seu Discord?"
            placeholder="Usuario#0000"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-[48%]">
          <SelectWeek />
        </div>
        <div className="w-[48%]">
          <InputComp
            type="time"
            id="hourStart"
            idEnd="hourEnd"
            htmlFor="hourStart"
            label="Qual horário do dia?"
            placeholder="De"
            placeholderEnd="Até"
            date
          />
        </div>
      </div>
      <div className="mt-3 flex gap-2 text-sm">
        <input type="checkbox" />
        Costumo me conectar ao chat de voz
      </div>
      <footer className="mt-4 flex justify-end gap-2">
        <Dialog.Close className="bg-zinc-500 hover:bg-zinc-600 px-5 h-12 rounded-md font-semibold">
          Cancelar
        </Dialog.Close>
        <button
          className="bg-violet-500 hover:bg-violet-600 flex gap-3 justify-center items-center px-5 h-12 rounded-md font-semibold"
          type="submit"
        >
          <GameController size={24} />
          Encontrar duo
        </button>
      </footer>
    </form>
  );
}

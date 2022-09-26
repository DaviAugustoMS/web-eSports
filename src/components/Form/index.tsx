import { GameController } from "phosphor-react";
import { SelectComp, InputComp, SelectWeek } from "../common";
import { Check } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import * as CheckBox from "@radix-ui/react-checkbox";
import { GameProps } from "../../App";

interface Props {
  data: GameProps[];
}
export function Form({ data }: Props) {
  return (
    <form className="z-10">
      <SelectComp data={data} />
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
      <label className="mt-3 flex gap-2 text-sm items-center">
        <CheckBox.Root className="w-6 h-6 rounded bg-zinc-900 p-1">
          <CheckBox.CheckboxIndicator>
            <Check className="w-4 h-4 text-emerald-400" />
          </CheckBox.CheckboxIndicator>
        </CheckBox.Root>
        Costumo me conectar ao chat de voz
      </label>
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

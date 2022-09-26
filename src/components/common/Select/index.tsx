import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { GameProps } from "../../../App";

interface Props {
  data: GameProps[];
}
export function SelectComp({ data }: Props) {
  return (
    <div className="flex flex-col mt-8">
      <label htmlFor="game" className="mb-2 text-sm">
        Qual o game?
      </label>
      <Select.Root>
        <Select.Trigger className="flex justify-between items-center h-[50px] bg-zinc-900 px-4 rounded text-zinc-500 text-sm ">
          <Select.Value placeholder="Selecione o game que deseja jogar" />
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="bg-zinc-900 text-white p-5 rounded">
            <Select.Viewport>
              {data.map((game) => (
                <>
                  <Select.Item value={game.id} key={game.id}>
                    <Select.ItemText>{game.title}</Select.ItemText>
                  </Select.Item>
                  <Select.Separator />
                </>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
export function SelectComp() {
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
              <Select.Item value="apple">
                <Select.ItemText>Blueberry</Select.ItemText>
              </Select.Item>
              <Select.Separator />
              <Select.Item value="app">
                <Select.ItemText>Blueberry</Select.ItemText>
              </Select.Item>
              <Select.Separator />
              <Select.Item value="appl">
                <Select.ItemText>Blueberry</Select.ItemText>
              </Select.Item>
              <Select.Separator />
              <Select.Item value="ap">
                <Select.ItemText>Blueberry</Select.ItemText>
              </Select.Item>
              <Select.Separator />
              <Select.Item value="a">
                <Select.ItemText>Blueberry</Select.ItemText>
              </Select.Item>
              <Select.Separator />
              <Select.Item value="appleq">
                <Select.ItemText>Blueberry</Select.ItemText>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
}

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export function SelectWeek() {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const daysWeek = [
    {
      id: 0,
      title: "Domingo",
      sigla: "D",
    },
    {
      id: 1,
      title: "Segunda",
      sigla: "S",
    },
    {
      id: 2,
      title: "Terça",
      sigla: "T",
    },
    {
      id: 3,
      title: "Quarta",
      sigla: "Q",
    },
    {
      id: 4,
      title: "Quinta",
      sigla: "Q",
    },
    {
      id: 5,
      title: "Sexta",
      sigla: "S",
    },
    {
      id: 1,
      title: "Sabado",
      sigla: "S",
    },
  ];
  console.log(weekDays);

  const handleClick = (id: string) => {
    weekDays.filter((item) => {
      if (item === id) {
        return true;
      }
      return false;
    });
  };

  return (
    <div className="flex flex-col mt-4 ">
      <label htmlFor="game" className="mb-2 text-sm">
        Qual o game?
      </label>
      <ToggleGroup.Root
        type="multiple"
        className="grid grid-cols-4 gap-2"
        onValueChange={setWeekDays}
        value={weekDays}
      >
        <ToggleGroup.Item
          value="0"
          title="Domingo"
          className={`w-8 h-8 rounded ${
            weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          D
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="1"
          title="Segunda"
          className={`w-8 h-8 rounded ${
            weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          S
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="2"
          title="Terça"
          className={`w-8 h-8 rounded ${
            weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          T
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="3"
          title="Quarta"
          className={`w-8 h-8 rounded ${
            weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          Q
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="4"
          title="Quinta"
          className={`w-8 h-8 rounded ${
            weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          Q
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="5"
          title="Sexta"
          className={`w-8 h-8 rounded ${
            weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          S
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="6"
          title="Sabado"
          className={`w-8 h-8 rounded ${
            weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          S
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}

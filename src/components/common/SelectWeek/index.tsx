export function SelectWeek() {
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

  return (
    <div className="flex flex-col mt-4 ">
      <label htmlFor="game" className="mb-2 text-sm">
        Qual o game?
      </label>
      <div className="grid grid-cols-4 gap-2">
        {daysWeek.map((day) => (
          <button
            key={day.id}
            title={day.title}
            className="w-8 h-8 bg-zinc-900 rounded"
          >
            {day.sigla}
          </button>
        ))}
      </div>
    </div>
  );
}

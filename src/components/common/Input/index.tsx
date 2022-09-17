interface InputProps {
  id: string;
  idEnd?: string;
  htmlFor: string;
  type?: string;
  placeholder: string;
  placeholderEnd?: string;
  label: string;
  date?: boolean;
}

export function InputComp({
  id,
  idEnd,
  htmlFor,
  type = "text",
  placeholder,
  placeholderEnd,
  label,
  date,
}: InputProps) {
  return (
    <div className="flex flex-col mt-4 ">
      {!date ? (
        <>
          <label className="mb-2 text-sm" htmlFor={htmlFor}>
            {label}
          </label>
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            className="flex justify-between items-center h-[50px] bg-zinc-900 px-4 rounded text-zinc-500 text-sm"
          />
        </>
      ) : (
        <>
          <label className="mb-2 text-sm" htmlFor={htmlFor}>
            {label}
          </label>

          <div className="flex flex-row justify-between">
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              className="flex justify-between items-center h-[40px] w-[48%] bg-zinc-900 px-4 rounded text-zinc-500 text-sm"
            />

            <input
              id={idEnd}
              type={type}
              placeholder={placeholderEnd}
              className="flex justify-between items-center h-[40px] w-[48%] bg-zinc-900 px-4 rounded text-zinc-500 text-sm"
            />
          </div>
        </>
      )}
    </div>
  );
}

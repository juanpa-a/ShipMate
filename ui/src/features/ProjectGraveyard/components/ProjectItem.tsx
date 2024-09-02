type Props = {
  id: string;
  name: string;
};

export default function ProjectItem({ id, name }: Props) {
  return (
    <div
      id={id}
      class="flex justify-between rounded-md items-center px-2 py-2 text-zinc-300 hover:bg-zinc-700 transition-colors duration-200 ease-in-out"
    >
      <span>{name}</span>
      <button
        aria-label={`Delete ${name}`}
        class="delete-btn text-red-500 hover:text-red-700 transition-colors duration-200 ease-in-out"
      >
        ❌
      </button>
    </div>
  );
}

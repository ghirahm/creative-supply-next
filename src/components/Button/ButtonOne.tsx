export default function ButtonOne({ text }: { text: string }) {
    return (
        <button className="relative flex h-fit w-fit items-center justify-center py-2 px-4 text-[var(--color-white)] bg-[var(--color-secondary)] rounded-full overflow-hidden border-2 border-[var(--color-secondary)] hover:before:bg-[var(--color-primary)] transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[var(--color-primary)] before:duration-500 before:ease-out hover:shadow-[var(--color-primary)] hover:before:h-56 hover:before:w-56 before:transition-all hover:text-[var(--color-white)] cursor-pointer">
            <span className="relative z-10 text-sm uppercase">{text}</span>
        </button>
    );
};

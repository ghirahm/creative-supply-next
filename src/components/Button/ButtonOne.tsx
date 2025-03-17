export default function ButtonOne({ text }: { text: string }) {
    return (
        <button className="relative text-[var(--color-white)] bg-[var(--color-primary)] p-3 border border-[var(--color-white)] rounded-full overflow-hidden hover:before:bg-[var(--color-white)] transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[var(--color-primary)] before:transition-all before:duration-500 hover:text-[var(--color-primary)] hover:before:left-0 hover:before:w-full">
            <span className="relative z-10 text-sm">{text}</span>
        </button>
    );
};

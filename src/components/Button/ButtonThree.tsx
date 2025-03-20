export default function ButtonOne({ text }: { text: string }) {
    return (
        <button className="relative text-[var(--color-white)] bg-[var(--color-primary)] p-3 border border-[var(--color-white)] rounded-full hover:border-b-6 transition-all cursor-pointer">
            <span className="relative z-10 text-sm">{text}</span>
        </button>
    );
};

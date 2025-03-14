export default function Overline({ text }: { text: string }) {
    return (
        <div className="w-fit border rounded-full py-2 px-4 mt-5 xl:mt-16 border-[var(--color-white)]">
            <h2 className="text-[var(--color-white)]">{text}</h2>
        </div>
    );
}
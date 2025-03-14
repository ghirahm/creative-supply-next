export default function ButtonOne({ text }: { text: string }) {
    return (
        <button className="btn-style-one">
            <span className="btn-title text-sm">{text}</span>
        </button>
    );
};

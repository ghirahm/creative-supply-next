// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ButtonTwo({ text }: { text: string }) {
    return (
        <button className="border border-[var(--color-black)] w-fit rounded-full py-2 px-4 text-[var(--text-tertiary)] font-bold flex items-center gap-2 group cursor-pointer transition-all duration-300">
            <h2 className="font-bold text-[var(--color-black)]">
                {text}
            </h2>
            <FontAwesomeIcon icon={faArrowRight} className="size-6 transform group-hover:translate-x-2 ease-in-out duration-300"></FontAwesomeIcon>
        </button>
    )

}
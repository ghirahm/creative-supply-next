// Import Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ButtonTwo({ text }: { text: string }) {
    return (
        <button className="border border-[var(--text-secondary)] sm:border-[var(--text-primary)] rounded-full py-[10px] px-[20px] text-[var(--text-tertiary)] font-bold flex items-center">
            <h2 className="font-bold transform hover:mr-[7px] ease-in-out duration-300 transition-all">More Projects</h2>
            <FontAwesomeIcon icon={faArrowRight} className="ml-[6px] size-6"></FontAwesomeIcon>
        </button>
    )

}
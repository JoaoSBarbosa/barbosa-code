 interface AccordionProps {
    title: string;
    icon: JSX.Element;
    onClick: () => void;
    isOpen: boolean;
    children: React.ReactNode;
    borderB?: boolean;
    borderT?: boolean;
}

 export const Accordion: React.FC<AccordionProps> = ({ title, borderB,borderT, icon, onClick, isOpen, children }) => {
    return (
        <div>
            <div className={`bg-gray-950 p-2  ${borderB && "rounded-b-lg"} ${borderT && "rounded-t-lg"} border-b border-gray-900 w-full flex  justify-between items-center cursor-pointer`} onClick={onClick}>
                <h2>{title}</h2>
                <span>{icon}</span>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} p-2`}>
                {children}
            </div>
        </div>
    );
};
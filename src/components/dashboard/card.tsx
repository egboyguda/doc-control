interface CardProps {
    children: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
}

export default function Card({ children, title, description, bgColor }: CardProps) {
    return (
        <div className={`h-52 w-72  ${bgColor} rounded-lg text-white`}>
            <div className="flex flex-col items-center justify-evenly h-full">
                <div className="text-white text-2xl font-bold">{title}</div>
                <div>{children}</div>
                <div className="text-xl">{description}</div>
            </div>
        </div>
    );
}

interface Props {
    title: string,
    description: string,
    iconPath: React.ReactNode,
}

export const GoalComponent = ({title, description, iconPath}: Props) => {
    return (
        <div className="flex flex-col gap-10 font-sans w-fit bg-slate-300 rounded-md p-6 m-3">
            <div className="flex flex-col gap-4">
                {iconPath}
                <h1 className="font-bold text-3xl">{title}</h1>
            </div>
            <p className="font-normal">
                {description}
            </p>
        </div>
    );
};

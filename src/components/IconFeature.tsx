interface Props {
    label: string,
    iconPath: string,
}

export const IconFeature = ({iconPath, label}: Props) => {
    return (
        <div className="my-4 mx-2 flex items-center gap-3">
            <img className="w-8" src={iconPath} alt={label+'Image'} />
            <p className="font-semibold text-lg">{label}: </p>
        </div>
    );
};

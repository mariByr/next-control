type Props = {
    name: string;
};

export const UserComponent = ({ name }: Props) => {
    return (
        <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-semibold">
            {name}
        </div>
    );
};

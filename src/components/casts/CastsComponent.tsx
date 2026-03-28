import {ICast} from "@/models/actorsModels/ICast";

interface CastsComponentProps {
    cast: ICast
}

export const CastsComponent = ({cast}: CastsComponentProps) => {
    return (
        <p  className={'whitespace-nowrap'}>
            {cast.original_name}
        </p>
    );
};

import {ICast} from "@/models/actorsModels/ICast";

interface CastsComponentProps {
    cast: ICast
}

export const CastsComponent = ({cast}: CastsComponentProps) => {
    return (
        <p >
            {cast.original_name}
        </p>
    );
};

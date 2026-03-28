import {IVideo} from "@/models/video-models/IVideo";
import './video.css'
interface VideoComponentProps {
    videos: IVideo[]
}

export const VideoComponent = ({videos}: VideoComponentProps) => {
    const trailer =
        videos.find(v => v.type === "Trailer" && v.site === "YouTube") ||
        videos.find(v => v.type === "Teaser" && v.site === "YouTube") ||
        null;

    if (!trailer) {
        return <div>No video available</div>;
    }
    return (
        <div className="trailer-container">
            <iframe
                className="trailer-frame"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title="Movie trailer"
                allowFullScreen
            />
        </div>
    );
};

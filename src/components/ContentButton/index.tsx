import "./styles.css";
import { ContentType } from "types/ContentType";

type Props = {
  content : ContentType
}

const ContentButton = ({ content }: Props) => {
  return (
    <div className="content-button-container">
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={"#"+content.title.replace(/\s/g, "").toString()}
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        <h3>{content.title}</h3>
        <p>{content.description}</p>
      </button>
      <div className="collapse" id={content.title.replace(/\s/g, "").toString()}>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={content.videoUri}
            allowFullScreen
            title={content.title}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContentButton;

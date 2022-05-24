import { AxiosRequestConfig } from "axios";
import ContentButton from "components/ContentButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentType } from "types/ContentType";
import { requestBackend } from "util/requests";
import "./styles.css";

type UrlParams = {
  offerId: string;
}

const ContentDetails = () => {
  const [list, setList] = useState<ContentType[]>();

  const { offerId } = useParams<UrlParams>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      withCredentials: true,
      url: `/offers/contents/${offerId}`,
      method: "GET",
    };

    requestBackend(params)
      .then((response) => {
        setList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [offerId]);

  return (
    <div className="content-details-container">
      <div className="row">
        {list?.map((content) => (
          <div className="col col-md-6 col-lg-4 col-xl-3" key={content.id}>
            <div className="content base-card">
              <ContentButton content={content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentDetails;

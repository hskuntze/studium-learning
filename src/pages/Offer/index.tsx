import ContentCard from "components/ContentCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SpringPage } from "types/vendor/spring";
import { OfferType } from "types/OfferType";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "util/requests";

const Offer = () => {
  const [page, setPage] = useState<SpringPage<OfferType>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      withCredentials: true,
      method: "GET",
      url: "/offers",
      params: {
        page: 0,
        size: 6,
      },
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="content-main-page container">
      <div className="row">
        {page?.content.map((offer) => (
          <div className="col-md-6" key={offer.id}>
            <Link to={`/offer/contentDetails/${offer.id}`}>
              <ContentCard offer={offer} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;

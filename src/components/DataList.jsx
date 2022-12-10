import influencers from "./data";

export const DataList = () => {
  const Influencers = () => {
    return influencers.map((item, i) => {
      return (
        <div className="Card-Influencer">
          <div className="influencer-image px-2 pt-4 d-flex justify-content-center">
            <img
              src="https://source.unsplash.com/random/200x200/?cat"
              alt="blok"
            />
          </div>
          <h4 className="text-center mt-2">{item.name}</h4>
          <h5 className="text-center mt-2">{item.followers} Followers</h5>
          <h5 className="text-center mt-2">{item.rating} Rating</h5>
        </div>
      );
    });
  };

  return (
    <div className="DataList my-3">
      <h2 className="text-center">Temukan Influencer!</h2>
      <div className="datalist-wrapper d-flex justify-content-center flex-wrap container">
        <Influencers />
      </div>
    </div>
  );
};

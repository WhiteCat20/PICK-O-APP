import influencers from "./data";

export const DataList = () => {
  const Influencers = () => {
    return influencers.map((item, i) => {
      return (
        <div className="Card-Influencer" key={i + 1}>
          <div className="influencer-image px-2 pt-4 d-flex justify-content-center">
            <img
              src={item.photo}
              // src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1569582923/h7eolgjclezmwaa5u2lx.jpg"
              alt={item.name}
              width="200"
            />
          </div>
          <h4 className="text-center mt-2">{item.name}</h4>
          <div className="d-flex justify-content-center">
            <code className="text-center bidang-box">{item.bidang}</code>
          </div>
          <p className="text-center follower-box">{item.follower} Followers</p>
          <p className="text-center rating-box">{item.rating}/10 Rating</p>
          <div className="d-flex justify-content-center">
            <a
              href={item.link_medsos}
              target="_blank"
              className="btn btn-warning text-white"
            >
              Contact Now!
            </a>
          </div>
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

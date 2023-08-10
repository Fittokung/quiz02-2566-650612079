export const PostOwner = ({ props }) => {
  return (
    <div>
      <div className="d-flex align-items-center gap-3">
        <img
          src="/profileImages/IME_18652.jpg"
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5 text-white">{props.name}</span>
      </div>

      <span className="text-white">{props.text}</span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{props.likeNum} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};

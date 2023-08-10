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
        <span className="fw-semibold fs-5 text-white">
          Kittiwat Yasarawan 650612079
          {/* {props.name} */}
        </span>
      </div>

      <span className="text-white">
        Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207
        {/* {props.text} */}
      </span>

      <div className="d-flex align-items-center gap-1">
        <img src="/like.svg" width={20}></img>
        <span style={{ color: "#B0B3B8" }}>{/* {props.likeNum} */}100 คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};

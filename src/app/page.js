"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { Reply } from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <div className="vstack gap-3">
          <PostOwner
            name="Kittiwat Yasarawan 650612079"
            text="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
            likeNum="100"
          />
        </div>

        {/* Comment Example */}

        {comments.map((comments) => (
          <Comment
            userImagePath={comments.userImagePath}
            username={comments.username}
            commentText={comments.commentText}
            likeNum={comments.likeNum}
            replies={comments.replies}
          />
        ))}

        {/* Reply Example */}
        <div className="d-flex gap-2 my-2 ps-5">
          {comments.map((comments) => (
            <Reply
              userImagePath={comments.replies.userImagePath}
              username={comments.replies.username}
              replyText={comments.replies.commentText}
              likeNum={comments.replies.likeNum}
              replies={comments.replies.replies}
            />
          ))}
        </div>

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}

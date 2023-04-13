import FollowCard from "./FollowCard";
import GroupJoinCard from "./GroupJoinCard";
import GroupLeaveCard from "./GroupLeaveCard";
import PictureCommentCard from "./PictureCommentCard";
import PostReactionCard from "./PostReactionCard";

function NotificationCard({ notification }) {
  return (
    <>
      {notification.type_post === "post-reaction" && (
        <PostReactionCard notification={notification} />
      )}
      {notification.type_post === "follow" && (
        <FollowCard notification={notification} />
      )}
      {notification.type_post === "group-join" && (
        <GroupJoinCard notification={notification} />
      )}
      {notification.type_post === "picture-comment" && (
        <PictureCommentCard notification={notification} />
      )}
      {notification.type_post === "group-leave" && (
        <GroupLeaveCard notification={notification} />
      )}
    </>
  );
}

export default NotificationCard;

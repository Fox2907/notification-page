function FollowCard({ notification }) {
  return (
    <div className={`notifications-card ${!notification.read && "unread"}`}>
      <img className="notifications-card-profile" src={notification.image} alt="profile"/>
      <div className="notifications-card-content">
        <div className="notifications-card-message">
          <p className="notifications-card-message-text">
            <strong>{notification.name}</strong>
            <span>followed you</span>
          </p>
          {!notification.read && (
            <p className="notifications-card-message-icon">&bull;</p>
          )}
        </div>
        <p className="notifications-card-message-time">
          {notification.time}
        </p>
      </div>
    </div>
  );
}

export default FollowCard;

import NotificationCards from "./NotificationCards";
import NotificationData from "./users.json";

function Notifications() {
  let notread = 0;

  for (let obj of NotificationData) {
    if (!obj.read) {
      notread++;
    }
  } 

  return (
    <main className="notifications-container">
      <div className="notifications-header">
        <div className="notifications-header-title">
          <h1>Notifications</h1>
          <div>{notread}</div>
        </div>
        <p className="notifications-header-read">Mark all as read</p>
      </div>
      <NotificationCards NotificationData={NotificationData} />
    </main>
  );
}

export default Notifications;

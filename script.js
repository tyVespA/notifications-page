const unreadNotifications = document.querySelectorAll(".unread");
const markAllAsReadBtn = document.querySelector(".mark-all-as-read");

const notificationCount = document.querySelector(".notification-count");



unreadNotifications.forEach((unreadNotification) => {
  unreadNotification.addEventListener("mouseenter", () => {
  unreadNotification.classList.remove("unread");
  if (notificationCount.textContent > 0) {
    notificationCount.textContent -= 1;
  }
  })
})

markAllAsReadBtn.addEventListener("click", () => {
  unreadNotifications.forEach((unreadNotification) => {
    unreadNotification.classList.remove("unread");
    notificationCount.textContent = 0;
  })
})
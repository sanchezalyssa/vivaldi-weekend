const date = document.getElementById("date");
function updateDateTime() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "medium",
  });
  document.getElementById("date").textContent = formattedDate;
}

// Update the time every second (1000 ms)
setInterval(updateDateTime, 1000);

// Initial call to display time immediately on load
updateDateTime();

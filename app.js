async function loadProfile() {
  const response = await fetch("./data.json");
  if (!response.ok) {
    throw new Error("Failed to load profile data.");
  }
  return response.json();
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

function renderProfileList(items) {
  const list = document.getElementById("profile-list");
  if (!list) return;
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.label}：${item.value}`;
    list.appendChild(li);
  });
}

function renderHobbies(hobbies) {
  const container = document.getElementById("hobbies");
  if (!container) return;
  container.innerHTML = "";
  hobbies.forEach((hobby) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = hobby;
    container.appendChild(tag);
  });
}

function renderContacts(contacts) {
  const container = document.getElementById("contacts");
  if (!container) return;
  container.innerHTML = "";
  contacts.forEach((contact) => {
    const row = document.createElement("div");
    row.className = "contact";
    const label = document.createElement("span");
    label.textContent = contact.label;
    const value = document.createElement("span");
    value.textContent = contact.value;
    row.appendChild(label);
    row.appendChild(value);
    container.appendChild(row);
  });
}

function applyProfile(data) {
  setText("name", data.name);
  setText("age", data.age);
  setText("major", data.major);
  setText("school", data.school);
  setText("bio", data.bio);
  setText("footer-text", data.footerText);
  renderProfileList(data.profile);
  renderHobbies(data.hobbies);
  renderContacts(data.contacts);
}

loadProfile()
  .then(applyProfile)
  .catch((err) => {
    console.error(err);
  });

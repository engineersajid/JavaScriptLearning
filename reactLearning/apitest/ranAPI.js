const fetchHumanInfo = async () => {
  const url = "https://randomuser.me/api";

  try {
    const res = await fetch(url);
    const data = await res.json();

    // data get
    const user = data.results[0];
    const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
    const email = user.email;
    const imageUrl = user.picture.large;

    // UI te information send kortesi
    document.getElementById("image").src = imageUrl;
    document.getElementById("fullName").innerText = `Full Name: ${fullName}`;
    document.getElementById("email").innerText = `Email: ${email}`;
  } catch (e) {
    console.log(e);
  }
};

fetchHumanInfo();

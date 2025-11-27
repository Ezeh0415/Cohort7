const Base_Url = "http://localhost:3300/";

const handlePost = () => {
  // const firstName = "Ezeanwe";
  const name = "Chigozie";
  const password = "chigozie3942";
  const email = "ezeanwechigozie@gmail.com";
  const phone = "08039425678";
  const address = "Ikeja";
  const dob = "1997-06-27";
  const profileImage = "https://picsum.photos/200/300";
  fetch(`${Base_Url}createPost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // firstName,
      name,
      email,
      password,
      phone,
      address,
      dob,
      profileImage,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

handlePost();

const handleGet = () => {
  const id = 3;
  fetch(`${Base_Url}addColumn`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// handleGet();

const handleUpdate = () => {
  const email = "ezeanwechigozie@gmail.com";
  const address = "chigozie";

  fetch(`${Base_Url}updatePost`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      address,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// handleUpdate();

const handleDelete = () => {
  const id = 3;
  fetch(`${Base_Url}deletePost/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

// handleDelete();

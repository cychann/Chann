export async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "qbf8qwmn");
  const res = await fetch("https://api.cloudinary.com/v1_1/dkwvzwyz5/upload", {
    method: "POST",
    body: formData,
  });
  return res.json();
}

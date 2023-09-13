const commentApi =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/BHkrUTs0Q4TVtczjuly5/comments";

const postComments = async (id) => {
  const username = document.getElementById("popup-name").value;
  const comment = document.getElementById("popup-insight").value;

  const options = {
    method: "POST",
    body: JSON.stringify({
      item_id: id,
      username,
      comment,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  await fetch(commentApi, options).then((res) => res.text());
};

const getComments = async (id) => {
  const res = await fetch(`${commentApi}?item_id=${id}`);
  const data = await res.json();
  return data;
};

export { postComments, getComments };

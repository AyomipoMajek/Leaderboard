const add = (name, score) => {
  const grow = async () => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v2m1w39qEU75TuLKTOEo/scores/',
      {
        method: 'post',
        body: JSON.stringify({ user: name, score }),
        headers: { 'Content-type': 'application/json' },
      });
  };
  grow();
};
export default add;
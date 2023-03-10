const print = () => {
  const wrapper = document.querySelector('.leaderboardscores');
  const template = (arr) => {
    const list = document.createElement('li');
    list.innerText = `${arr.user}: ${arr.score}`;
    wrapper.appendChild(list);
  };
  const getResponse = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v2m1w39qEU75TuLKTOEo/scores/');
    const preData = await response.json();
    return preData;
  };
  getResponse().then((raw) => {
    const dat = (raw.result);
    const data = dat.sort((a, b) => b.score - a.score);
    data.map((each) => (
      template(each)
    ));
  });
};
export default print;
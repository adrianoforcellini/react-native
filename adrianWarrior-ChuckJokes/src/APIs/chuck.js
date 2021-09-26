import axios from "axios";

const randomChuckJoke = async () => {
  const joke = await axios.get("https://api.chucknorris.io/jokes/random");
  const { data } = joke;
  return data
};

export default randomChuckJoke;

import axios from "./donation-api";

export const getBankInfo = () => {
  return axios.get(`/api/bank`);
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://be-homework.vercel.app/api/bank`);
  const data = await res.json();

  // Pass data to the page via props
  return data;
}

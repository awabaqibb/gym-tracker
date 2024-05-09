import { useEffect } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

const Home = () => {
  console.log(apiUrl);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${apiUrl}/`);
      const data = await response.json();

      console.log(data);
    };

    fetchWorkouts();
  }, []);

  return <div>Home</div>;
};

export default Home;

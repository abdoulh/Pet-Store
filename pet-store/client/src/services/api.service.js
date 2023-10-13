import axios from "axios";

export const getUserId = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/users/payload/" +
        localStorage.getItem("token")
      );
      console.log(data.payload);
    } catch (error) {
      console.log(error);
    }
  };

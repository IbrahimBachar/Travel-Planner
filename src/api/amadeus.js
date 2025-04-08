import axios from 'axios';

// const AMADEUS_AUTH_URL = "https://test.api.amadeus.com/v1/security/oauth2/token";

// let token = "";

// export const getToken = async () => {
//   if (token) return token;
//   const response = await axios.post(AMADEUS_AUTH_URL, new URLSearchParams({
//     grant_type: "client_credentials",
//     client_id: import.meta.env.VITE_AMADEUS_API_KEY,
//     client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
//   }));
//   token = response.data.access_token;
//   return token;
// };

// try {
//     const res = await axios.post( ... );
//     return res.data.access_token;
//   } catch (error) {
//     console.error("Token fetch error:", error.response?.data || error.message);
//     throw error;
//   }
  

export const getToken = async () => {
    try{
        const response = await axios.post(
        "https://test.api.amadeus.com/v1/security/oauth2/token",
        new URLSearchParams({
            grant_type: "client_credentials",
            client_id: import.meta.env.VITE_AMADEUS_API_KEY,
            client_secret: import.meta.env.VITE_AMADEUS_API_SECRET,
        }),

        {
            headers: {
            "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        );
        return response.data.access_token;
  }catch (error) {
    console.error("Token fetch error:", error.response?.data || error.message);
    throw error;
  }
}  

export const searchDestinations = async (query) => {
  const accessToken = await getToken();
  const res = await axios.get(`https://test.api.amadeus.com/v1/reference-data/locations`, {
    headers: { Authorization: `Bearer ${accessToken}` },
    params: {
      keyword: query,
      subType: "CITY"
    }
  });
  return res.data.data;
};



import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZjxEAuYJFmdDR3xhAgIJAMoQHorb-id89_Ml9xjUMgY",
  },
});

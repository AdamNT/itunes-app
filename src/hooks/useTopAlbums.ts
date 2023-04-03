import { useQuery } from "@tanstack/react-query";
import ENDPOINT from "../constants/endpoint";
import axios from "../utils/axiosInstance";

const fetchTopAlbums = async () => {
  const response = await axios.get(ENDPOINT.TOP_ALBUMS);

  return response?.data?.feed || {};
};

const useTopAlbums = () => {
  const query = useQuery({ queryKey: ["topAlbums"], queryFn: fetchTopAlbums });

  return query;
};

export default useTopAlbums;

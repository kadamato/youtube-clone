import axios from "axios";
import { CancelToken } from "axios";

const source = CancelToken.source();

export const YoutubeClone = axios.create({
  baseURL: "http://localhost:9000",
  cancelToken: source.token,
});

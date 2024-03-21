import axios from 'axios';
import { axiosInstance } from '../../components/route/axiosInstance';

export default async function allCommunityAxios(props) {
  try {
    // POST 요청은 body에 실어 보냄
    const res = await axiosInstance.get(
      // `//i9c110.p.ssafy.io/api/community/all/${props.page}`,
      `community/all/${props.page}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
}

// @ts-ignore
import axiosUtils from "@/utils/axios-util";

export const getCoinNews = async () => {
  try {
    const response = await axiosUtils.get("/api/coin/coinNews");

    if (response.data) {
      return response.data;
    } else {
      console.log(response.message);
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCoinSchedule = async () => {
  try {
    const response = await axiosUtils.get("/api/coin/coinSchedule");

    if (response.data) {
      return response.data;
    } else {
      console.log(response.message);
      return [];
    }
  } catch (error) {
    console.error(error);
  }
};

export const getCoinTrends = async () => {
  try {
    const response = await axiosUtils.get("/api/coin/coinTrends");

    if (response.data) {
      return response.data;
    } else {
      console.log(response.message);
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

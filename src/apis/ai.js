// @ts-ignore
import axiosUtils from "@/utils/axios-util";

export const getAiSentiment = async (val) => {
  try {
    const response = await axiosUtils.get("/api/ai/sentiment", {
      params: { symbol: val },
    });
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

export const getAiAnalysis = async (val) => {
  try {
    const response = await axiosUtils.get("/api/ai/analysis", {
      params: { symbol: val },
    });
    if (response.data) {
      return response.data;
    } else {
      console.log(response);
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

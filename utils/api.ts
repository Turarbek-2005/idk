export const BASE_URL = "http://localhost:8000";

export const signIn = async (payload: any) => {
  try {
    const res = await $fetch("/api/v1/user/sign-in", {
      baseURL: BASE_URL,
      method: "POST",
      body: payload,
    });
    return res;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const getRealEstateList = async () => {
  try {
    const res = await $fetch("/api/v1/real_estate/public", {
      baseURL: BASE_URL,
      method: "GET",
    });
    return res;
  } catch (error) {
    console.error("Error fetching real estate list:", error);
    throw error;
  }
};

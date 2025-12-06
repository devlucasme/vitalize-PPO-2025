import { $axios } from "./api";

interface IDeleteUserRequest {
  password: string;
}

export const deleteUserAccount = async (token: string, data: IDeleteUserRequest) => {
  try {
    const response = await $axios.delete("/users/delete", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    });

    return response.data;
  } catch (error: any) {
    console.error("Erro ao deletar a conta:", error.response?.data || error.message);
    throw error.response?.data || error;
  }
};

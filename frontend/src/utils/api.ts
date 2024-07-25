import { EquipmentData } from "../types";

export const postEquipmentData = async (data: EquipmentData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/equipment`!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to post equipment data");
  }

  return response.json();
};

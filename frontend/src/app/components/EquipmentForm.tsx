"use client";

import { EquipmentData } from "@/types";
import React, { useState } from "react";
import { postEquipmentData } from "../../utils/api";
import { toast } from "react-toastify";

const EquipmentForm: React.FC = () => {
  const [formData, setFormData] = useState<EquipmentData>({
    equipmentId: "",
    timestamp: "",
    value: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "value" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postEquipmentData(formData);
      toast.success("Data posted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to post data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Add Reading</h2>
      <div className="flex flex-col items-center justify-center ">
        <label
          htmlFor="equipmentId"
          className="block text-sm font-medium text-gray-700"
        >
          Equipment ID
        </label>
        <input
          type="text"
          name="equipmentId"
          id="equipmentId"
          value={formData.equipmentId}
          onChange={handleChange}
          className="block w-full rounded-md shadow-sm focus:outline-none sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="timestamp"
          className="block text-sm font-medium text-gray-700"
        >
          Timestamp
        </label>
        <input
          type="datetime-local"
          name="timestamp"
          id="timestamp"
          value={formData.timestamp}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md shadow-sm focus:outline-none sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="value"
          className="block text-sm font-medium text-gray-700"
        >
          Value
        </label>
        <input
          type="number"
          name="value"
          id="value"
          value={formData.value}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md focus:outline-none sm:text-sm"
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default EquipmentForm;

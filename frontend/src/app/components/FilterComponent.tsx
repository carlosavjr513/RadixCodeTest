"use client";

import { Equipment, FilteredValue } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import LineChartComponent from "./LineChartComponent";

const FilterComponent: React.FC = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<string>("");
  const [period, setPeriod] = useState<string>("All");
  const [average, setAverage] = useState<number | null>(null);
  const [chartData, setChartData] = useState<FilteredValue[]>([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await axios.get<Equipment[]>(
          `${process.env.NEXT_PUBLIC_API_URL}/equipments`
        );
        setEquipments(response.data);
      } catch (error) {
        console.error("Error fetching equipments:", error);
      }
    };

    fetchEquipments();
  }, []);

  useEffect(() => {
    const fetchFilteredValues = async () => {
      if (selectedEquipment) {
        try {
          const response = await axios.get<FilteredValue[]>(
            `${process.env.NEXT_PUBLIC_API_URL}/equipment/values`,
            {
              params: {
                equipmentId: selectedEquipment,
                period: period,
              },
            }
          );
          const values = response.data.map((item: FilteredValue) => item.value);
          const avg =
            values.reduce((acc: number, curr: number) => acc + curr, 0) /
            values.length;
          setAverage(isNaN(avg) ? null : avg);
          setChartData(response.data);
        } catch (error) {
          console.error("Error fetching filtered values:", error);
        }
      }
    };

    fetchFilteredValues();
  }, [selectedEquipment, period]);

  return (
    <div className="p-4">
      <div>
        <LineChartComponent data={chartData} />
      </div>
      <h2 className="text-xl font-bold mb-4">Filter Equipment Data</h2>
      <div className="mb-4">
        <label htmlFor="equipment" className="block mb-2">
          Select Equipment:
        </label>
        <select
          id="equipment"
          className="border p-2 w-full"
          value={selectedEquipment}
          onChange={(e) => setSelectedEquipment(e.target.value)}
        >
          <option value="" disabled>
            Select an Equipment
          </option>
          {equipments.map((equipment) => (
            <option key={equipment.equipmentId} value={equipment.equipmentId}>
              {equipment.equipmentId}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Select Time Period:</label>
        <div>
          {["All", "24h", "48h", "1 week", "1 month"].map((timePeriod) => (
            <label key={timePeriod} className="mr-4">
              <input
                type="radio"
                name="period"
                value={timePeriod}
                checked={period === timePeriod}
                onChange={(e) => setPeriod(e.target.value)}
                className="mr-1"
              />
              {timePeriod}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold">Average Value:</h3>
        <p>{average !== null ? average.toFixed(2) : "--"}</p>
      </div>
    </div>
  );
};

export default FilterComponent;

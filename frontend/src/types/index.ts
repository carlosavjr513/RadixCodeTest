export interface EquipmentData {
  equipmentId: string;
  timestamp: string;
  value: number;
}

export interface Equipment {
  equipmentId: string;
}

export interface FilteredValue {
  timestamp: string;
  value: number;
}

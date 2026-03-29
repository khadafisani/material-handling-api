enum MaterialRequestStatusEnum {
  REQUESTED = 0,
  PROGRESS = 1,
  FULFILLED = 2,
  REJECTED = 3,
}

export const getMaterialRequestStatusEnumLabel = (
  materialRequestStatuseEnum: MaterialRequestStatusEnum,
) => {
  switch (materialRequestStatuseEnum) {
    case MaterialRequestStatusEnum.REQUESTED:
      return "Requested";
    case MaterialRequestStatusEnum.PROGRESS:
      return "On Progress";
    case MaterialRequestStatusEnum.FULFILLED:
      return "Fulfilled";
    case MaterialRequestStatusEnum.REJECTED:
      return "Rejected";
    default:
      return "Unknown";
  }
};

export const getMaterialRequestStatusEnums = () => {
  const enums = Object.entries(MaterialRequestStatusEnum);
  const result = [];

  for (const [key, value] of enums) {
    if (typeof value === "number") {
      result.push({
        id: value,
        name: getMaterialRequestStatusEnumLabel(+value),
      });
    }
  }

  return result;
};

export default MaterialRequestStatusEnum;

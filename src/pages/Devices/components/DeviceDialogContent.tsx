import { Device } from "@/shared/types";
import { useState } from "react";
import DeviceDescription from "./DeviceDescription";
import ConfirmOrderDetails from "./ConfirmOrderDetails";

const DeviceDialogContent = ({ id, description, ...device }: Device) => {
  const [view, setView] = useState<"description" | "order">("description");

  const setOrderView = () => {
    setView("order");
  };

  const setDescriptionView = () => {
    setView("description");
  };

  if (view === "description") {
    return (
      <DeviceDescription
        {...device}
        description={description}
        setOrderView={setOrderView}
      />
    );
  }

  return (
    <ConfirmOrderDetails
      id={id}
      {...device}
      setDescriptionView={setDescriptionView}
    />
  );
};

export default DeviceDialogContent;

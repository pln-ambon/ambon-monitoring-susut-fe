import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ErrorIcon from "@/components/icon/error-icon";
import { Button } from "@/components/ui/button";
import { AppPageContext, AppDispatchContext } from "@/components/pages/context";

export default function ModalError() {
  const state = React.useContext(AppPageContext);
  const dispatch = React.useContext(AppDispatchContext);

  const { modalType, isError, title, message } = state;

  const handleClose = () => {
    dispatch({
      type: "RESET",
    });
  };

  return (
    <Dialog defaultOpen={isError} open={isError}>
      <DialogContent className="p-6 text-center w-1/5 pt-12 pb-6">
        {modalType === "ERROR" && <ErrorIcon className="mx-auto" />}
        <h5 className="font-semibold">{title}</h5>
        <p className="text-[#767882]">{message}</p>
        <Button type="button" onClick={handleClose}>
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
}

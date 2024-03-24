import React from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// import { AppPageContext, AppDispatchContext } from "@/components/pages/context";
// import { createRequest } from "@/api/common-request";

export default function ModalConfirm() {
  // const state = React.useContext(AppPageContext);
  // const dispatch = React.useContext(AppDispatchContext);
  const [loading, setLoading] = React.useState(false);

  const {
    modalType,
    isActive,
    title,
    message,
    body,
    method,
    url,
    onSuccess,
    onError,
  } = state;

  const handleCancel = () => {
    // dispatch({
    //   type: "RESET",
    // });
  };

  const handleSubmit = async () => {
    // setLoading(true);
    // try {
    //   // await createRequest({ method, url, body });
    //   dispatch({
    //     type: "RESET",
    //   });
    //   setLoading(false);
    //   onSuccess();
    // } catch (error) {
    //   dispatch({
    //     type: "RESET",
    //   });
    //   setLoading(false);
    //   onError(error?.message);
    // }
  };

  return (
    <Dialog defaultOpen={isActive} open={isActive}>
      <DialogContent className="p-6 text-center w-1/5 pt-12 pb-6">
        {/* <Icon /> */}
        Icon
        <h5 className="font-semibold">{title}</h5>
        <p className="text-[#767882]">{message}</p>
        {loading ? (
          <Button type="button" variant="outline" className="cursor-wait">
            Please wait ...
          </Button>
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button type="button" onClick={handleCancel} variant="outline">
              Tidak
            </Button>
            <Button type="button" onClick={handleSubmit}>
              Ya
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

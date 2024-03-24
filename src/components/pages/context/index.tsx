import React from "react";

type ModalType = "SAVE" | "DELETE" | "";

interface AppState {
  modalType: ModalType;
  isActive: boolean;
  isError: boolean;
  title: string;
  message: string;
  url: string;
  method: string;
  params: string;
  body: any;
  onSuccess: () => void;
  onError: () => void;
}

type Action = {
  type: "SET" | "RESET";
  rest: any;
};

const initialState: AppState = {
  modalType: "",
  isActive: false,
  isError: false,
  title: "",
  message: "",
  url: "",
  method: "",
  params: "",
  body: null,
  onSuccess: () => {},
  onError: () => {},
};

const AppPageContext = React.createContext(initialState);

const AppDispatchContext = React.createContext(() => {});

function AppPageProvider({ children }: { children: any }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppPageContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppPageContext.Provider>
  );
}

const reducer = (state: AppState, { type, ...rest }: Action): AppState => {
  switch (type) {
    case "SET":
      return {
        ...state,
        ...rest,
      };
    case "RESET":
      return {
        ...state,
        modalType: "",
        isActive: false,
        isError: false,
        title: "",
        message: "",
        url: "",
        method: "",
        params: "",
        body: null,
        onSuccess: () => {},
        onError: () => {},
      };
    default:
      return state;
  }
};

export { AppPageContext, AppDispatchContext, AppPageProvider };

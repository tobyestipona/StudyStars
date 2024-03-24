import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
  onClose: () => void;
}

const Alert = ({ children, type, onClose }: Props) => {
  return (
    <div className={"alert alert-" + type + " alert-dismissible"}>
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;

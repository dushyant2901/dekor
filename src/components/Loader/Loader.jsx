import { SpinnerCircularFixed } from "spinners-react";
export const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <SpinnerCircularFixed
        size={50}
        thickness={180}
        speed={136}
        color="#FF7733"
        secondaryColor={"rgba(0, 0, 0, 0.3)"}
      />
    </div>
  );
};

import { LocateFixed } from "lucide-react";
import { useState } from "react";

type GeolocationButtonProps = {
  onPosition: (pos: GeolocationPosition) => void;
  onError?: (err: GeolocationPositionError | string) => void;
};

export function GeolocationButton({
  onPosition,
  onError
}: GeolocationButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = () => {
    setIsLoading(true);

    if (!navigator.geolocation) {
      if (onError) onError("Geolocation is not supported by your browser");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos => {
        onPosition(pos);
        setIsLoading(false);
      },
      err => {
        if (onError) onError(err);
        setIsLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
      }
    );
  };

  return (
    <button
      type="button"
      className="btn-glass btn-glass--circle"
      onClick={getLocation}
      title="Detect my current location"
      aria-label="Detect my current location"
      disabled={isLoading}
    >
      <LocateFixed size={16}
        aria-hidden="true"
      />
    </button>
  );
}

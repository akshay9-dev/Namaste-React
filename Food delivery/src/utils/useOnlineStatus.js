import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, steOnlineStatus] = useState(true);

  //check if online
  useEffect(() => {
    window.addEventListener("offline", () => {
      steOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      steOnlineStatus(true);
    });
  }, []);

  //Boolean value
  return onlineStatus;
};

export default useOnlineStatus;

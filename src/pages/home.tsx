import { useState, useEffect } from "react";
import { GrapesJsComponent } from "../components/Grapes";
import SmallScreen from "../components/Screens/SmallScreen";
import $ from "jquery";

const SmallScreenSize = 900;

export default function Home(): JSX.Element {
  const [isLgScreen, setIsLgScreen] = useState<boolean>(false);

  const handleScreenSize = () => {
    const newIsLgScreen = Number($(window).width()) >= SmallScreenSize;
    setIsLgScreen(newIsLgScreen);
  };

  useEffect(() => {
    handleScreenSize(); // Initial screen size check

    const handleResize = () => {
      handleScreenSize(); // Screen size check on resize
    };

    $(window).resize(handleResize);

    return () => {
      $(window).off("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return isLgScreen ? <GrapesJsComponent /> : <SmallScreen />;
}

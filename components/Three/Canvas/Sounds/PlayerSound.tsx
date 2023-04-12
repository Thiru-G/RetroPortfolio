import React from "react";
import { usePlayerSound } from "../../Store/ThreeState";
import { Howl } from "howler";

export const PlayerSound = () => {
  const [id, set] = React.useState();

  const audio = new Howl({
    src: "./sounds/walk.mp3",
    loop: true,
    onplay: function (id) {},
  });
  // global state
  const { isIdle, setIsIdle } = usePlayerSound(
    (state) => state
  );

  // React.useEffect(() => {
  //   if (isIdle === false) {
  //     if (audio.playing(0)) {
  //       console.log("playing");
  //     } else {
  //       audio.play();
  //     }
  //   } else {
  //     audio.stop();
  //     audio.unload();
  //     console.log("entro aqui");
  //   }
  // }, [isIdle]);

  return null;
};

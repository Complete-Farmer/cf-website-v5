import { useStore } from "@nanostores/react";
import ReactPlayer from "react-player/youtube";

import { Wrapper } from "@components/utils";
import { $selectedVideoUrl } from "@utils/stores";

const CustomerStoryVideoModal = () => {
  const selectedVideoUrl = useStore($selectedVideoUrl);
  return (
    <>
      {selectedVideoUrl && (
        <Wrapper
          isOpen={true}
          onClose={() => $selectedVideoUrl.set(undefined)}
          className="flex w-[426px] h-[240px] md:w-[640px] md:h-[360px] xl:w-[1280px] xl:h-[720px] relative transform overflow-hidden text-left text-base transition-all mx-auto lg:max-w-7xl"
        >
          <ReactPlayer
            playing
            url={selectedVideoUrl}
            width="100%"
            height="100%"
          />
        </Wrapper>
      )}
    </>
  );
};

export default CustomerStoryVideoModal;

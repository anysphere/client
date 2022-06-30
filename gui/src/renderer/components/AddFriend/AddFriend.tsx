import Modal from "../Modal";
import { ModalType } from "../Modal";
import { StatusProps } from "../Status";
import * as React from "react";
import { classNames } from "../../utils";
import AddFriendChoice from "./AddFriendChoice";
import AddFriendInPerson from "./AddFriendInPerson";
import AddFriendRemote from "./AddFriendRemote";

enum AddFriendScreen {
  Choice,
  InPerson,
  Remote,
}

export default function AddFriend({
  onClose,
  setStatus,
}: {
  onClose: () => void;
  setStatus: (status: StatusProps) => void;
}): JSX.Element {
  const [screen, setScreen] = React.useState<AddFriendScreen>(
    AddFriendScreen.Choice
  );
  const [story, setStory] = React.useState<string>("");

  let component;
  switch (screen) {
    case AddFriendScreen.Choice:
      component = (
        <AddFriendChoice
          onClose={onClose}
          setStatus={setStatus}
          chooseInperson={() => {
            window.getMyPublicID().then((publicID) => {
              setStory(publicID.story);
              setScreen(AddFriendScreen.InPerson);
            });
          }}
          chooseRemote={() => setScreen(AddFriendScreen.Remote)}
        />
      );
      break;
    case AddFriendScreen.InPerson:
      component = (
        <AddFriendInPerson
          onClose={onClose}
          setStatus={setStatus}
          story={story}
        />
      );
      break;
    case AddFriendScreen.Remote:
      component = <AddFriendRemote onClose={onClose} setStatus={setStatus} />;
      break;
  }

  return (
    <Modal onClose={onClose} type={ModalType.Large}>
      <div className="justify-content-center grid h-full w-full grid-cols-1 items-center">
        <div className="mx-auto h-[min(40rem,100%)] w-[min(60rem,100%)] self-center">
          {component}
        </div>
      </div>
    </Modal>
  );
}

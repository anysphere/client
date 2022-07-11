import { StatusProps } from "../Status";
import { classNames } from "../../utils";
import { useEffect, useState, useMemo, useCallback } from "react";
import seedrandom from "seedrandom";
import { motion } from "framer-motion";

const DEBUG_COLORS = false;
// const DEBUG_COLORS = true;

function ProgressBar({ progress }: { progress: number }): JSX.Element {
  return (
    <div className="absolute top-4 w-full text-xs text-asbrown-100">
      <div className="mx-auto w-fit">
        <div className="grid grid-cols-3 gap-16 text-center">
          <div
            className={classNames(progress == 0 ? "text-asbrown-light" : "")}
          >
            1. Share stories.
          </div>
          <div
            className={classNames(progress == 1 ? "text-asbrown-light" : "")}
          >
            2. Verify.
          </div>
          <div
            className={classNames(progress == 2 ? "text-asbrown-light" : "")}
          >
            3. Finish.
          </div>
        </div>
      </div>
    </div>
  );
}

function generateUniqueNameFromDisplayName(displayName: string): string {
  // make lowercase, replace space by dash
  const name = displayName.toLowerCase().replace(/ /g, "-");
  return name;
}

export function StoryForm({
  theirstory,
  setTheirStory,
}: {
  theirstory: string[];
  setTheirStory(story: string[]): void;
}): JSX.Element {
  return (
    <div className="grid grid-cols-1 gap-4">
      {theirstory.map((line, i) => (
        <div className="flex flex-row gap-4" key={i}>
          <p className="text-sm text-asbrown-300">{i + 1}.</p>
          <input
            type="text"
            name={`Story ${i}`}
            id={`Story ${i}`}
            className="m-0
          block
          w-full
          border-0
          border-b-2
          border-asbrown-100 p-0 text-sm
          focus:border-asbrown-300 focus:ring-0"
            onChange={(e) => {
              setTheirStory(
                theirstory.map((line, j) => {
                  if (j == i) {
                    return e.target.value;
                  }
                  return line;
                })
              );
            }}
            value={line}
          />
        </div>
      ))}
    </div>
  );
}

async function sha256(s: string): Promise<ArrayBuffer> {
  const encoder = new TextEncoder();
  const data = encoder.encode(s);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return hash;
}
async function sha256string(s: string): Promise<string> {
  const hashBuffer = await sha256(s);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

function randint(rng: any, min: number, max: number): number {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function StoryAnimationSmall({ seed }: { seed: string }): JSX.Element {
  const KEYFRAMES = 5; // even if for some reason the time is timezone-dependent, mod 60 should still agree anywhere in the world
  const DURATION = 3000;
  const [shaseed, setShaseed] = useState("");
  const [keyframe, setKeyframe] = useState(0);
  const [initialkeyframe, setInitialKeyframe] = useState(0);
  const [roundtrips, setRoundtrips] = useState(0);

  useEffect(() => {
    sha256string(seed).then((hash) => {
      setShaseed(hash);
    });
  }, [seed]);

  useEffect(() => {
    // INITIAL KEYFRAME: set keyframe to be current time % KEYFRAMES in seconds
    setKeyframe(Math.floor(Date.now() / DURATION) % KEYFRAMES);
    setInitialKeyframe(Math.floor(Date.now() / DURATION) % KEYFRAMES);
  }, []);
  useEffect(() => {
    // set keyframe to be current time % KEYFRAMES in seconds
    setTimeout(() => {
      setKeyframe(Math.floor(Date.now() / DURATION) % KEYFRAMES);
    }, DURATION + 10 - (Date.now() % DURATION));
  }, [keyframe]);
  useEffect(() => {
    if (keyframe == 0) {
      setRoundtrips((r) => r + 1);
    }
  }, [keyframe]);

  const rng = useMemo(() => seedrandom(shaseed), [shaseed]);

  // create circles (position, size, color)

  const n = 2;

  const keyframes = useMemo(() => {
    function getColor() {
      return ["#194F39", "#E2A924", "#252116"][randint(rng, 0, 2)]!;
    }
    const frames: {
      rotation: number;
      circles: {
        position: { x: number; y: number };
        size: number;
        color: string;
      }[];
    }[] = [];
    for (let i = 0; i < KEYFRAMES; i++) {
      frames.push({
        rotation:
          ((i + KEYFRAMES - initialkeyframe) % KEYFRAMES) * 120 +
          roundtrips * 120 * KEYFRAMES,
        circles: Array(n)
          .fill(0)
          .map((_, j) => {
            return {
              position: {
                // x: randint(rng, -100, 100),
                // y: randint(rng, -100, 100),
                x: j == 0 ? -40 : 40,
                y: 0,
              },
              size: randint(rng, 30, 50),
              color: getColor(),
            };
          }),
      });
    }
    return frames;
  }, [rng, n, roundtrips, initialkeyframe]);

  const frame = keyframes[keyframe]!;

  return (
    <div
      className={classNames(
        "h-full w-full",
        DEBUG_COLORS ? "bg-green-100" : ""
      )}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0"
        animate={{
          rotate: frame.rotation,
        }}
        transition={{
          duration: DURATION / 1000,
          ease: [0.6, 0.8, 0.4, 0.6],
          // ease: "linear",
        }}
        initial={false}
      >
        {frame.circles.map((circle, i) => (
          <motion.div
            className="absolute top-1/2 left-1/2 rounded-full blur-sm"
            key={i}
            animate={{
              x: circle.position.x - circle.size / 2,
              y: circle.position.y - circle.size / 2,
              width: circle.size,
              height: circle.size,
              backgroundColor: circle.color,
            }}
            transition={{
              duration: DURATION / 1000,
              // ease: [0.6, 0.8, 0.1, 0.6],
              // ease: "linear",
            }}
            initial={false}
          />
        ))}
      </motion.div>
    </div>
  );
}

function StoryAnimation({ seed }: { seed: string }): JSX.Element {
  const KEYFRAMES = 60; // even if for some reason the time is timezone-dependent, mod 60 should still agree anywhere in the world
  const DURATION = 2000;
  const [shaseed, setShaseed] = useState("");
  const [keyframe, setKeyframe] = useState(0);

  useEffect(() => {
    sha256string(seed).then((hash) => {
      setShaseed(hash);
    });
  }, [seed]);

  useEffect(() => {
    // INITIAL KEYFRAME: set keyframe to be current time % KEYFRAMES in seconds
    setKeyframe(Math.floor(Date.now() / DURATION) % KEYFRAMES);
  }, []);
  useEffect(() => {
    // set keyframe to be current time % KEYFRAMES in seconds
    setTimeout(() => {
      setKeyframe(Math.floor(Date.now() / DURATION) % KEYFRAMES);
    }, DURATION + 10 - (Date.now() % DURATION));
  }, [keyframe]);

  const rng = useMemo(() => seedrandom(shaseed), [shaseed]);

  // create circles (position, size, color)

  const n = useMemo(() => {
    return randint(rng, 15, 20);
  }, [rng]);

  const keyframes = useMemo(() => {
    const initialCircles: {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      size: number;
      color: string;
    }[] = [];
    for (let i = 0; i < n; i++) {
      initialCircles.push({
        position: {
          x: randint(rng, -500, 500),
          y: randint(rng, -200, 200),
        },
        velocity: {
          x: randint(rng, -10, 10),
          y: randint(rng, -10, 10),
        },
        size: i < 2 ? randint(rng, 150, 200) : randint(rng, 10, 20),
        color: ["#194F39", "#E2A924", "#252116"][
          i < 2 ? (i < 1 ? 0 : 1) : randint(rng, 0, 2)
        ]!,
      });
    }
    const circles: {
      position: { x: number; y: number };
      velocity: { x: number; y: number };
      size: number;
      color: string;
    }[][] = [];
    circles.push(initialCircles);
    // the animation repeats every KEYFRAMES seconds, with 1 frame per second
    for (let i = 0; i < KEYFRAMES; i++) {
      const nextCircles = circles[i]!.map((circle) => {
        const newPosition = {
          x: circle.position.x + circle.velocity.x,
          y: circle.position.y + circle.velocity.y,
        };
        const newVelocity = {
          x: circle.velocity.x + randint(rng, -1, 1),
          y: circle.velocity.y + randint(rng, -1, 1),
        };
        const newSize = Math.max(circle.size + randint(rng, -2, 2), 20);
        return {
          ...circle,
          // position: newPosition,
          position: {
            x: randint(rng, -500, 500),
            y: randint(rng, -200, 200),
          },
          velocity: newVelocity,
          size: newSize,
          color: ["#194F39", "#E2A924", "#252116"][randint(rng, 0, 2)]!,
        };
      });
      circles.push(nextCircles);
    }
    return circles;
  }, [rng, n]);

  console.log("n", n);
  console.log("circles", keyframes[0]);

  return (
    <div
      className={classNames(
        "h-full w-full",
        DEBUG_COLORS ? "bg-green-100" : ""
      )}
    >
      {/* <div
        className={`animation-delay-2000 absolute top-[20px] left-[135px] h-[115px] w-[115px] animate-blob rounded-full bg-gradient-to-t 
                      from-asbrown-dark to-asbrown-dark/70 opacity-80 mix-blend-multiply shadow-lg shadow-stone-800 blur-lg filter
                      md:top-[10px] md:left-[-10px] md:h-[230px] md:w-[230px] `}
      ></div>
      <div
        className="absolute -top-[50px] left-[200px] h-[130px] w-[130px] animate-blob rounded-full bg-gradient-to-t from-asyellow-dark 
                      to-asyellow-light/70 opacity-80 mix-blend-multiply shadow-lg shadow-stone-800 blur-lg filter 
                      md:-top-[130px] md:left-[260px] md:h-[300px] md:w-[300px]"
      ></div>
      <div
        className="animation-delay-4000 absolute -bottom-4 left-10 h-[190px] w-[190px] animate-blob rounded-full bg-gradient-to-t from-asgreen-dark
                      to-asgreen-dark/70 opacity-90 mix-blend-multiply shadow-lg shadow-stone-800 blur-lg filter 
                      md:-bottom-3 md:left-0 md:h-[440px] md:w-[440px]"
      ></div> */}
      {keyframes[keyframe].map((circle, i) => (
        <motion.div
          className="blur-xs absolute top-1/2 left-1/2 rounded-full filter"
          animate={{
            x: circle.position.x - circle.size / 2,
            y: circle.position.y - circle.size / 2,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
          }}
          transition={{
            duration: DURATION / 1000,
            ease: [0.6, 0.8, 0.1, 0.6],
          }}
          initial={false}
          key={i}
        />
      ))}
    </div>
  );
}

export default function AddFriendInPerson({
  onClose,
  setStatus,
  story,
}: {
  onClose: () => void;
  setStatus: (status: StatusProps) => void;
  story: string;
}): JSX.Element {
  const [progress, setProgress] = useState<number>(0);
  const [showtedious, setShowtedious] = useState<boolean>(false);
  const [showverify, setShowverify] = useState<boolean>(false);
  const [theirstorylist, setTheirstory] = useState<string[]>([]);
  const [displayName, setDisplayName] = useState<string>("");
  const [uniqueName, setUniqueName] = useState<string>("");
  const [hasModifiedUniqueName, setHasModifiedUniqueName] =
    useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowtedious(true);
    }, 60000);
  }, [progress]);

  const storylist = useMemo(() => {
    const l = story.split(". ").map((line) => {
      if (line[line.length - 1] == ".") {
        return line;
      } else {
        return line + ".";
      }
    });
    setTheirstory(new Array<string>(l.length).fill(""));
    return l;
  }, [story]);

  useEffect(() => {
    if (theirstorylist.length == 0) {
      return;
    }
    console.log("theirstorylist", theirstorylist);
    let allComplete = true;
    theirstorylist.forEach((line) => {
      console.log("line", line);
      if (line.length == 0) {
        allComplete = false;
      }
    });
    if (allComplete) {
      setShowverify(true);
    }
  }, [theirstorylist]);

  const finish = useCallback(() => {
    if (displayName.length == 0) {
      setStatus({
        message: "Please enter a name.",
        action: () => {},
        actionName: null,
      });
      return;
    }
    window
      .addSyncFriend({
        uniqueName,
        displayName,
        story: theirstorylist.join(" "),
      })
      .then(() => {
        setStatus({
          message: `Added ${displayName} as a contact.`,
          action: () => {},
          actionName: null,
        });
        onClose();
      })
      .catch((err) => {
        setStatus({
          message: `Could not add ${displayName}: ${err}`,
          action: () => {},
          actionName: null,
        });
      });
  }, [theirstorylist, uniqueName, displayName, setStatus, onClose]);

  const shareStoriesComponent = (
    <>
      <h3
        className={classNames(
          "absolute left-0 right-0 top-14 text-center font-['Lora'] text-xl",
          DEBUG_COLORS ? "bg-yellow-700" : ""
        )}
      >
        Share stories with each other.
      </h3>
      <h6 className="absolute top-24 left-0 right-0 text-center text-xs text-asbrown-light">
        These correspond to your public key, and allow you and your friend to
        communicate privately.
      </h6>
      <div
        className={classNames(
          "absolute bottom-20 top-36 left-0 right-0 grid",
          DEBUG_COLORS ? "bg-purple-100" : ""
        )}
      >
        <div
          className={classNames(
            "grid grid-cols-2 divide-x divide-asbrown-100 self-center",
            DEBUG_COLORS ? "bg-purple-100" : ""
          )}
        >
          <div
            className={classNames(
              "grid items-center px-8 ",
              DEBUG_COLORS ? "bg-green-100" : ""
            )}
          >
            <div className="pb-4">
              <h3 className="pb-8 text-center text-xs text-asbrown-light">
                Your story.
              </h3>
              <div className="grid gap-4">
                {storylist.map((feature, index) => (
                  <div className="flex flex-row gap-4" key={index}>
                    <p className="text-sm text-asbrown-300">{index + 1}.</p>
                    <p className="mb-[2px] text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className={classNames(
              "grid items-center px-8 ",
              DEBUG_COLORS ? "bg-red-100" : ""
            )}
          >
            <div className="pb-4">
              <h3 className="pb-8 text-center text-xs text-asbrown-light">
                Their story.
              </h3>
              <StoryForm
                theirstory={theirstorylist}
                setTheirStory={(story) => setTheirstory(story)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-8 grid items-center justify-center text-center">
        <button
          className={classNames(
            "unselectable rounded-lg bg-asbrown-100 px-3 py-1 text-asbrown-light",
            showverify ? "" : "disabled cursor-not-allowed opacity-20"
          )}
          onClick={() => {
            console.log("next step");
            if (showverify) {
              setProgress(1);
            }
          }}
        >
          Verify
        </button>
      </div>
      <p
        className={classNames(
          "absolute left-0 right-0 bottom-2 self-center px-20 text-center text-xs transition",
          showtedious ? "text-asbrown-200" : "text-transparent"
        )}
      >
        Tedious? We know, complete privacy is work. But trust us, it is worth
        it.
      </p>
    </>
  );

  const verifyStoriesComponent = (
    <>
      <h3
        className={classNames(
          "absolute left-0 right-0 top-14  z-10 text-center font-['Lora'] text-xl",
          DEBUG_COLORS ? "bg-yellow-700" : ""
        )}
      >
        Are the animations identical?
      </h3>
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <StoryAnimation seed={story + theirstorylist.join("")} />
      </div>
      <div className="absolute left-0 right-0 bottom-8 grid items-center justify-center text-center">
        <button
          className={classNames(
            "unselectable rounded-lg bg-asbrown-100 px-3 py-1 text-asbrown-light"
          )}
          onClick={() => {
            setProgress(2);
          }}
        >
          Yes, they are identical.
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-2 grid items-center justify-center text-center">
        <button
          className="unselectable ring-none text-xs text-asbrown-200 outline-none"
          onClick={() => setProgress(0)}
        >
          ‹ No, take me back.
        </button>
      </div>
    </>
  );
  const finishComponent = (
    <>
      <h3
        className={classNames(
          "absolute left-0 right-0 top-14  z-10 text-center font-['Lora'] text-xl",
          DEBUG_COLORS ? "bg-yellow-700" : ""
        )}
      >
        Great! What do you want to call them?
      </h3>
      <div
        className={classNames(
          "absolute bottom-20 top-36 left-0 right-0",
          DEBUG_COLORS ? "bg-purple-100" : ""
        )}
      >
        <div className="grid h-full w-full grid-cols-1 justify-center justify-items-center">
          <div></div>
          <div className="relative h-32 w-32">
            <StoryAnimationSmall seed={story + theirstorylist.join("")} />{" "}
          </div>
          <div></div>
          <div className="grid h-fit grid-cols-1 gap-4">
            <input
              type="text"
              autoFocus={true}
              className="
          m-0
          block
          h-fit
          w-full
          border-0
          border-b-2
          border-asbrown-100
          p-2 text-center text-xl
          placeholder-asbrown-300 focus:border-asbrown-300
          focus:ring-0
          "
              onChange={(e) => {
                setDisplayName(e.target.value);
                if (!hasModifiedUniqueName) {
                  setUniqueName(
                    generateUniqueNameFromDisplayName(e.target.value)
                  );
                }
              }}
              value={displayName}
              placeholder="First Last"
            />
            <input
              type="text"
              className="m-0
          block
          h-fit
          w-full
          border-0
          border-asbrown-100
          p-0
          text-center text-sm text-asbrown-light
          placeholder-asbrown-300 focus:border-asbrown-300
          focus:ring-0
          "
              onChange={(e) => {
                setUniqueName(e.target.value);
                setHasModifiedUniqueName(true);
              }}
              value={uniqueName}
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-8 grid items-center justify-center text-center">
        <button
          className={classNames(
            "unselectable rounded-lg bg-asbrown-100 px-3 py-1 text-asbrown-light",
            showverify ? "" : "disabled cursor-not-allowed opacity-20"
          )}
          onClick={() => {
            finish();
          }}
        >
          Finish
        </button>
      </div>
      <div className="absolute left-0 right-0 bottom-2 grid items-center justify-center text-center">
        <button
          className="unselectable ring-none text-xs text-asbrown-200 outline-none"
          onClick={() => setProgress(1)}
        >
          ‹ Go back
        </button>
      </div>
    </>
  );

  return (
    <div className="grid h-full w-full items-center">
      <div
        className={classNames(
          "unselectable relative h-full",
          DEBUG_COLORS ? "bg-yellow-100" : ""
        )}
      >
        <ProgressBar progress={progress} />
        {(() => {
          switch (progress) {
            case 0:
              return shareStoriesComponent;
            case 1:
              return verifyStoriesComponent;
            case 2:
              return finishComponent;
            default:
              console.log("ERRORRRRRR");
          }
        })()}
      </div>
    </div>
  );
}

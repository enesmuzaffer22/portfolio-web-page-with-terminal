import { useState, useEffect, useRef } from "react";
import commandsData from "./commands.json";

function TerminalScreen(props) {
  const [inputValue, setInputValue] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [currentOutput, setCurrentOutput] = useState(null);
  const terminalOutputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // 500ms aralıklarla yanıp söner

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of terminal output when content changes
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop =
        terminalOutputRef.current.scrollHeight;
    }
  }, [currentOutput]);

  // Terminal container'a tıklandığında input alanına focus ver
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Terminal görünür olduğunda input'a focus ver
  useEffect(() => {
    if (props.isShellOpenProp && inputRef.current) {
      inputRef.current.focus();
    }
  }, [props.isShellOpenProp]);

  const handleCommandSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const command = inputValue.trim();

    // Process command
    let response =
      "Command not recognized. Type 'muxo help' for available commands.";

    if (commandsData.commands[command]) {
      response = commandsData.commands[command].response;

      // Handle clear command
      if (command === "muxo clear") {
        setCurrentOutput(null);
        setInputValue("");
        return;
      }
    }

    if (command === "muxo exit") {
      props.setIsShellOpen(false);
      setInputValue("");
      return;
    }

    setCurrentOutput(response);
    setInputValue("");
  };

  // Initial terminal welcome text
  const welcomeText = `
███╗░░░███╗██╗░░░██╗██╗░░██╗░█████╗░  ░██████╗██╗░░██╗███████╗██╗░░░░░██╗░░░░░
████╗░████║██║░░░██║╚██╗██╔╝██╔══██╗  ██╔════╝██║░░██║██╔════╝██║░░░░░██║░░░░░
██╔████╔██║██║░░░██║░╚███╔╝░██║░░██║  ╚█████╗░███████║█████╗░░██║░░░░░██║░░░░░
██║╚██╔╝██║██║░░░██║░██╔██╗░██║░░██║  ░╚═══██╗██╔══██║██╔══╝░░██║░░░░░██║░░░░░
██║░╚═╝░██║╚██████╔╝██╔╝╚██╗╚█████╔╝  ██████╔╝██║░░██║███████╗███████╗███████╗
╚═╝░░░░░╚═╝░╚═════╝░╚═╝░░╚═╝░╚════╝░  ╚═════╝░╚═╝░░╚═╝╚══════╝╚══════╝╚══════╝

${commandsData.welcomeMessage}

Type 'muxo help' to see available commands.

--------------------------------------------------------------------------------------------------------------
`;

  return (
    <div
      className={`${
        props.isShellOpenProp ? "flex" : "hidden"
      } terminal-container bg-black absolute w-full z-10 flex-col`}
      onClick={handleTerminalClick}
      style={{ height: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div
        className="terminal-output flex-grow overflow-y-auto p-4"
        ref={terminalOutputRef}
      >
        <p
          className="font-ubuntu-mono! text-white text-[16px]"
          style={{ whiteSpace: "pre-line" }}
        >
          {welcomeText}
        </p>

        {/* Current command output */}
        {currentOutput && (
          <p
            className="text-white font-ubuntu-mono! mt-1"
            style={{ whiteSpace: "pre-line" }}
          >
            {currentOutput}
          </p>
        )}
      </div>

      <form
        onSubmit={handleCommandSubmit}
        className="terminal-input py-6 px-4 flex items-center"
      >
        <label htmlFor="shell-input" className="text-white font-ubuntu-mono!">
          AnonymousUser@::{" "}
        </label>
        <div className="relative flex-grow">
          <input
            type="text"
            id="shell-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="font-ubuntu-mono! bg-transparent border-none outline-none focus:ring-0 text-white caret-transparent w-full"
            autoFocus
            ref={inputRef}
            autoComplete="off"
          />
          {/* Eğer input boşsa, yanıp sönen "_" göster */}
          {inputValue === "" && (
            <span
              className={`absolute left-0 ${
                cursorVisible ? "opacity-100" : "opacity-0"
              } text-white`}
            >
              _
            </span>
          )}
        </div>
      </form>
    </div>
  );
}

export default TerminalScreen;

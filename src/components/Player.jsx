import {useRef, useState} from "react";

export default function Player() {
    const playerName = useRef();

    const [username, setUsername] = useState(null);
    // const [submitted, setSubmitted] = useState(false);

    // function handleOnchange(event) {
    //     setSubmitted(false);
    //     setUsername(event.target.value);
    // }
    function handleOnclick() {
        // setSubmitted(true);
        setUsername(playerName.current.value);
        playerName.current.value = '';
    }

  return (
    <section id="player">
      <h2>Welcome { username ?? 'unknown entity' }</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleOnclick}>Set Name</button>
      </p>
    </section>
  );
}

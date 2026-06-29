import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import VoiceStatus from "./VoiceStatus";
import { setActiveQuery } from "../../../redux/Slices/videoSlice";

function VoiceSearch({ setSearchQuery }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support voice search.</p>;
  }

  const startListening = () => {
    setShowModal(true);
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    const query = transcript.trim();
    dispatch(setActiveQuery(query));
    setSearchQuery(query);
    navigate("/", { replace: false });
    resetTranscript();
    setShowModal(false);
  };

  const toggleListening = () =>
    listening ? stopListening() : startListening();

  return (
    <div>
      <button
        onClick={toggleListening}
        className="p-3 ml-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200"
      >
        <FaMicrophone />
      </button>

      {showModal && (
        <VoiceStatus
          listening={listening}
          onClose={stopListening}
          transcript={transcript}
          toggleListening={toggleListening}
        />
      )}
    </div>
  );
}

export default VoiceSearch;

import { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import VoiceStatus from "./VoiceStatus";
import { useDebounce } from "../hooks/useDebounce";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveQuery } from "../../../redux/Slices/videoSlice";
import { replace, useNavigate } from "react-router-dom";

function VoiceSearch({ setSearchQuery }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser does not support voice search.</p>;
  }
  const navigate = useNavigate();
  const debouncedSearch = useDebounce((text) => {
    dispatch(setActiveQuery(text));
    setSearchQuery(text);
    navigate("/", { replace: false });
    setShowModal(false);
  }, 2000);

  useEffect(() => {
    if (transcript) {
      debouncedSearch(transcript);
    }
  }, [transcript]);

  const startListening = () => {
    setShowModal(true);
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setSearchQuery(transcript);
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

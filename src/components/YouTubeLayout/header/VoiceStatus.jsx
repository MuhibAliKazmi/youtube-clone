import { FaMicrophone } from "react-icons/fa";

function VoiceStatus({ listening, onClose, transcript, toggleListening }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center bg-black/20 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="absolute top-[10px] bg-slate-700 text-white rounded-xl p-12 w-[500px] flex flex-col items-center gap-6"
      >
        <p className="text-lg mb-4">
          {transcript ||
            (listening ? "Listening..." : "Microphone off. Try again.")}
        </p>

        <div
          onClick={toggleListening}
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            listening ? "bg-red-600 animate-ping" : "bg-gray-600"
          }`}
        >
          <FaMicrophone className="text-2xl text-white" />
        </div>

        {!listening && (
          <p className="text-sm text-gray-400">Tap microphone to try again</p>
        )}

        <div className="mt-4 text-center text-white/90">"Say something..."</div>
      </div>
    </div>
  );
}

export default VoiceStatus;

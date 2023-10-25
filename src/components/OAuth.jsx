export default function OAuth() {
  const handleGoogleClick = async () => {
    try {
      console.log("a");
    } catch (error) {
      console.log("Could Not Sign In with Google", error);
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
    >
      Continue With Google
    </button>
  );
}

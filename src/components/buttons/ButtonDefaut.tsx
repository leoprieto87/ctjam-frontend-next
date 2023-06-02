type ButtonProps = {
  text: string
}

// eslint-disable-next-line no-undef
export const ButtonDefault: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="bg-blueActions text-white my-2 py-3 px-6 rounded-xl text-center w-full"
      type="submit"
    >
      {text}
    </button>
  )
}

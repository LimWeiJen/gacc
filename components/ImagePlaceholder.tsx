interface ImagePlaceholderProps {
  text: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ text, className = "" }) => {
  return (
    <div className={`bg-gray-800/50 border border-gray-600 border-dashed flex items-center justify-center p-4 ${className}`}>
      <span className="text-gray-400 text-center text-sm lg:text-base font-content">
        [ Image Placeholder: {text} ]
      </span>
    </div>
  );
};

export default ImagePlaceholder;

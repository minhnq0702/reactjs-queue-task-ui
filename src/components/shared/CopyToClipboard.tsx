import { FaCopy } from 'react-icons/fa6';
import { toast } from 'sonner';
import './CopyToClipboard.css';

export interface CCopyToClipboardProps {
  content: string;
  onCopy?: () => void;
}

const CCopyToClipboard = (props: CCopyToClipboardProps) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.info('Copied to clipboard', { duration: 700 });
        props.onCopy?.();
      },
      (err) => {
        // do what with error
        console.error('Failed to copy: ', err);
      },
    );
  };
  return (
    <div className="copy-clipboard-container">
      <span>{props.content}</span>
      <span className="icon" onClick={() => copyToClipboard(props.content)}>
        <FaCopy />
      </span>
    </div>
  );
};

export default CCopyToClipboard;

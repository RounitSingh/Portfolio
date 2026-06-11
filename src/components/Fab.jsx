import { useEffect, useRef } from "react";
import { MDCRipple } from "@material/ripple";
import { FileText } from "lucide-react";

const Fab = ({
  Icon = FileText,
  label = "Resume",
  extended = true,
  href,
  onClick,
  className = "",
}) => {
  const fabRef = useRef(null);

  useEffect(() => {
    if (!fabRef.current) return;

    const ripple = new MDCRipple(fabRef.current);
    return () => ripple.destroy();
  }, []);

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
      return;
    }

    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className={`fab-border-wrap ${className}`}>
      <button
        ref={fabRef}
        type='button'
        className={`mdc-fab ${extended ? "mdc-fab--extended" : ""}`}
        aria-label={label}
        onClick={handleClick}
      >
        <div className='mdc-fab__ripple' />
        <span className='mdc-fab__focus-ring' />
        <span className='mdc-fab__icon'>
          <Icon size={24} strokeWidth={2} aria-hidden />
        </span>
        {extended && <span className='mdc-fab__label'>{label}</span>}
      </button>
    </div>
  );
};

export default Fab;

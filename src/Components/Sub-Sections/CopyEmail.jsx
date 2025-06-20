import { useState } from "react";
import { AnimatePresence, easeInOut, motion } from "motion/react";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const email = "Akhilesh0222R@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <>
      <motion.button
        onClick={copyToClipboard}
        whileHover={{y:-5}}
        whileTap={{scale:1.05}}
        className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
      >
        <AnimatePresence mode="wait">
        {!copied ? (
          <motion.p 
          key="copy"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{opacity:0.1}}
          className="flex items-center justify-center gap-2">
          <img src="assets/copy.svg" alt="Copy icon" className="w-5" />
          Copy Email Address
          </motion.p>
        ) : (
          <p
          key="copied"
          initial={{ opacity: 1, y: -10 }}
          animate={{ opacity: 0, y: 10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="flex items-center justify-center gap-2">
          <img src="assets/copy-done.svg" alt="Copy icon" className="w-5" />
          Email has Copied
          </p>
        )}
      </AnimatePresence>
      </motion.button>
    </>
  );
};

export default CopyEmail;
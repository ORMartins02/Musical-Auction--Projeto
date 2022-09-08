import { UserPage } from "../../components/user";
import { motion } from "framer-motion";

export const User = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <UserPage />
    </motion.div>
  );
};

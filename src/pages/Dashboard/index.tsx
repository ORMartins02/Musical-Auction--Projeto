import { Header } from "../../components/dashboard/Header";
import { Main } from "../../components/dashboard/Main";
import { motion } from "framer-motion";

export const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <Main />
    </motion.div>
  );
};

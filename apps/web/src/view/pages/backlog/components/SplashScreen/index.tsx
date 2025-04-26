import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { SplashScreenType } from './@types/splash-screen.types';
import { Spinner } from 'src/components/Spinner';

export const SplashScreen: React.FC<SplashScreenType> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-0 bottom-0 inset-0 flex items-center justify-center bg-gray-800 z-50"
        >
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center items-center gap-4 text-gray-300 text-xl font-bold"
          >
            <section className='flex flex-col justify-center items-center text-center'>
            <span className='font-semibold'>Carregando items do backlog...</span>
            <span className='text-sm text-gray-400'>Aguarde enquantos buscamos os items do projeto</span>
            </section>
            <Spinner className='fill-indigo-700 text-gray-300' />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
